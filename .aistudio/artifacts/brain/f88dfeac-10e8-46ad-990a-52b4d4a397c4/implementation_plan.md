# Rossopistacchio Az. Agrituristica — Luxury Italian Agriturismo Website

Cinematic editorial web experience for Rossopistacchio Az. Agrituristica, an authentic Italian agriturismo, countryside dining destination, and event retreat in Nettuno (Rome). Balances rustic agricultural authenticity with luxury editorial art direction, bilingual Italian-first typography, and an interactive reservation and event enquiry system.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your clarifying choices, the website will reflect the following verified configuration:

- **Confirmed Core Services**: Agriturismo dining (farm-to-table lunch & dinner, handmade pasta, seasonal ravioli), fresh agricultural estate produce, and private events & celebrations (bachelorette parties, anniversaries, family gatherings). Unverified overnight stays or fabricated hotel amenities are strictly omitted to maintain authentic trust.
- **Confirmed Language Architecture**: Italian-first (`it`) as the primary native experience, accompanied by a seamless, persistent English (`en`) language toggle across all navigation, editorial narrative, culinary showcases, reviews, and booking forms.
- **Confirmed Booking & Enquiry Experience**: An interactive editorial booking and event enquiry modal featuring real-time date/guests/experience selection, form validation, and instant one-click WhatsApp pre-filled dispatch to the official agriturismo number (`+39 393 577 7319`) alongside email enquiry generation.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Rossopistacchio as a curated Italian countryside destination where culinary craft, organic gardens, and warm hospitality converge. Visitors can explore the agriturismo philosophy, view genuine estate cuisine and seasonal ingredients, wander through the garden and setting, discover private event possibilities, view an editorial gallery with lightbox, inspect authentic Google Maps customer feedback (4.7★ rating), and effortlessly submit table or event enquiries.
- **Target Audience / Persona**: Local and Roman diners seeking authentic countryside dining, organizers planning intimate celebrations and bachelorette gatherings, and international travelers looking for an authentic Italian agriturismo experience near Rome and the Tyrrhenian coast.
- **Key Value**: Replaces generic restaurant templates with a high-fashion editorial publication aesthetic that highlights genuine farm-to-table provenance and converts interest into confirmed bookings.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Arrival & Cinematic Hero**:
   - High-impact visual entrance featuring an editorial framing of the agriturismo estate and dining table.
   - Clean top navigation strictly following the 3-zone contract: single wordmark (`Rossopistacchio`), concise single-line links (`L'Esperienza`, `Cucina`, `La Tenuta`, `Eventi`, `Galleria`, `Contatti`), language switcher (`IT / EN`), and a primary CTA (`Prenota un Tavolo` / `Book a Table`).
   - Editorial headline: *"Dove la campagna arriva a tavola"* / *"Where the countryside comes to the table"*.
   - Direct CTAs to initiate an enquiry or explore the estate narrative.

