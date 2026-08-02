import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HeroSection from "./components/Home/HeroSection";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import CV from "./pages/CV";

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();
  const isBorder = location.pathname !== "/";

  return (
    <>
      <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 mt-5 mb-5 md:mb-0 md:mt-0">
        <HeroSection />
        <div
          className={`flex flex-col gap-8 rounded-2xl
            border transition-all duration-500 ${isBorder ? "border-(--border) w-[85vw] lg:w-[57vw] h-[60vh] lg:h-[90vh]" : "border-transparent"}`}
          style={{ viewTransitionName: "page-content" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/*" element={<Content />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
