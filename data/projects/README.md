# Add a new project

Create a new `.json` file in this folder.

Example: `my-new-project.json`

```json
{
  "slug": "my-new-project",
  "title": "My New Project",
  "category": "SaaS · Laravel · React",
  "summary": "Short project description.",
  "role": "System Design & Full-Stack Development",
  "technology": "Laravel · React · MySQL · AWS",
  "result": "40% faster processing",
  "challenge": "What business/technical problem did you solve?",
  "solution": [
    "What you built.",
    "What you improved.",
    "How you handled the technical challenge."
  ],
  "outcomes": [
    "Measured outcome.",
    "Another concrete result."
  ]
}
```

That file automatically creates:

- Homepage project card
- `/portfolio/projects/` listing card
- `/portfolio/projects/my-new-project/` case study

For screenshots, create:

`public/projects/my-new-project/`

and put the screenshots there.

This is a static GitHub Pages site, so adding a project means adding the JSON + images to GitHub and pushing to `main`. GitHub Actions rebuilds the case-study pages automatically.
