import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Beyond } from "./sections/Beyond";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Beyond />
        <Footer />
      </main>
    </>
  );
}
