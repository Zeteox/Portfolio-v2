import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function CV() {
  const navigate = useNavigate();

  function goTo(path: string) {
    if (!document.startViewTransition) {
      navigate(path);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => navigate(path));
    });
  }

  return (
    <section className="flex flex-col gap-8 m-4 overflow-y-scroll overflow-x-auto">
      <div className="flex items-center justify-between text-(--text)">
        <button
          className="hover:text-(--border) focus:text-(--border)"
          onClick={() => goTo("/")}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl font-bold">CV</h1>
        <div className="w-6" />
      </div>
      <div className="flex justify-center flex-1">
        <iframe
          src="/CV_DELPRAT_Loic_2026.pdf"
          className="w-full h-screen rounded-lg"
        />
      </div>
    </section>
  );
}
