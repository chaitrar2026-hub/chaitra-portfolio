# Chaitra R — Portfolio (React + Vite)

A recreation of the Framer portfolio (chaitraportfolio.framer.website) as a static React + Vite site. No backend, no environment variables.

```
index.html            SEO / social meta, font link
vercel.json           Vercel config (build: vite, output: dist)
scripts/fetch-assets.mjs   downloads all remote images into public/assets/images
public/               favicon + (after fetch-assets) assets/images/*
src/
  data/site.js        <- ALL content, links, project URLs, images, FAQ
  components/         Nav, Hero, About, Process, Expertise, Projects, WhyMe, Testimonials, Faq, Connect, Footer, ui
  hooks/useReveal.js  scroll-reveal
  styles/global.css   design tokens (CSS variables) + all styles + breakpoints (1199 / 809)
```

## Run locally
```bash
npm install
npm run fetch-assets   # optional but recommended: saves images locally (needs internet)
npm run dev            # http://localhost:5173
npm run build          # outputs dist/
```

## Deploy to Vercel
1. Push this folder to a GitHub repo (`node_modules` and `dist` are git-ignored).
2. vercel.com → **Add New → Project** → import the repo. Framework is detected as **Vite** (also set in `vercel.json`). Click **Deploy**.
3. **Custom domain:** Project → Settings → Domains → add `chaitrar.in` (and `www.chaitrar.in`). At your registrar add the DNS records Vercel displays (usually `A  @  76.76.21.21` and `CNAME  www  cname.vercel-dns.com`; use Vercel's exact values). HTTPS is automatic.

## Things to review
- **Images:** until you run `npm run fetch-assets`, images load from their original hosts (framerusercontent.com and Behance). After running it, commit `public/assets/images/`. Behance covers are the 404px versions; replace files in `public/assets/images/` with higher-resolution exports if you want sharper tiles (keep the same file names).
- **Project links:** SME Junction, Interiorwalaa, SME Pulse and Purrfectly Pawsome (the four tiles shown on the Framer site) link to their individual Behance pages. Tiffin Deal and Kenshi Labs are in `moreProjects` in `site.js` (not displayed, as in the original).
- **FAQ:** only the first answer was visible on the live site. The other five answers are neutral placeholders (`orig: false` in `site.js`); paste your original wording there.
- **Not reproduced exactly:** the dark textured hero background photo and the "CR" monogram (a text approximation). Add your logo as an SVG/PNG and swap the `Logo` component in `src/components/ui.jsx`.
- **Contact:** the original has no email. Optionally set `contactEmail` in `site.js` so "Contact Now" opens an email; otherwise it scrolls to the contact section.
- The Framer badge was removed and the footer now says "Built with React & Vite".
