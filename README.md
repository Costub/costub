# costub.dev — portfolio

Personal portfolio for Kaustubh Mhaisekar. Dark, clean, typography-led, with hand-drawn pixel sprites as accents ("clean studio, pixel soul").

## Stack

Vite · React · TypeScript · Framer Motion · Fontsource (Space Grotesk / Inter / Silkscreen)

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build → dist/
npm run preview  # serve the production build
```

## Editing content

All copy, links, projects, experience and interests live in one file:
[`src/data/content.ts`](src/data/content.ts)

**Placeholders to fill in:**
- `links.linkedin` — verify the URL is your actual LinkedIn handle
- Instagram (music/DJ) and video-edits links are intentionally absent for now —
  add them to `links` and wire them into the Beats tile / socials when ready

The resume served by the site is `public/resume.pdf` — replace that file to update it.

Pixel icons are authored as character grids in
[`src/components/PixelSprite.tsx`](src/components/PixelSprite.tsx) — edit the
rows/colors or add new sprites there.

## Deploy

Ready for Vercel: `vercel` from this folder (or import the repo in the Vercel
dashboard). Any static host works — deploy the `dist/` folder after `npm run build`.
