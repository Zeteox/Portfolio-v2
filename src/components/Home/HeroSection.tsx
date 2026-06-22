import { BsCodeSlash, BsGithub, BsLinkedin } from "react-icons/bs";
import profile from "../../assets/profile.webp";
import { CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-7 items-center justify-center w-[35vw] h-[90vh] bg-gray-800/40 border border-purple-700 rounded-2xl">
      <img
        src={profile}
        alt="Profile"
        className="rounded-full bg-amber-50 w-[20vw] aspect-square"
      />

      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="px-6 py-2 text-white bg-gray-700/50 rounded-2xl text-4xl font-bold text-center">
          DELPRAT Loïc
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-700/50 rounded-2xl text-lg text-center">
          <BsCodeSlash className="text-white text-md" />
          class Dev import DevOps
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-700/50 rounded-2xl text-lg text-center">
          <LuMapPin className="text-white text-md" />
          Toulouse
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-700/50 rounded-2xl text-lg text-center">
          <CiMail className="text-white text-md" />
          <a href="mailto:delprat.loic@gmail.com">contact@loic-delprat.fr</a>
        </div>
      </div>

      <div className="flex flex-row gap-5 items-center justify-center">
        <a
          href="https://github.com/Zeteox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="text-white text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/loic-delprat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-white text-3xl" />
        </a>
      </div>
    </section>
  );
}
