import Navbar from "@components/Navbar";

import Hero from "@sections/Hero";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";
import Experience from "@sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
