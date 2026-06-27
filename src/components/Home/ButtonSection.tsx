export default function ButtonSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-[55vw] h-[60vh] bg-(--second-bg)/40 border border-(--border) rounded-2xl text-(--text)">
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row justify-center gap-5">
            <button className="w-[20vw] h-[20vh] bg-purple-700 px-4 py-2 rounded-2xl">
              About
            </button>
            <button className="w-[20vw] h-[20vh] bg-purple-700 px-4 py-2 rounded-2xl">
              Formations
            </button>
          </div>

          <button className="h-[30vh] w-full bg-purple-700 px-4 py-2 rounded-2xl">
            Projects
          </button>
        </div>

        <button className="h-full w-[7vw] bg-purple-700 rounded-2xl hover:w-[8vw] hover:transition-all hover:duration-300  ">
          CV
        </button>
      </div>
    </section>
  );
}
