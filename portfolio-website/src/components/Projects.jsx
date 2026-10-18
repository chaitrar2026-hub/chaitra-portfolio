import { Badge, Btn, contactHref, Icon, Title } from "./ui";
import { Tile } from "./Hero";
import { projects, site } from "../data/site";

export default function Projects() {
  const [a, b, c, d] = projects;
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="head split reveal">
          <div><Badge>Recent Projects</Badge>
            <h2 className="title">Recent <span className="muted-word">Designs</span> <a className="round-arrow sm" href={site.links.behanceProjects} target="_blank" rel="noopener noreferrer" aria-label="All projects on Behance"><Icon n="arrow" size={16} /></a></h2>
            <p className="sub">Showcase of some of my recent sleek websites</p></div>
          <div className="cta-row"><Btn href={site.links.behanceProjects} external>See All Projects</Btn><Btn href={contactHref()} kind="light">Contact Now</Btn></div>
        </div>
        <div className="bento">
          <div className="col"><div className="reveal"><Tile p={a} className="t-a" /></div><div className="reveal"><Tile p={c} className="t-c" /></div></div>
          <div className="col"><div className="reveal"><Tile p={b} className="t-b" /></div><div className="reveal"><Tile p={d} className="t-d" /></div></div>
        </div>
      </div>
    </section>
  );
}
