import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PixelSprite } from "../components/PixelSprite";
import { links } from "../data/content";

const NAME = ["Kaustubh", "Mhaisekar"];

export function Hero() {
  const reduce = useReducedMotion();
  let letterIndex = 0;

  return (
    <section className="hero" id="top">
      {/* idle sprites drifting in the negative space */}
      <div className="hero-sprites">
        <span style={{ top: "18%", right: "12%" }}>
          <PixelSprite name="vinyl" size={44} className="sprite-spin" />
        </span>
        <span style={{ bottom: "24%", right: "22%" }}>
          <PixelSprite name="gamepad" size={38} className="sprite-float" />
        </span>
        <span style={{ top: "38%", right: "34%" }}>
          <PixelSprite
            name="bolt"
            size={22}
            className="sprite-float"
            style={{ animationDelay: "-2.2s" }}
          />
        </span>
      </div>

      <div className="wrap">
        <motion.p
          className="hero-eyebrow"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          HELLO WORLD — I'M
        </motion.p>

        <h1 aria-label="Kaustubh Mhaisekar">
          {NAME.map((word, w) => (
            <Fragment key={word}>
              {w > 0 ? " " : null}
              <span className="word" aria-hidden="true">
              {[...word].map((ch) => {
                const i = letterIndex++;
                return (
                  <motion.span
                    key={i}
                    className="letter"
                    initial={reduce ? false : { opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.035,
                      ease: [0.21, 0.65, 0.36, 1],
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
              {w === NAME.length - 1 ? (
                /* the basketball lands as the full stop */
                <motion.span
                  className="hero-ball"
                  initial={reduce ? false : { opacity: 0, y: -160 }}
                  animate={{
                    opacity: 1,
                    y: reduce ? 0 : [-160, 0, -74, 0, -32, 0, -12, 0],
                  }}
                  transition={{
                    delay: 0.15 + (NAME.join("").length + 2) * 0.035,
                    duration: 1.5,
                    times: [0, 0.28, 0.46, 0.62, 0.74, 0.84, 0.93, 1],
                    ease: "easeOut",
                  }}
                >
                  <PixelSprite name="basketball" size={30} title="pixel basketball" />
                </motion.span>
              ) : null}
              </span>
            </Fragment>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
        >
          <p className="hero-tagline">
            {["AI engineer", "Agents", "Beats", "Sneakers", "Hoops"].map(
              (word) => (
                <span key={word} className="tagline-word">
                  {word}
                  <em>.</em>{" "}
                </span>
              )
            )}
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              See my work ↓
            </a>
            <a href={links.resume} download className="btn">
              Download resume
            </a>
          </div>
          <div className="hero-social">
            <a href={links.github} target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
