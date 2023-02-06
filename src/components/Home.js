import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
