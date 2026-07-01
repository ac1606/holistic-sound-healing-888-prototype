# Holistic Sound Healing 888 — Design System

## Company context
**Holistic Sound Healing 888 (HSH 888)** is the practice of **Helen Chan**, a Music Teacher & Sound Healer. She offers sound healing, music education (piano and singing), mindfulness, and emotional-regulation support for both adults and children. Contact: +1 (416) 688-8168, hshealing888@gmail.com, @holisticsoundhealing888.

This is currently a solo-practitioner brand (not a large company) building its first real website. Source materials:
- `uploads/HSH 888 new website ideas.docx` — Helen's own notes/brief on what the new website should contain
- `uploads/HSH.jpg` — early banner reference (not the logo itself)
- `uploads/1.jpg` — business card back (Helen's photo + contact info, navy background)
- `uploads/2.jpg` — business card front (logo + service list, cream sheet-music background)
- `uploads/HSH888-LOGOS/` — official logo package: transparent PNG, JPG, PNG, SVG/PDF vector, plus the real brand font files (`Courgette.ttf`, `Kaushan Script.ttf`)

No codebase or Figma file was provided — this design system was built directly from the logo, business card, and Helen's content brief.

## What the website brief asks for (from Helen's notes)
- An "All About Me" section: her path to self-healing, work with children, how long she's done sound healing — ideally a video of herself
- Explain **what sound healing is** and its benefits
- **Services**: self-love/inner work, working with children's wellbeing, music lessons (piano & singing) — bundles & discounts shown as savings, no prices revealed upfront
- Photos: her playing piano, meditating, working with children
- **Testimonials** — written and video
- **Book a Consultation** call-to-action
- A "why I do this" / mission section
- **Contact** section
- Group vs. individual session info
- An email-capture freebie (a 7-day guidance mini-course, one paragraph/day, "colourful images + photo of me", automated email)
- Optional blog ("messages from the Source", third-eye imagery, weekly) + monthly newsletter
- Google reviews + SEO keyword tagging
- Helen's own design instinct: **"more images and videos, less words — people don't read much anymore."**

## Index — what's in this folder
- `styles.css` — root stylesheet; imports every token file below
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `assets/` — logo and business card photography
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/` — Button, Badge, Card, Tag, Input, Avatar
- `ui_kits/website/` — homepage recreation for the HSH 888 site
- `SKILL.md` — portable skill file for Claude Code / other agents

## Content Fundamentals (voice & tone)
- **Warm, first-person, intimate** — Helen talks about herself directly ("I", "my path") and addresses the visitor as "you". This is a personal healing practice, not a corporate brand — copy should read like Helen speaking one-on-one.
- **Spiritual but grounded** — references to "the Source," third-eye, energy, and transformation sit alongside concrete, practical language about music lessons and consultations. Balance mystical vocabulary with plain, reassuring explanations (e.g. always pair "sound healing" with a one-line explanation of what it actually is/does).
- **Gentle invitation, not hard sell** — "Book a Consultation," "Scan this QR code for more info," never aggressive urgency or scarcity copy. Pricing is intentionally withheld until a real plan is shown ("do not reveal price yet — show savings, not numbers").
- **Short over long** — Helen's own instruction: *"More images and videos and less words. People don't read much anymore."* Favor short paragraphs, single sentences, bullet fragments ("Holistic Learning", "Mindfulness", "Parent Support") over dense paragraphs.
- **Title Case for service/program names** ("Holistic Learning", "Music & Emotional Regulation", "Parent Support"), sentence case for body copy.
- **No emoji** in any source material — tone is calm and elegant, not playful/casual.
- Sign-offs are plain and human: a phone number, an email, an Instagram handle — no corporate boilerplate.

## Visual Foundations
- **Colors**: The logo is the anchor — a warm **gold→orange** gradient (heart) crossed with a **teal→sky-blue** gradient (infinity loop), both meeting at a deep **navy** ground. A soft **periwinkle-to-navy** gradient appears as a poster background. The business card front uses a **cream** background with a faint hand-drawn sheet-music pattern; the back uses solid **navy**. Together this gives three "modes": warm gradient (energy/heart), cool gradient (sound/flow), and navy/cream (grounded, professional).
- **Type**: Three voices, mirroring the source material — a flowing **script** for the brand wordmark/hero headline (logo uses a casual brush script), an elegant **serif** for names/section headings (the business card sets "Helen Chan" in a classic serif), and a soft **rounded sans** for body copy and contact details (business card sets phone/email in a clean geometric sans). No font files were supplied — see "Font substitution" below.
- **Backgrounds**: Full-bleed gradients (periwinkle→navy) for hero/poster moments; a subtle tone-on-tone **sheet-music line illustration** (staff lines + notes) is the brand's signature background texture, used watermark-style at low opacity — never busy or competing with text. No photographic full-bleed backgrounds beyond Helen's own portrait.
- **Imagery**: Warm, natural, candid — a real photo of Helen (glasses, warm smile) softly cropped into a circle/rounded shape, not a hard rectangle. Expect future imagery (piano playing, meditating, working with children) to follow the same warm, soft-edged treatment.
- **Animation**: No motion exists in source material yet. Recommend restrained, slow fades/cross-fades only (400–600ms ease-out) — never bouncy or playful, in keeping with the calm spiritual tone.
- **Hover/press states**: Not yet established by source; system convention going forward — hover = gradient lightens ~8% or gains a soft glow shadow; press = scale 0.98, no color jump (keep it gentle).
- **Borders & shadows**: No hard borders in source material. Cards should use soft diffused shadows (`--shadow-card`) rather than outlines, with generous corner radius. Photo containers use the heart/circle-soft language seen on the business card (large asymmetric rounded crop), not square corners.
- **Corner radii**: Generous and soft — `--radius-md` (14px) for cards/buttons, `--radius-lg` (24px) or full circles for photo containers, `--radius-pill` for tags/badges.
- **Transparency/blur**: The QR code frame and music-note watermark both rely on low-opacity layering rather than blur — prefer opacity over backdrop-blur for this brand.
- **Cards**: white or cream surface, soft shadow, no visible border, generous internal padding (24–32px), rounded corners.
- **Layout rhythm**: generous whitespace, large imagery, short text blocks — never dense paragraphs of copy (per Helen's own direction).

### Brand fonts — now confirmed
The real accent font was supplied directly: **Courgette** — shipped as a `.ttf` file in `assets/fonts/` and declared in `tokens/fonts.css`. It's used as both the hero script and accent voice for now. The hero/logo script, heading serif, and body sans are still not separately confirmed — using closest Google Fonts matches:
- Heading/serif → **Cormorant Garamond**
- Body/sans → **Quicksand**

**Please confirm or send original files if Helen has specific ones in mind** — we will swap these in directly.

## Iconography
No icon system, icon font, or SVG icon set exists in the source material. The only graphic marks present are the **HSH 888 logo** (heart + treble clef + infinity loop) and a **music-note/staff illustration pattern** used as a background texture (visible in `assets/business-card-front.jpg` and `assets/business-card-back.jpg`). No emoji or unicode-glyph icons appear anywhere in source material — avoid introducing them.

**Recommendation**: if functional UI icons are needed (e.g. for a future booking flow), use a neutral line-icon set such as **Lucide** (CDN) at a light stroke weight — closest match to the soft, uncluttered brand feel — until Helen supplies/approves an icon direction.

## Components (`components/core/`)
Button, Badge, Tag, Card, Input, Avatar — a small foundational set for a single-practitioner site (booking CTAs, service tags, testimonial cards, contact form, profile photo).

## UI Kits
- `ui_kits/website/` — homepage recreation per Helen's brief: hero, about/mission, what-is-sound-healing, services (no prices), testimonials, freebie email-capture, booking CTA, contact footer.
