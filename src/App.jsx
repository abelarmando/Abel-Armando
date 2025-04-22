import AboutMe from "./layouts/AboutMe";
import Hero from "./layouts/Hero";
import Projects from "./layouts/Projects/Projects";
import Technologies from "./layouts/Technologies";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden space-y-14">
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
