/* ===== All editable content lives here ===== */
export const site = {
  contactEmail: "", // OPTIONAL: e.g. "you@example.com". If set, "Contact Now" opens an email; otherwise it scrolls to the contact section.
  links: {
    linkedin: "https://www.linkedin.com/in/chaitra-r-57178328a",
    behance: "https://www.behance.net/chaitrar3099",
    behanceProjects: "https://www.behance.net/chaitrar3099/projects",
    instagram: "https://www.instagram.com/chaitrarajashekar14?igsh=MW5qNzMyZHkxaWUxYQ%3D%3D&utm_source=qr",
  },
};

const F = (id, q = "") => `https://framerusercontent.com/images/${id}${q}`;
const B = (p) => `https://mir-s3-cdn-cf.behance.net/projects/404/${p}`;

/* key -> { file (saved by `npm run fetch-assets` into public/assets/images), remote (used until then) } */
export const images = {
  portrait: { file: "portrait.jpg", remote: F("BV821BdHgSjwCdr8WEq1t4Iko.jpg", "?width=576&height=591") },
  rose: { file: "rose-mary.jpg", remote: F("UUL7a5Pit9MgfHnfTQ0rp3SgrI.jpg", "?width=372&height=661") },
  anil: { file: "anil.jpg", remote: F("OrHPDEQhjkOpYEw3ktDeFFzwlvo.jpg", "?width=677&height=452") },
  nitya: { file: "nitya.jpg", remote: F("feDGoNxFy7sjv3uUWIIb8F6Dxs.jpg", "?width=466&height=311") },
  amal: { file: "amal.png", remote: F("aNR7zMSjbD1LECVEiywscwyn24.png", "?width=1507&height=1730") },
  barath: { file: "barath.jpg", remote: F("j6djrXUIcwVUxZ9b7hqirOEWDU.jpg", "?width=446&height=297") },
  website: { file: "expertise-website.jpg", remote: F("ENSJj8ZT4TbTwJPFPfTfg1t5j1s.jpg", "?scale-down-to=1024") },
  figma: { file: "expertise-figma.jpg", remote: F("qmMYJzj3LjSQ4EnJpMYdPnUQA.jpg", "?width=1600") },
  banner: { file: "contact-banner.png", remote: F("xBAUPKsCMkKmMr9f7RGwFAO6qwg.png", "?scale-down-to=2048") },
  tiffin: { file: "tiffin-deal.png", remote: B("faea69255625293.Y3JvcCwxMzk3LDEwOTMsMjQsMA.png") },
  smejunction: { file: "sme-junction.png", remote: B("af9405234650997.Y3JvcCwyNDY3LDE5MzAsNzY5LDA.png") },
  smepulse: { file: "sme-pulse.png", remote: B("227ff4250948751.Y3JvcCwxNDAwLDEwOTUsMCw2MTM.png") },
  interiorwalaa: { file: "interiorwalaa.jpg", remote: B("e145c0233130483.68b02c2ad8637.jpg") },
  kenshi: { file: "kenshi-labs.png", remote: B("ff7f66253003347.Y3JvcCwxMTQ1LDg5NSwxOSww.png") },
  purrfectly: { file: "purrfectly-pawsome.png", remote: B("112635184492733.Y3JvcCwxMDIyLDgwMCwyMCww.png") },
};

/* Behance destinations. Cards on the site: first 4 in the hero/Recent Designs (same as original), rest in `moreProjects`. */
export const projects = [
  { id: "smejunction", title: "SME Junction — B2B Procurement Management Case Study", img: "smejunction", url: "https://www.behance.net/gallery/234650997/SME-Junction-B2B-Procurement-Management-Case-Study" },
  { id: "interiorwalaa", title: "Interiorwalaa Website", img: "interiorwalaa", url: "https://www.behance.net/gallery/233130483/Interiorwalaa-Website" },
  { id: "sme-pulse", title: "SME Pulse — Business News App UX Case Study", img: "smepulse", url: "https://www.behance.net/gallery/250948751/SME-Pulse-Business-News-App-UX-Case-Study" },
  { id: "purrfectly-pawsome", title: "Purrfectly Pawsome — Pet App UI/UX Case Study", img: "purrfectly", url: "https://www.behance.net/gallery/184492733/Purrfectly-Pawsome-pet-app-UIUX-case-study" },
];
export const moreProjects = [
  { id: "tiffin", title: "Tiffin Deal — Cloud Kitchen & Delivery App", img: "tiffin", url: "https://www.behance.net/gallery/255625293/Tiffin-Deal-Cloud-Kitchen-Delivery-App-Case-Study" },
  { id: "kenshi", title: "Kenshi Labs Portfolio Website", img: "kenshi", url: "https://www.behance.net/gallery/253003347/Kenshi-Labs-Portfolio-Website" },
];

