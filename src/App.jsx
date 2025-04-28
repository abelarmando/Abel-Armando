import Notif from "./components/Notif";
import AboutMe from "./layouts/AboutMe";
import Contact from "./layouts/Contact";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar/Navbar";
import Projects from "./layouts/Projects/Projects";
import Technologies from "./layouts/Technologies";
import { Flex, Spin } from "antd";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden space-y-14">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
