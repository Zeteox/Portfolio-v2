import { BsCodeSlash, BsGithub, BsLinkedin } from "react-icons/bs";
import profile from "../../assets/profile.webp";
import { CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-7 pt-8 pb-8 md:pt-8 md:pb-8 items-center justify-center w-[85vw] md:w-[38] lg:w-[35vw] h-auto md:h-[90vh] bg-(--second-bg)/40 border border-(--border) text-(--text) rounded-2xl">
      <img
        src={profile}
        alt="Profile"
        className="rounded-full border-3 border-(--border) bg-amber-50 h-[25vh] lg:h-[35vh] aspect-square"
      />

      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="px-6 py-2 text-(--h-text) bg-(--second-bg)/50 rounded-2xl text-4xl font-bold text-center">
          DELPRAT Loïc
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-(--second-bg)/50 rounded-2xl text-lg text-center">
          <BsCodeSlash className="text-md" />
          class Dev import DevOps
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-(--second-bg)/50 rounded-2xl text-lg text-center">
          <LuMapPin className="text-md" />
          Toulouse
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-(--second-bg)/50 rounded-2xl text-lg text-center">
          <CiMail className="text-md" />
          <a href="mailto:delprat.loic@gmail.com">contact@loic-delprat.fr</a>
        </div>
      </div>

      <div className="flex flex-row gap-5 items-center justify-center">
        <a
          href="https://github.com/Zeteox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/loic-delprat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-3xl" />
        </a>
      </div>
    </section>
  );
}
