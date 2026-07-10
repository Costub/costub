import { Reveal } from "../components/Reveal";
import { PixelSprite } from "../components/PixelSprite";
import { links } from "../data/content";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">04 — Contact</p>
          <p className="footer-sub">To get in touch with me —</p>
          <div className="footer-cta">
            <a href={`mailto:${links.email}`} className="btn btn-primary">
              {links.email}
            </a>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href={links.github} target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
          </div>
          <p className="footer-note">
            © KAUSTUBH MHAISEKAR — CODE, COFFEE &amp; CROSSOVERS
            <PixelSprite name="basketball" size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
}