2. **The Experience (L'Esperienza)**:
   - Asymmetric split layout highlighting the agriturismo's core philosophy in Nettuno.
   - Farm-to-table journey: lovingly prepared dishes using the property's own fresh produce, handmade pasta and ravioli, and relaxed countryside cadence.

3. **Food & Culinary Story (Cucina & Sapori)**:
   - High-contrast visual showcase of seasonal specialties: handmade ravioli, garden harvest vegetables, artisanal breads, estate olive oil, and regional Lazio wines.
   - Interactive culinary preview filter: Antipasti & Terra, Primi Fatti a Mano, Dolci & Tradizione.

4. **The Setting & Gardens (La Tenuta & Il Giardino)**:
   - Atmosphere of open-air pergolas, lush foliage, intimate indoor dining with eclectic rustic decor, and sun-drenched countryside spaces.
   - Restrained parallax and soft image reveal transitions.

5. **Private Events & Gatherings (Eventi & Feste Private)**:
   - Curated event showcase for private celebrations, bachelorette parties (*addii al nubilato*), anniversaries, and long-table dinners under the stars.
   - Distinctive enquiry trigger linking directly to the specialized event flow.

6. **Editorial Gallery & Lightbox (Galleria)**:
   - Asymmetric multi-aspect ratio gallery with filtering (Tutto, Cucina, Tenuta & Giardino, Momenti & Eventi).
   - High-resolution lightbox modal with keyboard navigation (Esc, Arrow keys) and zoom framing.

7. **Verified Reputation & Trust (Recensioni & Valori)**:
   - Authentic Google Maps rating showcase: **4.7 / 5.0** rating from 117+ verified reviews.
   - Attributable customer quotes focusing on the warmth of hospitality, extraordinary handmade ravioli, unique rustic-chic ambiance, and attentive service.

8. **Location & Contact Hub (Posizione & Contatti)**:
   - Practical visiting details: `Via Val Pusteria, 7, 00048 Nettuno RM, Italia`.
   - Direct telephone link (`+39 393 577 7319`), Google Maps route opener, and contact hours.
   - Complete interactive reservation & event enquiry drawer/modal with live WhatsApp message composer.

### Visual Identity & Theme

- **Aesthetic Direction**: High-end Italian editorial hospitality—blending Tuscan/Lazio countryside warmth with contemporary art direction. Tactile, sun-drenched, rustic-luxury, anti-AI slop.
- **Color Palette & Discipline (60-30-10)**:
  - *60% Dominant Neutral Canvas*: Warm Ivory (`#F5F0E6`) and deep forest paper backgrounds.
  - *30% Structural Surfaces*: Deep Forest Green (`#263B2D`), Soft Sage (`#D9DDCB`), and Dark Espresso (`#28231F`).
  - *10% Curatorial Accents*: Earthy Terracotta (`#A64B32`) and Pistachio Green (`#A4AC76`) for buttons, active tabs, and delicate focus indicators.
- **Typography & Scale**:
  - *Display / Headings*: Cormorant Garamond / Playfair luxury serif styling with high contrast and relaxed leading.
  - *Body Prose*: Plus Jakarta Sans / DM Sans for pristine legibility and clean line rhythm.
  - *Metadata & Sub-labels*: Spaced uppercase sans-serif with zero-pill metadata discipline (`text-xs uppercase tracking-widest text-stone-500`).
- **Zero-Pill & Anti-Slop Rules**:
  - No candy badges, no floating stat pills, no fake compiler tags or status lights (`animate-pulse`).
  - Single-line button and tab controls with `whitespace-nowrap`.
  - Subtle hairline borders (`border-stone-300/60` and `border-emerald-950/20`) instead of heavy drop shadows or nested cards.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Verified Services vs Unverified Claims**:
  - *Chosen Approach*: Focus strictly on dining, agricultural produce, and private events. Avoid inventing room rates or accommodation booking widgets.
  - *Why*: Complies with user authenticity rules and protects brand reputation.
- **Decision 2: Bilingual Architecture via Lightweight React Context**:
  - *Chosen Approach*: Fully reactive Italian (`it`) and English (`en`) dictionary system with instant seamless switching without page reloads or layout shifts.
  - *Why*: Accommodates both local Roman clientele and international travelers seeking agriturismo experiences.
- **Decision 3: Dual Action Booking Form (WhatsApp + Direct Submission)**:
  - *Chosen Approach*: Form allows the user to submit an enquiry that displays immediate confirmation while offering a direct "Apri su WhatsApp" button that pre-populates date, time, party size, and notes.
  - *Why*: Italian hospitality heavily relies on direct WhatsApp communication, providing instantaneous confirmation for diners.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                   │
│            LanguageContext (IT / EN) + BookingModalContext             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐
│       Header.tsx       │  │    Main Page Flow      │  │    BookingModal.tsx    │
│ 1-Line Brand Wordmark  │  │                        │  │ - Reservation Type     │
│ Nav Links (Single-Line)│  │ • HeroSection.tsx      │  │ - Date & Time Picker   │
│ Language Toggle        │  │ • ExperienceSection.tsx│  │ - Guests Count         │
│ Primary "Prenota" CTA  │  │ • CuisineSection.tsx   │  │ - Form Validation      │
└────────────────────────┘  │ • SettingGarden.tsx    │  │ - WhatsApp Generator   │
                            │ • EventsSection.tsx    │  │ - Instant Feedback     │
                            │ • GallerySection.tsx   │  └────────────────────────┘
                            │ • ReviewsSection.tsx   │
                            │ • ContactLocation.tsx  │
                            │ • FooterSection.tsx    │
                            └────────────────────────┘
```

### Data Model & State

- **`Language`**: `'it' | 'en'` stored with persistence in `localStorage`.
- **`BookingEnquiry`**:
  ```ts
  interface BookingEnquiry {
    type: 'table' | 'event' | 'produce';
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    notes?: string;
    occasion?: string;
  }
  ```
- **`GalleryItem`**: Curated items with high-fidelity authentic visual assets, category tags, title in IT/EN, and aspect ratios.
- **`ReviewItem`**: Attributable Google review entries reflecting verified ratings, dates, and authentic customer impressions.

---

## 5. Visual Asset Plan (Batch Generation)

To deliver the cinematic editorial presence, we will generate domain-specific visual assets in a single parallel batch:
1. `hero_rossopistacchio_estate` (16:9): Cinematic view of an Italian agriturismo dining terrace with rustic pergolas, stone walls, and sunlit garden in Nettuno.
2. `cuisine_ravioli_pasta` (4:3): Close-up artisanal handmade Italian ravioli on rustic ceramic plate with fresh garden herbs and olive oil.
3. `garden_outdoor_dining` (4:3): Shaded outdoor long wooden dining table set with linen, wine glasses, and Mediterranean countryside greenery.
4. `interior_rustic_dining_room` (4:3): Characterful interior dining room with warm lighting, exposed beams, and vintage Italian agriturismo decor.
5. `events_evening_celebration` (16:9): Warm twilight garden party with fairy lights, wine glasses, and celebration atmosphere.
