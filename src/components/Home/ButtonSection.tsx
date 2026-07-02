export default function ButtonSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-[55vw] h-[60vh] bg-(--second-bg)/40 border border-(--border) rounded-2xl text-(--text)">
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row justify-center gap-5">
            <button className="flex flex-col items-center justify-center w-[20vw] h-[20vh] border border-(--border) px-4 py-2 rounded-2xl hover:transition-all hover:duration-300 hover:transform hover:scale-102">
              About
              <span className="text-(--text) text-sm opacity-50">//whoami</span>
            </button>
            <button className="flex flex-col items-center justify-center w-[20vw] h-[20vh] border border-(--border) px-4 py-2 rounded-2xl hover:transition-all hover:duration-300 hover:transform hover:scale-102">
              Formations
              <span className="text-(--text) text-sm opacity-50">
                //grep parcour
              </span>
            </button>
          </div>

          <button className="flex flex-col items-center justify-center h-[30vh] w-full border border-(--border) px-4 py-2 rounded-2xl hover:transition-all hover:duration-300 hover:transform hover:scale-102">
            Projects
            <span className="text-(--text) text-sm opacity-50">
              //ls -la projects
            </span>
          </button>
        </div>

        <button className="h-full w-[7vw] border border-(--border) px-4 py-2 rounded-2xl hover:transition-all hover:duration-300 hover:transform hover:scale-102">
          CV
        </button>
      </div>
    </section>
  );
}
