# Dynamic case studies

Each `.json` file in this folder is a project.

Add a new file such as `my-new-project.json`, then push to `main`. The Next.js static build automatically creates:

- A project card on the homepage
- A card on `/portfolio/projects/`
- A case study at `/portfolio/projects/<slug>/`

For screenshots, create:

`public/projects/<slug>/`

and add the screenshots there.

The display order is controlled by:

`data/project-order.json`

Current featured order starts with:

1. `traffic-enforcement` — Automated Violation Detection & Monitoring System
2. `singelportalen` — SingelPortalen
3. `ai-assisted-vehicle-insurance` — AI-Assisted Vehicle Insurance Quotation Platform

**Tipping App is retained. CleanCash has been removed.**
