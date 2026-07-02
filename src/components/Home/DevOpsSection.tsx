import { useEffect, useRef } from "react";

type Line =
  | { type: "prompt"; cmd: string }
  | { type: "output" | "header" | "up"; text: string };

const LINES: Line[] = [
  { type: "prompt", cmd: "docker compose up -d" },
  { type: "prompt", cmd: "docker ps" },
  { type: "output", text: "" },
  { type: "header", text: "IMAGE           NAMES     STATUS  PORTS" },
  { type: "up", text: "node:20-alpine  portfolio Up 1s   :3000" },
  { type: "up", text: "lavendia:latest lavendia  Up 1s   :8080" },
];

const CHAR_DELAY = 38;
const LINE_DELAY = 220;

export default function DevOpsSection() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function schedule(fn: TimerHandler, delay: number) {
    timers.current.push(setTimeout(fn, delay));
  }

  function animate() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const body = bodyRef.current;
    if (!body) return;
    body.innerHTML = "";
    let delay = 300;

    LINES.forEach((line) => {
      schedule(() => {
        const el = document.createElement("div");
        el.className = `line ${line.type}`;
        el.style.whiteSpace = "pre";
        body!.appendChild(el);

        if (line.type === "prompt") {
          const cmd = line.cmd;
          let ci = 0;
          function typeChar() {
            el.textContent = `loic@dev:~/portfolio$ ${cmd.slice(0, ci)}`;
            if (ci < cmd.length) {
              ci++;
              timers.current.push(setTimeout(typeChar, CHAR_DELAY));
            }
          }
          typeChar();
        } else {
          el.textContent = line.text || " ";
        }
      }, delay);

      delay +=
        line.type === "prompt"
          ? line.cmd.length * CHAR_DELAY + LINE_DELAY
          : LINE_DELAY;
    });
  }

  useEffect(() => {
    animate();
    return () => timers.current.forEach(clearTimeout);
  });

  return (
    <section className="w-[35.5vw] h-[25vh] p-2 bg-(--second-bg)/40 border border-(--border) rounded-2xl font-mono text-sm overflow-hidden">
      <div className="bg-black rounded-xl border border-(--border) h-full">
        <div
          ref={bodyRef}
          className="p-2 [&_.prompt]:text-[#c9d1d9] [&_.header]:text-[#79c0ff] [&_.up]:text-[#7ee787] [&_.output]:text-[#8b949e]"
        />
      </div>
    </section>
  );
}
