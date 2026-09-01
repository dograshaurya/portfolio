# Shaurya Dogra — Next.js Portfolio

GitHub Pages-ready Next.js portfolio with static export.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages deployment

1. Create a GitHub repository. For the cleanest portfolio URL, use `dograshaurya.github.io`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Pushes to `main` automatically build and deploy the site.

For a project repository named `portfolio`, the URL will normally be:
`https://dograshaurya.github.io/portfolio/`

For a user site repository named `dograshaurya.github.io`, the URL will normally be:
`https://dograshaurya.github.io/`

## Adding real project screenshots

Replace the placeholder files under:

`public/projects/<project-slug>/`

and update `data/projects.ts` when adding or editing case studies.

## Portfolio routes

- `/` — homepage
- `/projects/` — project listing
- `/projects/<slug>/` — individual case study


## Dynamic case studies

Projects are data-driven. Add a JSON file under `data/projects/` and push it to `main`; the dynamic case-study page is generated automatically during the GitHub Pages build. See `data/projects/README.md`.
