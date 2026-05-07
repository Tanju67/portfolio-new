import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Landing() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default Landing;
