import { useInterval } from "react-use";
import { useState } from "react";

export default function HourSection() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("fr").split(":"),
  );

  useInterval(() => {
    setTime(new Date().toLocaleTimeString("fr").split(":"));
  }, 1000);

  return (
    <section className="relative w-[17vw] h-[25vh] bg-gray-800/40 border border-purple-700 rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-7xl">
          {time[0]}:{time[1]}
        </p>
      </div>
    </section>
  );
}
