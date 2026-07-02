export default function ButtonSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-[85vw] md:w-[55vw] h-[60vh] bg-(--second-bg)/40 border border-(--border) rounded-2xl text-(--text) p-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full">
        <button className="flex flex-col items-center justify-center border border-(--border) rounded-2xl transition-all duration-300 hover:scale-102">
          About
          <span className="text-(--text) text-sm opacity-50">//whoami</span>
        </button>
        <button className="flex flex-col items-center justify-center border border-(--border) rounded-2xl transition-all duration-300 hover:scale-102">
          Formations
          <span className="text-(--text) text-sm opacity-50">
            //grep parcour
          </span>
        </button>
        <button className="flex flex-col items-center justify-center border border-(--border) rounded-2xl transition-all duration-300 hover:scale-102 col-span-1 lg:row-span-2">
          CV
          <span className="text-(--text) text-sm opacity-50">//cat cv.pdf</span>
        </button>
        <button className="flex flex-col items-center justify-center border border-(--border) rounded-2xl transition-all duration-300 hover:scale-102 col-span-1 lg:col-span-2">
          Projects
          <span className="text-(--text) text-sm opacity-50">
            //ls -la projects
          </span>
        </button>
      </div>
    </section>
  );
}
