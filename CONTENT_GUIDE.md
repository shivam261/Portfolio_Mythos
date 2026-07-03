# Content Guide

Everything on this site is driven by the plain data files in the **`/data`**
folder. You never need to touch the design or component code (`/components`,
`/app`) to update your portfolio — just edit these files and save. The page
updates automatically.

All the files are marked with `// EXAMPLE` comments showing the current
placeholder content. Replace the examples with your real details and delete any
you don't need.

> Tip: keep the shape (the field names and `{ }` / `[ ]` structure) the same —
> only change the text inside the quotes. If you're editing in VS Code and a
> red underline appears, hover it: TypeScript is telling you a field is missing
> or misspelled.

---

## Quick reference — which file do I edit?

| I want to… | Edit this file |
| --- | --- |
| Change my name, title, tagline, bio, email, location | `data/profile.ts` |
| Change my resume link | `data/profile.ts` (`resumeUrl`) |
| Add / change social links (GitHub, LinkedIn, …) | `data/profile.ts` (`socialLinks`) |
| Add / edit / remove a project | `data/projects.ts` |
| Mark a project completed / in-progress / planned | `data/projects.ts` (`status`) |
| Add an architecture diagram to a project | `data/projects.ts` (`architectureDiagram`) |
| Add a job, certification, or education entry | `data/experience.ts` |
| Mark experience as in-progress vs completed | `data/experience.ts` (`status`) |
| Add / remove a skill or skill category | `data/skills.ts` |
| Change the navbar links | `data/navigation.ts` |

---

## Common tasks, step by step

### Update your name, bio, or links
Open **`data/profile.ts`** and edit the fields. Notes:
- `bio` is a list of strings — each string becomes its own paragraph in the
  About section. Add or remove paragraphs by adding/removing list items.
- `socialLinks` — each link has a `platform` that picks its icon. Allowed
  platforms: `"github"`, `"linkedin"`, `"twitter"`, `"email"`, `"website"`.
  Delete any link you don't use. For email, keep the `mailto:` prefix on the URL.
- `resumeUrl` — put your PDF in the **`/public`** folder (e.g. `public/resume.pdf`)
  and set this to `"/resume.pdf"`.

### Add a new project
Open **`data/projects.ts`** and copy an existing entry inside the `[ ]`, then edit it:
```ts
{
  id: "my-new-project",          // unique, lowercase-with-dashes
  title: "My New Project",
  summary: "One line shown on the card.",
  description: ["A longer paragraph. Only shown for featured projects."],
  status: "completed",            // "completed" | "in-progress" | "planned"
  featured: false,                // true = big case-study layout
  techStack: ["Go", "Redis"],
  githubUrl: "https://github.com/you/my-new-project",  // optional
  demoUrl: "https://example.com",                       // optional
}
```
- **`featured: true`** gives the project the large layout with architecture
  diagram, trade-offs, and metrics. Keep this `true` for **one** project (your
  best one). Everything else uses the compact card grid.
- **Optional fields** only appear if you include them. No `demoUrl`? The demo
  button just doesn't show. No `metrics`? No metrics row. Nothing breaks.

### Mark a project as finished (or in progress)
In **`data/projects.ts`**, change that project's `status`:
- `"completed"` → green "completed" badge
- `"in-progress"` → blue pulsing "in progress" badge
- `"planned"` → grey "planned" badge

### Add an animated architecture diagram to a project
In **`data/projects.ts`**, add an `architectureDiagram` field — an ordered list
of the steps a request flows through:
```ts
architectureDiagram: ["Client", "CloudFront", "API Gateway", "Lambda", "DynamoDB"],
```
That's it. The site auto-generates the animated flow diagram (a glowing pulse
travels through the steps). Works for any project. Remove the field and the
diagram disappears. The diagram shows only on `featured: true` projects.

### Add real metrics to a project
Only add numbers you actually have — never invent them. In **`data/projects.ts`**:
```ts
metrics: [
  { label: "p99 latency", value: "42 ms" },
  { label: "Uptime", value: "99.9%" },
],
```
Delete the whole `metrics` line if you have no real numbers yet.

### Add a job, certification, or degree
Open **`data/experience.ts`** and add an entry (newest first — it renders top to
bottom in the order listed):
```ts
{
  role: "Software Engineer Intern",
  organization: "Some Company",
  type: "work",                 // "work" | "certification" | "education"
  status: "completed",          // "completed" | "in-progress"
  startDate: "Jun 2025",
  endDate: "Dec 2025",          // omit this line while in progress → shows "Present"
  description: "What you did.",
  skills: ["TypeScript", "AWS"], // optional
}
```
- `type` picks the icon and small label (work / cert / edu).
- For something ongoing (a certification you're studying for, a current job or
  degree), set `status: "in-progress"` and **leave out `endDate`** — the timeline
  will show "Present" and a live pulsing badge.

### Add or remove a skill
Open **`data/skills.ts`**. Skills are grouped by category:
```ts
{ category: "Cloud & AWS", items: ["Lambda", "DynamoDB", "S3"] }
```
Add a skill by adding a string to an `items` list. Add a whole new category by
copying one of the `{ }` blocks. These skills also feed the "stack" pills in the
About section automatically.

### Change the navbar
Open **`data/navigation.ts`**. Each link points to a section anchor on the page:
```ts
{ label: "Projects", href: "#projects" }
```
The existing anchors are `#about`, `#projects`, `#experience`, `#skills`,
`#contact`. Reorder or remove links freely. (Only add a new `href` if a matching
section with that `id` exists on the page.)

---

## Previewing your changes

```bash
npm install     # first time only
npm run dev     # start the dev server, then open http://localhost:3000
```
Save a data file and the browser refreshes automatically.

Before deploying, it's worth running:
```bash
npm run build   # catches any type errors from a mistyped field
npm run lint
```

---

## Deploying (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), "Add New → Project", and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every future `git push` to your main branch redeploys automatically.

If you reference a resume at `/resume.pdf`, make sure the file is committed in
the `/public` folder so it ships with the deploy.
