import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HeroSection from "./components/Home/HeroSection";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";

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
      <div className="min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center gap-8 mt-5 mb-5 md:mb-0 md:mt-0">
        <HeroSection />
        <div
          className={`flex flex-col gap-8 rounded-2xl
            border transition-all duration-500 ${isBorder ? "border-(--border) w-[57vw] h-[90vh]" : "border-transparent"}`}
          style={{ viewTransitionName: "page-content" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
