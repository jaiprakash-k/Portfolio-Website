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
