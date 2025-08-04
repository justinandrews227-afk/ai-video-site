# AI Video Studio — Static Next.js Starter

A fast, visual-first site for AI video studios. Static pages, YouTube embeds, Tailwind styling, and Vercel-ready.

## Tech
- Next.js (App Router)
- Tailwind CSS
- Static content (no CMS)
- YouTube embeds (click-to-play modal)
- Dark theme — Electric Blue `#1A6DFF`, Deep Black `#0A0A0A`

## Getting started
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Customize
- Edit site title/description: `app/layout.tsx`
- Home hero video: `components/Hero.tsx` (replace `src` and `poster`)
- Projects: `data/projects.ts` (add your YouTube IDs; thumbs auto via i.ytimg.com)
- Colors: `tailwind.config.ts` (electric/night) and `app/globals.css`
- Logo: `public/logo.svg` (Electric Blue fill)

## Deploy to Vercel
```bash
npm run build
# then push to GitHub and import the repo into Vercel, or run vercel CLI
```

## Accessibility & Performance
- Videos are muted, autoplay, and `playsInline` for mobile.
- Thumbnails are optimized via Next/Image.
- Modal is keyboard accessible (focus via button; ESC to close can be added if desired).
