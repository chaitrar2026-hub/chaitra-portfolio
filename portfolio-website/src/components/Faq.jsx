import { useState } from "react";
import { Badge, CtaPair, Icon, Img, Title } from "./ui";
import { barath, faq } from "../data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container faq-grid">
        <div className="reveal">
          <Badge>FAQ Section</Badge><Title a="Questions," b="Answers" /><p className="sub">Get quick answers to your most pressing questions</p>
          <figure className="card t-card barath"><figcaption><Img k={barath.img} alt={barath.name} className="avatar" /><div><b>{barath.name}</b><small>{barath.co}</small></div></figcaption><blockquote>{barath.text}</blockquote></figure>
          <CtaPair />
        </div>
        <div className="acc reveal">
          {faq.map((f, i) => (
            <div className={`acc-item ${open === i ? "open" : ""}`} key={f.q}>
              <h3><button id={`q${i}`} aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span><span className="acc-ic"><Icon n={open === i ? "x" : "plus"} size={16} /></span></button></h3>
              <div className="acc-body" id={`a${i}`} role="region" aria-labelledby={`q${i}`}><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
