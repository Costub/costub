import type { CSSProperties } from "react";
import { Reveal } from "../components/Reveal";
import { PixelSprite } from "../components/PixelSprite";
import { projects } from "../data/content";

export function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">01 — Projects</p>
          <h2 className="section-title">Things I've built recently for fun</h2>
        </Reveal>
        <div className="project-list">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article
                className="project-card"
                style={{ "--acc": p.accent } as CSSProperties}
              >
                <div className="project-side">
                  <span className="project-num">{p.num}</span>
                  <PixelSprite
                    name={p.sprite}
                    size={56}
                    className="project-sprite"
                  />
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p className="project-oneliner">{p.oneliner}</p>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
