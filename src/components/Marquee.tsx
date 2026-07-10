import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { marqueeWords } from "../data/content";
import { PixelSprite } from "./PixelSprite";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** base drift in % of track width per second (negative = leftward) */
const BASE_VELOCITY = -1.5;

/**
 * Scroll-velocity-reactive ticker: drifts slowly on its own, speeds up with
 * scroll and reverses direction when you scroll back up.
 */
export function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });
  const direction = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    const moveBy =
      direction.current * BASE_VELOCITY * (delta / 1000) * (1 + Math.abs(vf));
    baseX.set(baseX.get() + moveBy);
  });

  // duplicated so the -50% wrap loops seamlessly
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee-track" style={{ x }}>
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <PixelSprite name={item.sprite} size={18} />
            {item.word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
