# Jai Prakash — Portfolio

This is a Next.js portfolio site. The project uses React + Next.js and Tailwind CSS.

## Quick start

1. Install dependencies (you already used npm):

	```bash
	npm install
	```

2. Run the development server:

	```bash
	npm run dev
	```

	The site will be served at http://localhost:3000

3. Build for production:

	```bash
	npm run build
	npm start
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

The project supports a resume that can be downloaded from the UI. Behavior:

- If there is a file at `public/Resume_2520.pdf`, clicking the Resume card or the "Download Resume" button in the Contact page will download that file.
- If the public file is not present, the code will fall back to a resume stored in browser `localStorage` under the key `jp_resume_v1`. That stored object should be a JSON object with `{ name, type, data }` where `data` is the base64-encoded file contents.

To make the public flow work, place your PDF at:

```
public/Resume_2520.pdf
```

If you prefer storing the resume client-side instead of committing it to the repo, I can add an upload button that saves the file to `localStorage` (let me know and I will add it).

## Components of interest

- `components/contact.tsx` — contact cards, Resume download logic (public + localStorage fallback)
- `components/navigation.tsx` — navbar routing between pages
- `components/hero.tsx` — hero section

## Notes & troubleshooting

- Local storage is limited (~5MB). Large PDFs may not fit — for larger files use server upload or IndexedDB.
- If you click the Resume button and see an alert "Resume not found...", put `Resume_2520.pdf` into `public/` or add a stored resume under `jp_resume_v1`.
- The app was developed and tested with Node/npm. If you prefer pnpm, install it and run `pnpm install`.

## Next steps I can help with

- Add a client-side Upload button to save a resume to `localStorage` or IndexedDB
- Add PDF preview in the browser (iframe or PDF.js)
- Add server upload and storage integration

If you want any of the above, tell me which and I will implement it.