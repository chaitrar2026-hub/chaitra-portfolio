import { useState } from "react";
import { images, site } from "../data/site";

export function Img({ k, alt = "", className = "", ...rest }) {
  const i = images[k];
  const [src, setSrc] = useState(`/assets/images/${i.file}`);
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async"
    onError={() => src !== i.remote && setSrc(i.remote)} {...rest} />;
}

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
export const Icon = ({ n, size = 18 }) => {
  const d = {
    arrow: <path d="M7 17 17 7M8 7h9v9" />,
    check: <path d="m5 12 4.5 4.5L19 7" />,
    x: <path d="M6 6l12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    down: <path d="m6 9 6 6 6-6" />,
    in: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.4 1-2 2-2s2 .8 2 2v3" /></>,
    be: <><rect x="3.5" y="4.5" width="17" height="15" rx="3" /><path d="M7 9h3a1.5 1.5 0 0 1 0 3H7zm0 3h3.4a1.6 1.6 0 0 1 0 3.2H7zM14 9.5h4M14 13.5h4a2 2 0 0 0-4 0z" /></>,
    ig: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /><path d="M16.8 7.2v.01" /></>,
    touch: <path d="M5 4l5 14 2.2-5.8L18 10zM13 14l5 5" />,
    list: <path d="M4 7l1.5 1.5L8 6M4 15l1.5 1.5L8 14M11 7h9M11 15h9" />,
    wand: <path d="M4 20 15 9M14 4v3M12.5 5.5h3M19 10v3M17.5 11.5h3M8 4v2M7 5h2" />,
    rocket: <path d="M5 19c0-3 1-4 3-4M9 15c-1-3 1-8 7-10 2-.6 3-.6 3-.6s0 1-.6 3c-2 6-7 8-10 7zM14.5 9.5v.01M7 17l-2 2M9 20l-1.5-1.5" />,
    box: <><rect x="4" y="5" width="16" height="14" rx="3" /><path d="M4 10h16" /></>,
    send: <path d="M3 11 21 3l-6 18-3-7z" />,
  }[n];
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...P}>{d}</svg>;
};

export const Badge = ({ children }) => <span className="badge"><i className="dot" />{children}</span>;
export const Title = ({ a, b }) => <h2 className="title">{a} <span className="muted-word">{b}</span></h2>;

export function contactHref() { return site.contactEmail ? `mailto:${site.contactEmail}` : "#connect"; }

export function Btn({ href, kind = "dark", children, external, ...p }) {
  return <a className={`btn ${kind}`} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...p}><span>{children}</span></a>;
}
export function CtaPair() {
  return (
    <div className="cta-row">
      <Btn href={site.links.behanceProjects} external>See All Projects</Btn>
      <Btn href={contactHref()} kind="light">Contact Now</Btn>
    </div>
  );
}
export const Logo = ({ className = "" }) => <span className={`logo ${className}`} aria-label="CR">CR</span>;
