import { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Services } from "./Services";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { AnimatePresence } from "framer-motion";

export function App() {
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      let svh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--svh", `${svh}px`);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<AboutMe />} />
          <Route path="/sobre-a-psicoterapia" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <footer style={{ padding: "1rem", fontSize: "1.4rem" }}>
          site por{" "}
          <Link to="https://linkedin.com/in/CristianValim" target="_blank">
            cris
          </Link>{" "}
          e <Link to="https://linkedin.com/in/laissanseverino" target="_blank">
            lais</Link>
        </footer>
      </AnimatePresence>
    )
}
