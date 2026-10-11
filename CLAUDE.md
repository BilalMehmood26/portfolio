# Bilal Mehmood — Portfolio Website

One-page static portfolio for Bilal Mehmood, senior Android developer (Islamabad, Pakistan).
Plain HTML + CSS + vanilla JS. No framework, no build step.

## Structure
- `index.html` — all page content and sections
- `css/styles.css` — all styles; design tokens live in `:root` at the top
- `js/main.js` — small scripts (home-screen icon pop-in)
- `img/` — photo (`bilal.webp`) and project screenshots (`serena-*.webp`)

## Page sections (in order, by id)
nav → hero (photo + floating badges) → tech stack chips → stats →
`#apps` (client app icons on a phone home screen) →
`#services` → `#projects` (UBL Digital, Serena, Salama, DuePro, TasteBud) →
`#process` → `#reviews` (client testimonials, quoted verbatim) → `#contact` → footer

## Design system
- Colors are CSS variables in a single `:root` block: a light theme in the brand
  colors of Bilal's LinkedIn cover (navy ink, electric blue, orange). The stats
  and contact sections are dark navy panels (`--band-*` tokens). No dark mode.
  Always change colors via tokens, never hard-code in components.
- Fonts (Google Fonts): Bricolage Grotesque (headings), Instrument Serif italic
  (accent words, class `.it`), Manrope (body), JetBrains Mono (labels/chips).
- Accent: electric blue/cyan (`--accent`); primary buttons use the blue
  gradient `--grad`; orange `--signal` for highlights. Rounded cards with
  1px `--line` borders.
- Responsive breakpoints: 900px (stack to one column) and 620px (phone).

## Rules
- Keep it static: no frameworks or build tools unless asked.
- Content must be truthful: don't invent clients, metrics, or testimonials.
- Images: compress to `.webp`, roughly 480px wide for screenshots.
- Test at phone width (~390px): no horizontal scroll.

## Run locally
Open with the VS Code "Live Server" extension, or run `npx serve .`

## Deploy
Static hosting (AWS Amplify drag-and-drop, Netlify Drop, S3). Upload a zip of
`index.html`, `css/`, `js/`, `img/`.
