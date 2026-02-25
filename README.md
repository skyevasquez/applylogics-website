# ApplyLogics v2 (TanStack Start + Bun)

This project has been migrated from static HTML pages to [TanStack Start](https://tanstack.com/start) with Bun as package manager/runtime and Nitro as the server output.

## Local Development

```bash
bun install
bun --bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
bun --bun run build
bun .output/server/index.mjs
```

The production server respects `PORT` (defaults to `8000` in the Dockerfile).

## Routes

- `/` renders the home page
- `/$page` renders legacy `.html` page URLs (for example, `/about.html`, `/contact.html`, `/index.html`)

## Deployment on Disco Cloud

Deployment is configured via:

- `Dockerfile`
- `disco.json`

`disco.json` uses a Docker generator and exposes a `web` service on port `8000`, which matches the runtime container command:

```bash
bun .output/server/index.mjs
```

## Content and Assets

- Legacy page bodies are in `src/content/pages/*.html` and are rendered through TanStack routes.
- Static assets are served from `public/` (`styles.css`, `script.js`, logos, favicons, OG image).
