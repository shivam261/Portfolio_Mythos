# Portfolio Project Overview for Claude

A dark-theme, 3D-enhanced personal portfolio. Next.js (App Router) + TypeScript
+ Tailwind CSS v4, with React Three Fiber for the 3D hero and Framer Motion for
animation. All content is data-driven — see "Editable data source" below.

## Required commands

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build the app for production:
   ```bash
   npm run build
   ```
4. Start the production server:
   ```bash
   npm run start
   ```
5. Run lint checks:
   ```bash
   npm run lint
   ```

## Editable data source

- All personal content lives in the typed files under `/data` — **not** in any
  component. There is no longer a root `data.ts`.
- The files:
  - `data/profile.ts` — name, title, tagline, bio, email, resume URL, location, social links
  - `data/projects.ts` — array of projects (see shape below)
  - `data/experience.ts` — timeline: work / certification / education entries
  - `data/skills.ts` — skills grouped by category
  - `data/navigation.ts` — navbar links / section anchors
  - `data/types.ts` — the TypeScript interfaces every data file is typed against
- Every section component in `/components` imports from `/data` and maps over it.
  To edit content, change only the `/data` files — never the components.
- See `CONTENT_GUIDE.md` for a plain-language "which file do I edit for X" guide.

## Project section behavior

- Each project may include (all optional, rendered only if present):
  - `githubUrl` / `demoUrl` — link buttons appear only for links you provide
  - `architectureDiagram` — an ordered `string[]` of flow steps; if present, the
    reusable `components/ArchitectureDiagram.tsx` auto-renders an animated flow
    diagram (a glowing pulse traveling the steps). One component serves every project.
  - `metrics` — array of `{ label, value }`, only rendered if present
  - `tradeOffs` — bullet list, shown on featured projects
- `featured: true` → full case-study layout (`FeaturedProject.tsx`) with diagram,
  trade-offs, and metrics. `featured: false` → compact card (`ProjectCard.tsx`).
- `status` (`"completed" | "in-progress" | "planned"`) renders a badge. Never
  hardcode or invent a status — it always comes from the data file.

## Experience section behavior

- `ExperienceSection.tsx` renders **three separate timelines**, one per entry
  `type`, not a single combined list. The order and headings come from a
  `groups` array at the top of the file (`work` → `certification` →
  `education`). To reorder, rename, or hide a timeline, edit that array — the
  section auto-skips any group with no matching entries in `data/experience.ts`.
- A group's `title` is **optional**. The `work` group intentionally has no
  `title`, so its timeline renders with no `# heading` and sits directly under
  the section's "Professional Experience" title. `certification` and
  `education` render `# Certifications` / `# Education` headings above theirs.
- Experience cards **deliberately omit the type tag (WORK/CERT/EDU) and the
  StatusBadge** — the entry type is already conveyed by the timeline heading +
  the node icon on the rail, and completion status by the date range (an
  in-progress entry shows "Present"). Do not re-add these to the experience
  cards. (`StatusBadge` is still used by the project cards — that's intentional.)
- The date range renders inline on the same baseline as the role (role left,
  date right), so removing the badge/tag left no empty header row.

## Architecture notes for Claude

- Homepage: `app/page.tsx` composes the section components in order
  (Hero, About, ProjectsSection, ExperienceSection, SkillsSection, Contact).
- Design tokens (colors, fonts) are CSS variables in `app/globals.css` under
  `@theme`. Accent color is electric blue `#38bdf8`; background `#0a0a0f`.
  Fonts: Inter (sans) + JetBrains Mono (mono) via `next/font`.
- Shared Framer Motion variants live in `lib/animations.ts` — reuse these rather
  than defining new ones per component.
- 3D lives in `components/three/`. `HeroCanvas.tsx` lazy-loads the WebGL scene
  client-side only, degrades to a lighter scene on low-end/mobile devices, and
  falls back to a static glow under `prefers-reduced-motion`.
- **ESLint uses the React Compiler rules.** Do not mutate the result of a
  `useMemo`/`useRef`-held value during render, and do not call `Math.random()` in
  render. In `useFrame` loops (three.js), keep mutable animation state in refs and
  use a seeded PRNG for any geometry generated at render time — see
  `components/three/HeroScene.tsx`.
- Never fabricate metrics, finished-status claims, or certifications. Those only
  ever come from what's written in the `/data` files.

## Content rules

- Placeholder/example content in the data files is marked `// EXAMPLE` so it is
  clearly distinguishable from real data. Preserve that convention when adding
  new example entries.
