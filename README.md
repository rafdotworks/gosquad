# Gosquad

Design prototype workspace for Gosquad UI screens. Built with Vite, React, and TypeScript.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── components/ui/       # Shared UI primitives (Eyebrow, MetaItem, …)
├── features/          # One folder per prototype screen
│   └── role-page/     # Role information page
├── lib/               # Utilities (storage, etc.)
├── routes/            # React Router setup
├── styles/            # Global CSS
└── theme/             # Design tokens and shared style objects
```

## Adding a new prototype screen

1. Create `src/features/<screen-name>/<ScreenName>.tsx`
2. Add static content to `src/features/<screen-name>/data/` if needed
3. Register a route in `src/routes/index.tsx`:

```tsx
<Route path="/your-path" element={<YourScreen />} />
```

## Design tokens

Colors, typography, and shadows live in `src/theme/tokens.ts`. Shared button and card styles are in `src/theme/styles.ts`. Global hover states and responsive breakpoints are in `src/styles/global.css`.

## Comment pins

The Role page includes a design-review comment tool. Pins persist in `localStorage` under the key `gosquad:rolepage:comments`.
