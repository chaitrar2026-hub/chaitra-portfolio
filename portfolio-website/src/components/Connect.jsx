import { Badge, Btn, Icon, Img, Title } from "./ui";
import { site } from "../data/site";

export default function Connect() {
  return (
    <section id="connect" className="section">
      <div className="container connect card reveal">
        <div>
          <Badge>Let's Connect</Badge><Title a="Let's Grow" b="Together" />
          <div className="rows"><div><h3>Product Design</h3><p>Showcasing sleek, high-performance designs tailored for impact</p></div><div><h3>Web &amp; Application</h3><p>Building visually stunning, user-focused websites that elevate brands.</p></div></div>
          <div className="cta-row">
            <Btn href={site.links.behanceProjects} external>See All Projects</Btn>
            <a className="icon-btn" href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon n="in" /></a>
            <a className="icon-btn" href={site.links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance"><Icon n="be" /></a>
            <a className="icon-btn" href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon n="ig" /></a>
          </div>
        </div>
        <Img k="banner" alt="Mobile app designs by Chaitra R" className="connect-img" />
      </div>
    </section>
  );
}
