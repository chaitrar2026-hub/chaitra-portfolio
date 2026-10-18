import { Badge, CtaPair, Img } from "./ui";
import { stats, testimonials } from "../data/site";

const Stars = ({ r }) => <div className="rate"><span>{r}</span><span className="stars" aria-label={`${r} out of 5`}>★★★★★</span></div>;

export default function Testimonials() {
  const list = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="section">
      <div className="container t-grid">
        <div className="reveal">
          <Badge>Happy Colleagues</Badge>
          <h2 className="title">Colleagues Love me for...</h2>
          <p className="sub">Trusted with 10+ projects...</p>
          <div className="stats">{stats.map(([n, l]) => <div className="card stat" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
          <CtaPair />
        </div>
        <div className="t-list reveal" role="region" aria-label="Testimonials">
          <div className="t-track">
            {list.map((t, i) => (
              <figure className="card t-card" key={i} aria-hidden={i >= testimonials.length}>
                <figcaption><Img k={t.img} alt={`${t.name}`} className="avatar" /><div><b>{t.name}</b><small>{t.co}</small></div></figcaption>
                <Stars r={t.rate} /><blockquote>{t.text}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
