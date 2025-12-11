# Praveenya Sports Academy SPA

React + Vite single-page app configured for automated GitHub Pages deployment to the custom domain `pravinyasports.in`.

## Scripts
- `npm run dev` – start local dev server.
- `npm run build` – production build to `dist`.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint.

## CI/CD and hosting
- Workflow: `.github/workflows/deploy.yml` builds on pushes to `main` (and manual dispatch), caches npm deps, runs `npm ci && npm run build`, uploads `dist`, then deploys to GitHub Pages.
- Custom domain: `public/CNAME` pins `pravinyasports.in`; the deploy step also sets the CNAME during publish.
- Base path: `vite.config.js` uses `base: '/'` so assets load correctly on the apex domain.

## One-time setup checklist
- Push this repository to GitHub.
- In GitHub repo Settings → Pages: Source = GitHub Actions, Custom domain = `pravinyasports.in`, and enable HTTPS.
- DNS for `pravinyasports.in`:
  - Apex: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
  - Optional `www`: `CNAME` pointing to `<YOUR_GITHUB_USERNAME>.github.io`.
- Trigger the workflow (push to `main` or run manually) and wait for the Pages deployment + TLS to finish before checking the live site.
