# Bella Vista C-103 — For Sale Landing Page

**Live URL:** https://c103.vivabellavista.com  
**Parent Domain:** vivabellavista.com  
**Status:** Production-ready · EN/ES bilingual · Formspree form (requires endpoint setup — see below)

---

## Project Overview

Single-page real estate listing for **Bella Vista Unit C-103**, Condominio Bella Vista I, Real del Mar, Rosarito, Baja California. Fully static HTML/CSS/JS — deployable to Cloudflare Pages, GitHub Pages, or any static host.

**Price:** $385,000 USD · Seller direct financing · 50% down · 3–7 year terms

---

## Completed Features

- ✅ Hero slideshow (6 images, auto-advance, dot navigation)
- ✅ Stats bar (beds, baths, m², EV, price)
- ✅ Property overview with specs, checklist, CTAs
- ✅ Scrolling photo strip (infinite loop)
- ✅ Smart Home section (EV charger, battery backup, smart lighting cards)
- ✅ Amenities grid (6 cards + full included-items list)
- ✅ Community section (9 amenity cards — pool w/ photo, elevator w/ photo, gym, kids play, pet-friendly, 24/7 security, golf, shops, safest area in Baja)
- ✅ Rentals section — STR/LTR tab switcher (Short-Term: $250/night, $1,500/wk, $3,800/mo · Long-Term: $2,200–$2,000/mo)
- ✅ Vibe banner with parallax quote
- ✅ Pricing section (cash + seller financing options, 5-step deal flow)
- ✅ Interactive financing calculator (price, down %, term, rate sliders)
- ✅ Photo gallery with 6 filter categories + lightbox (39 images total)
- ✅ Location section with Why Real del Mar grid + flags
- ✅ Contact / Offer form (Formspree — see setup below)
- ✅ Deal Snapshot sidebar + WhatsApp / Telegram / Instagram direct links
- ✅ EN / ES bilingual toggle (instant, no reload, localStorage persistence)
- ✅ Fully responsive (1240px → 768px → 480px breakpoints)
- ✅ Scroll-reveal animations
- ✅ Open Graph + Twitter Card meta tags
- ✅ Canonical URL: https://c103.vivabellavista.com/

---

## File Structure

```
index.html              ← main page (all sections)
css/
  style.css             ← full stylesheet v4.0
js/
  main.js               ← slideshow, gallery, calculator, form, scroll-reveal
  i18n.js               ← EN/ES dictionary + translation engine
images/
  bv_bar_night.jpg
  bv_terrace1.jpg
  bv_terrace2.jpg
  bv_terrace3.jpg
  bv_terrace_night.jpg
  bv_hottub1.jpg
  bv_hottub2.jpg
  bv_living2.jpg
  bv_living4.jpg
  bv_living_wide.jpg
  bv_living_to_terrace.jpg
  bv_sofa_closeup.jpg
  bv_dining.jpg
  bv_indoor_outdoor.jpg
  bv_master_bedroom.jpg
  bv_master_bed3.jpg
  bv_bedroom2.jpg
  bv_bedroom3.jpg
  bv_bathroom1.jpg
  bv_bathroom2.jpg
  bv_closet.jpg
  bv_kitchen1.jpg
  bv_kitchen2.jpg
  bv_kitchen3.jpg
  bv_espresso.jpg
  bv_laundry.jpg
  bv_ocean_view.jpg
  bv_sunset.jpg
  bv_exterior1.jpg
  bv_exterior2.jpg
  bv_exterior3.jpg
  bv_night_exterior.jpg
  bv_grounds_jeep.jpg
  bv_grounds_kids.jpg
  bv_grounds_playground.jpg
  bv_sunset2.jpg
  bv_crescent_moon.jpg
  bv_dawn_horizon.jpg
  bv_pool.jpg              ← NEW: community swimming pool
  bv_aerial_ocean.jpg      ← NEW: aerial oceanfront complex view
  bv_elevator.jpg          ← NEW: building elevator/lobby
  bv_hallway.jpg           ← NEW: common area hallway
  bv_entrance_sign.jpg
README.md
```

---

## ⚠️ One-Time Setup: Formspree Contact Form

The contact form posts to Formspree (free tier = 50 submissions/month, paid = unlimited).

### Steps
1. Go to **formspree.io** → sign up free
2. Click **New Form** → name it "Bella Vista C-103 Inquiries"
3. Copy your form ID (looks like `xyzabcde`)
4. Open `js/main.js` → find line:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
5. Replace `YOUR_FORM_ID` with your actual ID
6. Save → commit → push → Cloudflare auto-deploys

You'll receive every inquiry directly to your email. Formspree dashboard shows all submissions.

---

## Deployment: GitHub + Cloudflare Pages

### Push to GitHub
```bash
git init
git add .
git commit -m "Bella Vista C-103 — production build"
git remote add origin https://github.com/YOUR_USERNAME/bella-vista-c103.git
git branch -M main
git push -u origin main
```

### Deploy on Cloudflare Pages
1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Select `bella-vista-c103` repo
3. Build command: *(leave blank)*
4. Build output directory: `/`
5. Deploy → live at `bella-vista-c103.pages.dev`

### Connect c103.vivabellavista.com
1. Add `vivabellavista.com` to Cloudflare (or transfer DNS there)
2. In Cloudflare Pages → your project → Custom Domains → Add `c103.vivabellavista.com`
3. Cloudflare auto-creates the CNAME + SSL — done in ~2 min

### Update Cycle
```
Edit files → git commit → git push → Cloudflare deploys in ~30 sec
```

---

## EN/ES Bilingual System

- **Toggle button:** top-right of nav, pill-shaped, `EN / ES`
- **Engine:** `js/i18n.js` — reads `data-i18n` attributes, swaps innerHTML/textContent/placeholder
- **Dictionary:** ~100 keys covering every section
- **Persistence:** `localStorage` key `bv_lang` — survives page refresh
- **Coverage:** announcement bar, nav, hero, stats, property, smart home, amenities, vibe, pricing, calculator, gallery filters, location, contact form (labels + placeholders + select options), footer

---

## Contact / Seller Info

| Channel | Detail |
|---|---|
| WhatsApp | +52 663 167 4617 → wa.me/526631674617 |
| Telegram | @jumarenga |
| Instagram | @thesolarplug |

---

## Recommended Next Steps

- [ ] Set up Formspree endpoint (replace `YOUR_FORM_ID` in `js/main.js`)
- [ ] Add `vivabellavista.com` to Cloudflare DNS
- [ ] Create subdomain `c103.vivabellavista.com` pointing to Cloudflare Pages
- [ ] Add a `favicon.ico` (use a BV or house icon)
- [ ] Add Google Analytics or Cloudflare Web Analytics (free) for traffic tracking
- [ ] Consider adding a `sitemap.xml` and `robots.txt` for SEO
- [ ] Future: `c104.vivabellavista.com`, `c105.vivabellavista.com` for other units

---

*Last updated: April 2026 · Built for Manny Renteria / 1UP Solar · vivabellavista.com*