export const nav = [["Services", "#services"], ["Projects", "#projects"], ["Testimonials", "#testimonials"], ["Contact", "#connect"]];
export const skills = ["Product Design", "UX Design", "UI Design", "Mobile App", "Web Design", "Figma", "Framer", "Canva"];
export const experience = [
  ["UI/UX Designer", "Kenshi Labs", "2024 - Present"],
  ["UI/UX Design Intern", "PurpleData", "2024"],
  ["UI/UX Design Intern", "Avorise Tech Solutions", "2023"],
];
export const process = [
  ["Let's Get In Touch", "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.", "touch"],
  ["Grab Your Designs", "Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals", "list"],
  ["Kickstart Designing", "I expertly transform your designs into a powerful, scalable solution, fully ready to launch", "wand"],
  ["And Hand Over", "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support", "rocket"],
];
export const expertise = [
  { t: "Website Design", d: "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand", img: "website" },
  { t: "Wireframing", d: "Blueprint of digital design, it maps out structure and functionality before the details come to life." },
  { t: "Prototyping", d: "Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience" },
  { t: "Figma Design", d: "Bringing ideas to life with interactive, user-centered Figma designs that simplify complexity and elevate user experience", img: "figma" },
];
export const tagsA = ["Posters", "Framer Migration", "Web & Mobile designing", "Wireframe"];
export const tagsB = ["Social Media", "Landing Pages", "Optimization", "Custom Design", "Userflow", "Icons"];
export const compare = [
  [["Design With Purpose", "My focus is on solving real problems for real users. I design for clarity, purpose and usability."], ["Design With No Purpose", "User experiences that lack intention, strategy or clear direction can lead to design inconsistencies which fail to solve real problems."]],
  [["Future-Ready Designs", "Crafting modern, scalable designs that grow with your business and stay ahead of trends."], ["Outdated Concepts", "Stale designs that don’t reflect current trends or your evolving brand narrative."]],
  [["Client-Centric Collaboration", "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity."], ["Detached Communication", "Lack of collaboration and poor feedback loops can result in misaligned outcomes."]],
  [["Timely Project Tracking", "Stay informed with regular progress updates and timely deliverables"], ["Unstructured & Unreliable Work", "Inconsistent timelines and last-minute changes can compromise quality"]],
];
export const stats = [["10+", "No. of Projects"], ["2+", "Yrs of Exp"], ["4.8", "Average Rating"]];
export const testimonials = [
  { name: "Rose Mary", co: "Kenshilabs", rate: "5.0", img: "rose", text: "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity." },
  { name: "Anil", co: "Kenshilabs", rate: "4.7", img: "anil", text: "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand." },
  { name: "Nitya", co: "Kenshilabs", rate: "5.0", img: "nitya", text: "Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement." },
  { name: "Amal", co: "Kenshilabs", rate: "5.0", img: "amal", text: "A game changing experience! The design process was smooth, collaborative, and resulted in a brand presence we’re proud of." },
];
export const barath = { name: "Barath", co: "Kenshilabs", img: "barath", text: "Outstanding creativity and precision! The result not only looks impressive but also boosts user engagement." };
/* orig:false = the original answer was hidden in the live page, so a neutral answer was written. Replace with your own wording. */
export const faq = [
  { q: "What services do you offer?", a: "I specialize in web design, branding, UI/UX, and Product design, creating modern, user-friendly experiences tailored to your needs.", orig: true },
  { q: "How do I start working with you?", a: "Reach out through the contact section. Share your project, goals and ideas, and we can take it from there.", orig: false },
  { q: "What design tools do you use?", a: "Figma is my main tool, along with Framer and Canva.", orig: false },
  { q: "How long does a project take?", a: "It depends on the scope and complexity of the project. Get in touch with your requirements and we can discuss a timeline.", orig: false },
  { q: "What industries do you work with?", a: "My work spans procurement, food delivery, business news, interiors, jewellery, agritech and more. See the projects above.", orig: false },
  { q: "Can you redesign my existing website?", a: "Yes. Share your current website and goals through the contact section and we can discuss how to improve it.", orig: false },
];
