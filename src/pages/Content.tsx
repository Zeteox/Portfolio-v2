import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CleanWord } from "../utils/utils";
import { AllPages } from "../data/AllPages";

interface PageContentBase {
  title: string;
  sections: { title: string; style: string; content: string }[];
}
interface PageContentGrid {
  title: string;
  sections: { title: string; style: string; content: string | { langages: string[], frameworks: string[], tools: string[] } }[];
}

export default function Content() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [content, setContent] = useState<PageContentBase | PageContentGrid | null>(null);

  function goTo(path: string) {
    if (!document.startViewTransition) {
      navigate(path);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => navigate(path));
    });
  }

  useEffect(() => {
    const pageName = CleanWord(pathname.slice(1));
    const page = AllPages.find(p => CleanWord(p.title) === pageName);

    if (!page) {
      navigate("/404");
    } else {
      setContent(page);
    }
  }, [pathname, navigate]);

  if (!content) {
    return null;
  }

  return (
    <section className="flex flex-col gap-8 m-4 overflow-hidden h-full">
      <div className="flex items-center justify-between text-(--text) border-b border-(--border) pb-3">
        <button
          className="hover:text-(--border) focus:text-(--border)"
          onClick={() => goTo("/")}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <div className="w-6" />
      </div>

      <div className="flex flex-1 overflow-y-scroll rounded-2xl">
        <div className="grid grid-cols-2 gap-6">
        {content.sections.map((section, index) => (
          <div key={index} className={`flex flex-col gap-2
            ${section.style === "case" ? "p-6 border rounded-2xl border-(--border)" : ""}
            ${section.style === "grid" ? "p-6 border rounded-2xl border-(--border) col-span-2 text-center items-center" : ""}
            `}>
            {section.title && (
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            )}
            <span className={`h-px w-2/3 mb-2 bg-(--border)`}></span>
            {typeof section.content === "string" ? (
              <p className="text-lg">{section.content}</p>
            ) : (
              <div className="flex flex-row gap-5">
                  {Object.entries(section.content).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-2">
                      <span className="text-xl">{CleanWord(key)}</span>
                      <div className="flex flex-wrap gap-2 text-center items-center justify-center border border-(--border) rounded-2xl p-4">
                        {value.map((l, i) => <span className="bg-(--second-bg) rounded-full px-2 py-1" key={i}>{l}</span>)}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
