# Jai Prakash — Portfolio (Next.js)

A modern personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS — featuring animated hero, dark mode, skills radar chart, projects, experience, achievements, and contact with resume download.

## Tech stack

- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS v4
- Radix UI primitives + shadcn-style components
- Lucide icons
- Framer Motion (animations)
- Chart.js + react-chartjs-2 (skills radar)
- next-themes (dark mode)
- Recharts, Sonner (toasts) and other utilities as needed

## Live preview

- Local dev: http://localhost:3000
- Production (Vercel) — add your deployed URL here when available

## Project structure

```
app/
	page.tsx                # Home (Hero)
	about/page.tsx
	skills/page.tsx
	projects/page.tsx
	experience/page.tsx
	achievements/page.tsx
	contact/page.tsx
components/
	hero.tsx
	navigation.tsx
	contact.tsx             # Resume download logic (public + localStorage fallback)
	skills.tsx
	skills-radar.tsx        # Chart.js Radar
	projects.tsx
	experience.tsx
	achievements.tsx
	footer.tsx
	ui/*                    # Reusable UI components
lib/
	utils.ts
public/
	Resume_2520.pdf         # Optional: public resume asset
```

## Features

- Responsive pages: Home, About, Skills, Projects, Experience, Achievements, Contact
- Animated sections with Framer Motion
- Dark/light theme toggle (next-themes)
- Skills radar visualization (Chart.js)
- Resume download: public file or localStorage fallback
- Reusable UI primitives and clean project organization

## Getting started

Prerequisites
- Node.js 18+ (or 20+ recommended)
- npm (this project currently uses npm)

Install dependencies
```bash
npm install
```

Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

Build for production
```bash
npm run build
npm start
```

Type-check (optional)
```bash
npx tsc -p tsconfig.json --noEmit
```

## Routes

- `/` — Home (Hero)
- `/about` — About
- `/skills` — Skills
- `/projects` — Projects
- `/experience` — Experience
- `/achievements` — Achievements
- `/contact` — Contact

## Resume handling

The portfolio can serve a resume in two ways:

1) Public asset
- Place your PDF at `public/Resume_2520.pdf`.
- The Resume card/button will download that file.

2) Client-side fallback (localStorage)
- If the public file isn’t present, the UI tries `localStorage` under key `jp_resume_v1`.
- Expected structure: `{ name: string, type: string, data: string }` where `data` is base64-encoded bytes.

Note: LocalStorage is typically limited to ~5MB, so very large PDFs may not fit. For bigger files, consider an upload endpoint or IndexedDB.

## Package manager note

The repo contains a `pnpm-lock.yaml`, but the current workflow uses npm. To avoid tooling confusion:
- If you’ll use npm, consider removing `pnpm-lock.yaml` to prevent Next/ESLint from attempting pnpm installs.
- If you prefer pnpm, install it and run `pnpm install` instead of npm.

## Linting

This project has a lint script configured (`next lint`), but if you haven’t initialized ESLint yet, Next.js may prompt to install ESLint packages. If it tries using pnpm and fails:
- Remove `pnpm-lock.yaml` or install pnpm globally, or
- Manually install the suggested eslint packages with npm.

Then run:
```bash
npm run lint
```

## Deployment (Vercel)

1. Push to a GitHub repo.
2. Create a new project on Vercel and import the repo.
3. Framework preset: Next.js (detected automatically).
4. Build command: `next build` (default), Output: `.next/`
5. Deploy — your production URL will be available after build completes.

## Screenshots

Add screenshots to the `public/` folder and reference them here (optional):

```
![Home](public/screenshot-home.png)
![Dark Mode](public/screenshot-dark.png)
```

## License

Add your license of choice (MIT, Apache-2.0, etc.). If unspecified, treat this repository as “All rights reserved.”

---

Questions or improvements you want next (e.g., resume uploader to localStorage/IndexedDB, PDF preview, or CI/CD)? Open an issue or let me know.
