import { Badge, Btn, contactHref, Icon, Img, Title } from "./ui";
import { expertise, tagsA, tagsB } from "../data/site";

const Row = ({ items, rev }) => (
  <div className="marquee" aria-hidden="true"><div className={`marquee-track ${rev ? "rev" : ""}`}>
    {[...items, ...items, ...items, ...items].map((t, i) => <span className="pill" key={i}><Icon n="box" size={16} />{t}</span>)}
  </div></div>
);
const Ex = ({ e }) => (
  <article className="card ex reveal"><h3><Icon n="box" size={20} />{e.t}</h3><p>{e.d}</p>{e.img && <Img k={e.img} alt={`${e.t} preview`} className="ex-img" />}</article>
);

export default function Expertise() {
  const [w, wf, p, f] = expertise;
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="head split reveal"><div><Badge>Thinking design</Badge><Title a="My" b="Expertise" /><p className="sub">Explore a suite of design solutions to elevate your brand.</p></div><Btn href={contactHref()} kind="light">Contact Now</Btn></div>
        <div className="ex-grid"><div className="col"><Ex e={w} /><Ex e={p} /></div><div className="col"><Ex e={wf} /><Ex e={f} /></div></div>
      </div>
      <div className="marquees reveal"><Row items={tagsA} /><Row items={tagsB} rev /></div>
    </section>
  );
}
