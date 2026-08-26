import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { flushSync } from "react-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { CleanWord } from "../utils/utils";
import { AllPages } from "../data/AllPages";
import { CiCalendar } from "react-icons/ci";

interface DefaultSection {
  title: string;
  style?: string;
  content: string;
}

interface AdvancedContentSection {
  title: string;
  content: string;
}

interface CardItem {
  title: string;
  projectNature: string;
  projectType: string;
  content: string;
  date: string;
  advancedContent: AdvancedContentSection[];
  imageB64?: string;
  link: string;
}

interface TimelineItem {
  title: string;
  date: string;
  content: string;
  altContent?: string | DefaultSection[];
}

interface GridItems {
  langages: string[];
  frameworks: string[];
  tools: string[];
}

interface Section {
  title: string;
  style?: string;
  content: string | GridItems | TimelineItem[] | CardItem[];
}

interface PageContent {
  title: string;
  sections: Section[];
}

export default function Content() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
    <section className="flex flex-col gap-8 m-4 overflow-hidden h-full text(--text)">
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
            ${section.style === "timeline" || section.style === "card" ? "col-span-2" : ""}
            `}>
            {section.title && (
              <h2 className="text-2xl font-semibold">{parse(section.title)}</h2>
            )}
            {section.title !== "" ? (
              <span className={`h-px w-2/3 mb-2 bg-(--border)`}></span>
            ) : null}
            {typeof section.content === "string" ? (
              // Case style
              <p className="text-lg">{section.content}</p>
            ) : Array.isArray(section.content) ? (
                section.style === "card" ? (
                  // Card style
                  <div className="grid grid-cols-3 w-full gap-5 items-center text-left">
                    {(section.content as CardItem[]).map((item: CardItem, i: number) => (
                      <div key={i} className="flex flex-col gap-1 border border-(--border) rounded-2xl h-full p-6">
                        <h3 className="text-2xl font-semibold text-center">{parse(item.title)}</h3>
                        <span className="text-sm italic text-(--border)">Projet {parse(item.projectNature)} -  {parse(item.projectType)}</span>
                        <p className="text-lg">{parse(item.content)}</p>
                        <span className="flex items-center gap-1 text-sm my-2">
                          <CiCalendar className="inline text-xl text-(--border)" /> {parse(item.date)}
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-center text-md text-(--border)">
                          {/* <button onClick={() => setExpandedIndex(i)} className="rounded-xl border border-(--border) hover:border-(--text) focus:border-(--text) hover:text-(--text) focus:text-(--text) my-2"> Détails </button> */}
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 justify-center rounded-xl border border-(--border) hover:border-(--text) focus:border-(--text) hover:text-(--text) focus:text-(--text) my-2">
                            Github <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
              ) : (

              // Timeline style
              <div className='flex flex-col gap-1 col-span-2 mt-4'>
                {(section.content as TimelineItem[]).map((item: TimelineItem, i: number) => (
                  <div key={i} className={`flex gap-4`}>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-5 bg-(--border) rounded-full"></div>
                      {i < (section.content as TimelineItem[]).length && (
                        <div className="w-1 h-full bg-(--border) mt-1"></div>
                      )}
                    </div>

                    {item.altContent ? (
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                        className={`
                          p-2 rounded-2xl border border-(--border) mb-4 transition-all duration-300 text-left w-2/3
                          ${expandedIndex === i ? "p-4 border border-(--text) w-full overflow-y-scroll overflow-x-auto" : "hover:border-(--text) hover:border-2 hover:scale-101"}
                        `}
                        style={{ transformOrigin: "top left"}}
                      >
                        <h3 className="text-xl font-semibold">{parse(item.title)}</h3>
                        <p className="text-sm text-(--border) mb-2">{parse(item.date)}</p>
                        <p className="text-lg">{parse(item.content)}</p>
                        {expandedIndex === i ? (
                          typeof item.altContent === "string" ? (
                            <p className="text-lg mt-4">{parse(item.altContent)}</p>
                          ) : null
                        ) : null}
                      </button>
                    ) : (
                      <div className="p-2 rounded-2xl border border-(--border) mb-4 w-2/3">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-(--border) mb-2">{item.date}</p>
                        <p className="text-lg">{parse(item.content)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              )
            ) : (
              // Grid style
              <div className="flex flex-row gap-5">
                {Object.entries(section.content).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-2">
                    <span className="text-xl">{CleanWord(key)}</span>
                    <div className="flex flex-wrap gap-2 text-center items-center justify-center border border-(--border) rounded-2xl p-4">
                      {value.map((l: string, i: number) => <span className="bg-(--second-bg) rounded-full px-2 py-1" key={i}>{parse(l)}</span>)}
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
