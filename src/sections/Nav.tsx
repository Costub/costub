import { motion, useScroll, useSpring } from "framer-motion";
import { links } from "../data/content";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot" />
          Costub
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#beyond">Beyond</a>
          <a href="#contact">Contact</a>
          <a href={links.resume} download className="btn btn-small">
            Resume
          </a>
        </nav>
      </div>
      <motion.div className="scroll-progress" style={{ scaleX }} />
    </header>
  );
}
