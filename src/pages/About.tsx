import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
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
    <div className="flex flex-col flex- gap-8 m-4 overflow-y-scroll overflow-x-auto">
      <div className="grid grid-cols-3 grid-rows-1">
        <button
          className="text-(--text) hover:text-(--border) focus:text-(--border) "
          onClick={() => goTo("/")}
        >
          <FaArrowLeft />
        </button>
        <span className="flex-1"></span>
      </div>

      <div className="flex"></div>
    </div>
  );
}
