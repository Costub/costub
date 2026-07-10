import { marqueeWords } from "../data/content";
import { PixelSprite } from "./PixelSprite";

/** Slow-scrolling strip of interests with pixel icons. */
export function Marquee() {
  // duplicated so the -50% translate loops seamlessly
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <PixelSprite name={item.sprite} size={18} />
            {item.word}
          </span>
        ))}
      </div>
    </div>
  );
}
