import { Badge, Btn, Icon, Img, Title } from "./ui";
import { experience, site, skills } from "../data/site";

export default function About() {
  return (
    <section id="profile" className="section about">
      <div className="container">
        <div className="head center reveal"><Badge>UI/UX Designer</Badge><Title a="Chaitra R," b="Your Designer" /><p className="sub">Brief initial presentation of myself and my previous experiences.</p></div>
        <div className="about-grid">
          <div className="card profile reveal">
            <Img k="portrait" alt="Portrait of Chaitra R" className="portrait" />
            <h3>Hello I am <span className="muted-word">Chaitra R</span></h3>
            <p className="small">UI/UX&nbsp; Designer Based in Bangalore.</p>
            <div className="social">
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon n="in" /></a>
              <a href={site.links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance"><Icon n="be" /></a>
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon n="ig" /></a>
            </div>
            <Btn href="#connect" kind="dark wide">Connect with me</Btn>
          </div>
          <div className="about-right reveal">
            <p className="lead">I'm Chaitra R, a dedicated UI/UX &amp; Product designer based in Bangalore, India. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.</p>
            <ul className="tags">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
            <div className="exp">{experience.map(([r, c, d]) => <div key={c} className="exp-row"><span>{r}</span><span>{c}</span><span>{d}</span></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
