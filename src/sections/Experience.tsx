import type { CSSProperties } from "react";
import { Reveal } from "../components/Reveal";
import { journeyLine, education, badges, links } from "../data/content";

export function Experience() {
  return (
    <section id="journey">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ "--acc": "var(--teal)" } as CSSProperties}>
            02 — Journey
          </p>
          <h2 className="section-title">Where I've been</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="journey-line">{journeyLine}</p>
          <a href={links.resume} download className="btn">
            Download resume
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="edu-line">{education}</p>
          <div className="badge-row">
            {badges.map((b) => (
              <span className="badge" key={b}>
                ★ {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
