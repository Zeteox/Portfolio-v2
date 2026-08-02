import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CleanWord } from "../utils/utils";
import { AllPages } from "../data/AllPages";

interface PageContent {
  title: string;
  sections: { title: string; content: string }[];
}

export default function Content() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [content, setContent] = useState<PageContent | null>(null);

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
    <div className="flex flex-col gap-8 m-4 overflow-y-scroll overflow-x-auto">
      <div className="flex items-center justify-between text-(--text)">
        <button
          className="hover:text-(--border) focus:text-(--border)"
          onClick={() => goTo("/")}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <div className="w-6" />
      </div>
      <div className="flex flex-col gap-6">
        {content.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            {section.title && (
              <h2 className="text-xl font-semibold">{section.title}</h2>
            )}
            <p className="text-(--text)">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
