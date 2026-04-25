# Viva Bella Vista — Multi-Unit Landing Page Platform

**Live domain:** https://vivabellavista.com 
Parent project: Condominio Bella Vista I, Real del Mar, Rosarito, Baja California 
Built for: Manny Renteria / 1UP Solar

---

## URL Structure

Each unit gets its own path (no subdomains):

```
https://vivabellavista.com/c103/   ← Unit C-103 (live)
https://vivabellavista.com/c104/   ← Future unit
https://vivabellavista.com/a506/   ← Future unit
```

---

## Repo Structure

```
vivabellavista/
├── c103/                  ← Unit C-103 landing page
│   ├── index.html         ← Full single-page listing
│   ├── style.css          ← Stylesheet v4.0
│   ├── main.js            ← Slideshow, gallery, calculator, form
│   └── i18n.js            ← EN/ES bilingual engine
├── bv_*.jpg               ← Shared image assets (root for now)
├── _redirects             ← Cloudflare Pages routing rules
├── _headers              ← Cloudflare Pages security & cache headers
└── README.md
```

> **Adding a new unit:** Copy the `c103/` folder, rename it to the unit ID (e.g. `c104/`), update the content inside, and add two lines to `_redirects`.
>
> ---
>
> ## Unit C-103 — Bella Vista C-103 For Sale
>
> **Price:** $385,000 USD · Seller direct financing · 50% down · 3–7 year terms
> Status: Production-ready · EN/ES bilingual · Formspree contact form
>
> ### Completed Features
> - ✅ Hero slideshow (6 images, auto-advance, dot navigation)
> - - ✅ Stats bar (beds, baths, m², EV, price)
>   - - ✅ Property overview with specs, checklist, CTAs
>     - - ✅ Scrolling photo strip (infinite loop)
>       - - ✅ Smart Home section (EV charger, battery backup, smart lighting cards)
>         - - ✅ Amenities grid (6 cards + full included-items list)
>           - - ✅ Community section (9 amenity cards)
>             - - ✅ Rentals section — STR/LTR tab switcher
>               - - ✅ Vibe banner with parallax quote
>                 - - ✅ Pricing section (cash + seller financing options, 5-step deal flow)
>                   - - ✅ Interactive financing calculator
>                     - - ✅ Photo gallery with 6 filter categories + lightbox (39+ images)
>                       - - ✅ Location section with Why Real del Mar grid + flags
>                         - - ✅ Contact / Offer form (Formspree)
>                           - - ✅ EN / ES bilingual toggle (localStorage persistence)
>                             - - ✅ Fully responsive (1240px → 768px → 480px)
>                               - - ✅ Scroll-reveal animations
>                                 - - ✅ Open Graph + Twitter Card meta tags
>                                  
>                                   - ---
>
> ## ⚠️ One-Time Setup: Formspree Contact Form
>
> 1. Go to [formspree.io](https://formspree.io) → sign up free
> 2. 2. Click **New Form** → name it "Bella Vista C-103 Inquiries"
>    3. 3. Copy your form ID (e.g. `xyzabcde`)
>       4. 4. Open `c103/main.js` → find: `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';`
>          5. 5. Replace `YOUR_FORM_ID` with your actual ID
>             6. 6. Save → commit → push → Cloudflare auto-deploys
>               
>                7. ---
>               
>                8. ## Deployment: GitHub + Cloudflare Pages
>               
>                9. 1. Push to GitHub (already done)
> 2. In Cloudflare Pages → connect this repo
> 3. 3. Build command: *(leave blank)*
>    4. 4. Build output directory: `/`
>       5. 5. Custom domain: `vivabellavista.com`
>          6. 6. Each unit is served at `vivabellavista.com/{unit-id}/`
>            
>             7. ---
>            
>             8. ## Contact / Seller Info
>            
>             9. | Channel | Detail |
> |---------|--------|
> | WhatsApp | +52 663 167 4617 |
> | Telegram | @jumarenga |
> | Instagram | @thesolarplug |
>
> ---
>
> *Last updated: April 2026 · Built for Manny Renteria / 1UP Solar*
