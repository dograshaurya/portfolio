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

Put the strongest project slug first to feature it at the top.

Current featured order starts with:

1. `traffic-enforcement` — Automated Violation Detection & Monitoring System
2. `multilingual-credit-chat` — Multilingual Credit-Based Chat System
3. `ai-assisted-vehicle-insurance` — AI-Assisted Vehicle Insurance Quotation Platform

The former CleanCash project is presented as **Tipping App** using the supplied project description.
