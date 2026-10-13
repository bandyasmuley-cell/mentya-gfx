# 🎬 MENTYA CINEMATICS (@mentya.gfx_) - Website & Portfolio

A cinematic, high-octane video production portfolio website built specifically for **@mentya.gfx_**, focusing on **Car Delivery Shoots, Wedding Films, Birthday Celebrations, and 4K FPV Drone Cinematography**.

---

## 🌟 What This Website Showcases

> **"A shoot means creating an adrenaline-pumping or emotionally gripping video film about your milestone event."**

### 1. 🏎️ Car Delivery Shoots (Automotive Cinema)
- **Showroom Veil Drops & Key Handover:** Dramatic slow-motion reveals, champagne cork pops, and family celebrations.
- **Rolling Shots & Night Cruising:** Low-angle 120 FPS rollers during golden hour and street-lit night drives.
- **True Engine Sound Sync:** Exhaust roar, tire grip, and bass drop synchronization with trending audio beats.
- **Popular with:** Toyota Fortuner / Legender, Mahindra Thar 4x4, BMW M-Sport, Mercedes-Benz, Scorpio-N, Audi, Porsche.

### 2. 💍 Wedding & Pre-Wedding Films
- **Pre-Wedding Short Films:** Cinematic story-driven couple films shot in scenic locations.
- **Haldi Color Slow-Mo:** 120 FPS high-frame-rate captures of yellow flower and color explosions.
- **Sangeet Hype Reels:** High-voltage edits of dance performances and party energy.
- **48-Hour Wedding Teaser:** Delivered while guests are still talking about the wedding!

### 3. 🎂 Birthday & Milestone Party Shoots
- **Milestone Events:** 1st birthday royal fairytales, 18th, 21st, and 50th jubilee celebrations.
- **Club & Rooftop Vibes:** Red carpet entry, neon lighting capture, sparkler cake-cutting countdown.
- **Squad Edits:** Ready-to-post vertical reels for Instagram with viral music trends.

### 4. 🛸 4K Drone & FPV Aerial Cinematography
- **High-Speed Car Chases:** 90 km/h FPV drone tracking luxury cars on winding highways.
- **Massive Overhead Sweeps:** Venue bird's-eye reveals and architectural scale shots.
- **ProRes Cinema Quality:** 5.1K / 4K 60FPS stabilized aerial footage.

---

## 🚀 Key Interactive Features

1. **Interactive Shoot Cost Estimator & Quote Builder**:
   - Lets clients pick their Shoot Category, Coverage Duration (Standard, Half-Day, Full-Day), and Add-ons (FPV Drone, 24h Express Delivery, 2nd Camera, 4K RAW Drive).
   - Generates an instant quote in real time.
   - **One-Click WhatsApp Booking**: Formats the entire quotation into a pre-filled WhatsApp message directly to the creator!

2. **Before & After Color Grading Slider**:
   - Interactive split-screen slider demonstrating **Raw S-Log3 Flat Footage** vs. **Mentya Signature Hollywood Grade**.

3. **Cinematic Video Modal Player**:
   - 9 curated video cards across all 4 categories.
   - Shows technical camera telemetry (Camera rig, Frame rate, Sound design, Instagram view count).
   - Direct button to view the original reel on `@mentya.gfx_` Instagram page.

4. **Web Audio API Cinematic SFX**:
   - Subtle futuristic whoosh and click sound effects when interacting with buttons, with a mute/unmute toggle in the navbar.

5. **Direct Instagram & WhatsApp Lead Funnels**:
   - Linked directly to `@mentya.gfx_` on Instagram.
   - Floating WhatsApp button with pulsing animation.
   - Lead capture inquiry form with instant WhatsApp transfer.

---

## 💻 How to Run Locally

### Option 1: Double-Click `index.html`
Simply double-click `index.html` in your file explorer to open it in any browser (Chrome, Edge, Safari, Firefox).

### Option 2: Run with Python Local Server
Open PowerShell or Terminal in this folder and run:
```bash
python serve.py
```
This starts a local server at `http://localhost:8080` and opens your default browser automatically.

---

## ⚙️ How to Customize

- **WhatsApp Phone Number:**
  Configured to `+91 76203 92790` (`917620392790`). If you ever need to change it, update it in `app.js` and `index.html`.

- **Update Pricing / Packages:**
  In `app.js`, modify the `baseRates` and `durationMultipliers` objects to update base prices and add-on costs.

- **Add Your Own Video Links:**
  In `app.js`, update the `portfolioItems` array with your own video URLs (`.mp4`), thumbnail images, and Instagram reel links.

---

## 🌐 Free 1-Click Deployment

You can deploy this website for free in under 60 seconds using:
- **Netlify Drop**: Drag and drop the `mentya-gfx-website` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: Run `vercel` or link your GitHub repo.
- **GitHub Pages**: Push this directory to a GitHub repository and turn on GitHub Pages in repository settings.
