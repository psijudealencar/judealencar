import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Services } from "./Services";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";

export function App() {
  return (
    <div
      style={{
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        height: "94.5vh",
        scrollBehavior: "smooth",
      }}
    >
      <div style={{ scrollSnapAlign: "start" }}>
        <Home />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <AboutMe />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <Services />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <FAQ />
      </div>
      <div style={{ scrollSnapAlign: "start" }}>
        <Contact />
      </div>
      <footer
        style={{
          padding: "1rem",
          fontSize: "1.4rem",
        }}
      >
        site por{" "}
        <a
          href="https://linkedin.com/in/CristianValim"
          target="_blank"
          rel="noopener noreferrer"
        >
          cris
        </a>{" "}
        e{" "}
        <a
          href="https://linkedin.com/in/laissanseverino"
          target="_blank"
          rel="noopener noreferrer"
        >
          lais
        </a>
      </footer>
    </div>
  );
}
