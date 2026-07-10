import type { CSSProperties } from "react";
import { Reveal } from "../components/Reveal";
import { PixelSprite } from "../components/PixelSprite";
import { interests } from "../data/content";

export function Beyond() {
  return (
    <section id="beyond">
      <div className="wrap">
        <Reveal>
          <p
            className="eyebrow"
            style={{ "--acc": "var(--purple)" } as CSSProperties}
          >
            03 — Beyond the code
          </p>
          <h2 className="section-title">Off the clock</h2>
        </Reveal>
        <div className="beyond-grid">
          {interests.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div
                className="tile"
                style={{ "--acc": it.accent } as CSSProperties}
              >
                <PixelSprite name={it.sprite} size={44} className="tile-sprite" />
                <h3>{it.title}</h3>
                <p>{it.line}</p>
                {it.href ? (
                  <a
                    className="tile-link"
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {it.linkLabel} ↗
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
