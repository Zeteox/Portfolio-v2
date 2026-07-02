import ButtonSection from "../components/Home/ButtonSection";
import DevOpsSection from "../components/Home/DevOpsSection";
import HourSection from "../components/Home/HourSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8">
        <DevOpsSection />
        <HourSection />
      </div>

      <ButtonSection />
    </>
  );
}
