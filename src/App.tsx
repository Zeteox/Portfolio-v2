import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Home/HeroSection";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  const isBorder = window.location.pathname !== "/";
  return (
    <>
      <div className="h-screen flex flex-row items-center justify-center gap-8">
        <HeroSection />

        <div
          className={`flex flex-col items-center justify-center gap-8 ${isBorder ? "border border-(--border)" : ""} rounded-2xl`}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>

      <Footer />
    </>
  );
}
