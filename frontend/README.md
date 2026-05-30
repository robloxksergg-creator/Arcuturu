# Frontend (static)

This folder contains a ready static frontend matching the dark style of your reference screenshots. It uses SVG placeholders instead of real photos — replace files in `images/` with your art.

To run (dev with React + Vite):

```powershell
cd frontend
npm install
npm run dev
```

Open the printed `Local` URL (usually http://localhost:5173).

Files:
- `index.html` — app entry (Vite)
- `src/` — React source (components and styles)
- `images/` — SVG placeholders (hero, news, avatar)

Replace SVGs in `images/` with your artworks (same filenames) — React will pick them up automatically.
