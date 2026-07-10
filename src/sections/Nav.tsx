import { links } from "../data/content";

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot" />
          KM
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
    </header>
  );
}
