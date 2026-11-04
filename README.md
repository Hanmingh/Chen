# Ying Chen — Academic Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed with GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222?logo=github)](https://yingchen.org)

The official academic website of **Ying Chen**, Associate Professor in the Department of Mathematics at the
National University of Singapore (NUS).

**Live site:** <https://yingchen.org>

Behind the scenes this is a modern **single-page application**: the whole site is compiled into static files
(HTML, CSS, JavaScript and images) and served for free from GitHub Pages. There is no database and no server
to maintain, which also means the site loads quickly and is inexpensive to host.

> **Updating the site does not require a programming background.**
> Team profiles, events, the seminar schedule, the photo and the CV are all stored in a handful of clearly
> labelled files. Section [6. Updating content](#6-updating-content-for-non-programmers) walks through each one
> step by step, and section [10. Publishing your changes](#10-publishing-your-changes) explains how to put an
> edit online using only a web browser.

---

## Table of contents

1. [Overview](#1-overview)
2. [Live pages](#2-live-pages)
3. [Tech stack](#3-tech-stack)
4. [Run the site locally](#4-run-the-site-locally)
5. [Project structure](#5-project-structure)
6. [Updating content (for non-programmers)](#6-updating-content-for-non-programmers)
7. [Adding a new page](#7-adding-a-new-page)
8. [Styling and theme](#8-styling-and-theme)
9. [Deployment](#9-deployment)
10. [Publishing your changes](#10-publishing-your-changes)
11. [Troubleshooting](#11-troubleshooting)
12. [Conventions for maintainers](#12-conventions-for-maintainers)
13. [Contact](#13-contact)

---

## 1. Overview

This repository contains everything needed to build and publish <https://yingchen.org>:

- a biography, CV download, education and honours on the home page;
- research interests, funding and grants;
- teaching and supervision information;
- the current and former members of the research group;
- the **PRIVATISSIMUM** seminar series, loaded live from a Google Sheet;
- a timeline of conferences and events;
- dedicated pages for the group's startup projects, **Fuelture Technologies** and **Q-Health Technologies**.

The design is responsive (desktop, tablet and phone) and every page shares a single top navigation bar.

---

## 2. Live pages

| Route | Page | Source file |
| --- | --- | --- |
| `/` | Biography, CV, education, awards | [`src/pages/home.tsx`](src/pages/home.tsx) |
| `/research` | Research overview, funding, grants | [`src/pages/research.tsx`](src/pages/research.tsx) |
| `/research/fuelture` | Fuelture Technologies project page | [`src/pages/projects/fuelture.tsx`](src/pages/projects/fuelture.tsx) |
| `/Q-Health` | Q-Health Technologies project page | [`src/pages/projects/qhealth.tsx`](src/pages/projects/qhealth.tsx) |
| `/teaching` | Teaching, supervision and modules | [`src/pages/teaching.tsx`](src/pages/teaching.tsx) |
| `/member` | Current and former team members | [`src/pages/member.tsx`](src/pages/member.tsx) |
| `/pri` | PRIVATISSIMUM seminar schedule | [`src/pages/pri.tsx`](src/pages/pri.tsx) |
| `/events` | Conferences and events timeline | [`src/pages/events.tsx`](src/pages/events.tsx) |

> Routes are defined in [`src/App.tsx`](src/App.tsx) and the menu is defined in
> [`src/components/navbar.tsx`](src/components/navbar.tsx).

---

## 3. Tech stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Framework | [React 19](https://react.dev/) | Builds the interface from reusable components |
| Language | [TypeScript 5.7](https://www.typescriptlang.org/) | JavaScript with type checking, catches mistakes early |
| Build tool | [Vite 6](https://vite.dev/) | Instant local preview and optimised production builds |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) | Utility classes for layout, spacing and colour |
| Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Accessible buttons, menus, tables, dialogs |
| Icons | [Lucide](https://lucide.dev/) | SVG icon set |
| Animation | [Framer Motion](https://motion.dev/) | Subtle page and timeline transitions |
| Routing | [React Router 7](https://reactrouter.com/) | Client-side page navigation |
| PDF viewing | [react-pdf](https://github.com/wojtekmaj/react-pdf) | Renders the Q-Health deck in the browser |
| CSV parsing | [Papa Parse](https://www.papaparse.com/) | Reads the seminar schedule from Google Sheets |
| Hosting | [GitHub Pages](https://pages.github.com/) | Free static hosting with a custom domain |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | Builds and deploys on every push to `main` |

---

## 4. Run the site locally

Follow this section if you want to preview changes on your own computer before publishing them.
If you only need to make a small text change, you can skip straight to
[10. Publishing your changes](#10-publishing-your-changes).

### 4.1 Prerequisites

| Requirement | Version | Notes |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | **20 LTS or newer** | Includes `npm`. Download the LTS installer. |
| A code editor | any | [Visual Studio Code](https://code.visualstudio.com/) is recommended. |
| Git | any recent | Only needed for the command-line workflow. |

Check your versions:

```bash
node --version    # should print v20.x or higher
npm --version
```

> **Windows users:** run these commands in **PowerShell** or **Terminal**, not in the older `cmd.exe`.
> If `npm` is blocked by an execution policy, use `npm.cmd` instead of `npm`.

### 4.2 Install and start

```bash
# 1. Get the code
git clone https://github.com/Hanmingh/Chen.git
cd Chen

# 2. Install the dependencies (only needed once, or after package.json changes)
npm install

# 3. Start the development server
npm run dev
```

Open <http://localhost:5173> in your browser. The page reloads automatically every time you save a file.
Press `Ctrl + C` in the terminal to stop the server.

### 4.3 Available commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server with live reload |
| `npm run build` | Type-checks the project and creates an optimised build in `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally, exactly as it will run online |
| `npm run lint` | Checks the code for common mistakes and style problems |

> Always run `npm run build` before pushing. The deployment workflow runs the same command, and a TypeScript
> error there will block the release.

---

## 5. Project structure

```text
Chen/
├─ .github/workflows/deploy.yml   # Automatic build & deploy to GitHub Pages
├─ public/                        # Files copied to the site as-is (images, PDFs, CNAME…)
│  ├─ 404.html                    # SPA fallback so deep links work on GitHub Pages
│  ├─ CNAME                       # Custom domain: yingchen.org
│  ├─ CV_YingChen_20260117.pdf    # CV download
│  ├─ C_logo.png                  # Browser tab icon (favicon)
│  ├─ NUS_logo.jpg                # Navigation bar logo
│  ├─ info/chenying.jpg           # Profile photo on the home page
│  ├─ projects/                   # Project screenshots, logos and the Q-Health deck
│  └─ teams/
│     ├─ current/                 # Photos of current members
│     └─ former/                  # Photos of former members
├─ src/
│  ├─ App.tsx                     # Route table (URL → page)
│  ├─ main.tsx                    # Application entry point
│  ├─ index.css                   # Tailwind import + colour theme variables
│  ├─ assets/utils/               # Social icons (LinkedIn, GitHub, Dribbble)
│  ├─ components/
│  │  ├─ navbar.tsx               # Top navigation and mobile menu
│  │  └─ ui/                      # shadcn/ui building blocks (generated, rarely edited)
│  ├─ data/
│  │  ├─ teamData.ts              # ⭐ Team members (current + former)
│  │  └─ events.ts                # ⭐ Conferences and events
│  ├─ lib/utils.ts                # Small shared helpers (class-name merging)
│  └─ pages/                      # One file per page
│     ├─ home.tsx  events.tsx  member.tsx  pri.tsx
│     ├─ research.tsx  teaching.tsx
│     └─ projects/fuelture.tsx  projects/qhealth.tsx
├─ index.html                     # HTML shell, page title, GitHub Pages redirect script
├─ vite.config.ts                 # Vite configuration, `@/` path alias, base URL
├─ components.json                # shadcn/ui configuration
└─ package.json                   # Dependencies and npm scripts
```

---

## 6. Updating content (for non-programmers)

### 6.1 What lives where

| I want to change… | Edit this |
| --- | --- |
| Team members (add, remove, edit) | [`src/data/teamData.ts`](src/data/teamData.ts) |
| Conferences and events | [`src/data/events.ts`](src/data/events.ts) |
| Home page biography, education, awards | [`src/pages/home.tsx`](src/pages/home.tsx) |
| Profile photo | `public/info/chenying.jpg` |
| CV | `public/CV_YingChen_20260117.pdf` |
| Seminar schedule (PRIVATISSIMUM) | The linked Google Sheet — see [6.4](#64-updating-the-seminar-schedule-pri) |
| Teaching and modules | [`src/pages/teaching.tsx`](src/pages/teaching.tsx) |
| Research text, funding, grants | [`src/pages/research.tsx`](src/pages/research.tsx) |
| Navigation menu labels | [`src/components/navbar.tsx`](src/components/navbar.tsx) |
| Project pages | `src/pages/projects/fuelture.tsx`, `src/pages/projects/qhealth.tsx` |
| Colours, corner radius, dark mode values | [`src/index.css`](src/index.css) |
| Browser tab title and icon | `index.html`, `public/C_logo.png` |

### 6.2 Three rules that prevent 90% of mistakes

1. **Only change text between quotes or between `>` and `<`.** Never edit `className="..."`, `import ...`
   lines, or anything inside curly braces unless the instructions below tell you to.
2. **Keep the punctuation exactly as it is.** Every value needs its quotes, every item needs a trailing comma,
   and every `{` needs a matching `}`. One missing comma will stop the site from building.
3. **Change one thing, save, then check the browser.** Small steps are much easier to undo than large ones.

> If the page turns blank or the terminal shows an error after an edit, undo with `Ctrl + Z` and save again.
> The site is only published when the build succeeds, so a broken draft will never reach the public website.

---

### 6.3 Adding or editing a team member

**File:** [`src/data/teamData.ts`](src/data/teamData.ts)

The file contains two lists:

- `currentMembers` — shown first, under **TEAM MEMBERS**
- `formerMembers` — shown second, under **FORMER MEMBERS**

Both use the same structure. Find the list you need, then copy an existing entry and change its values.

```ts
    {
        id: "jane-doe",
        name: "Jane, Doe",
        term: "2026 Jan –",
        focus: "Quantum Machine Learning, Time Series Analysis",
        avatar: "teams/current/jane-doe.jpg",
        company: "",
        linkedin: "https://www.linkedin.com/in/jane-doe/",
        github: "",
        dribbble: "",
    },
```

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Unique identifier for the person. Lowercase, hyphens, no spaces. Never reuse an existing `id`. |
| `name` | yes | Displayed exactly as written. Existing entries use `"Family, Given"`. |
| `term` | yes | Time with the group, e.g. `"2022 Aug –"` for ongoing, or `"2021 Aug – 2026 Aug"`. Copy the en dash `–` from an existing entry. |
| `focus` | yes | Research interests, comma separated, on one line. |
| `avatar` | yes | Path to the photo, relative to `public/`. Existing entries use no leading slash, e.g. `"teams/current/jane-doe.jpg"`. |
| `company` | no | Former members only: current position, displayed beneath the name. Use `""` when empty. |
| `linkedin` | no | Full URL including `https://`. The icon only appears when a value is present. |
| `github` | no | Full URL, or `""`. |
| `dribbble` | no | Full URL, or `""`. |

**Adding the photo**

1. Crop the portrait to a **square**, ideally 600 × 600 pixels, JPG format, under ~300 KB.
2. Save it in `public/teams/current/` or `public/teams/former/`.
3. Name it with lowercase letters and hyphens only — no spaces, accents or Chinese characters
   (e.g. `jane-doe.jpg`).
4. Use exactly that filename in `avatar`.

> **Windows tip:** file extensions are case-sensitive on the live server even though Windows hides them.
> `photo.jpeg` and `photo.jpg` are different files online. Keep the extension identical to the real file.

**Ordering**

Members appear in the order they are listed. Add new people in the position that matches their start date,
and keep the comma after each entry — including the last one before the closing `]`.

---

### 6.4 Updating the seminar schedule (PRI)

**File:** [`src/pages/pri.tsx`](src/pages/pri.tsx) — but you normally do not need to edit code at all.

The PRIVATISSIMUM table is fetched live from a published Google Sheet every time the page is opened:

<https://docs.google.com/spreadsheets/d/1W6D6HGo3xqrj2203KmKpisbVc9oUukE08Vy53bpkVJE>

1. Open the sheet (editor access required) and edit the rows.
2. Keep the header row exactly as `Date`, `Presenter`, `Title` — the page matches these column names.
3. Delete empty rows rather than leaving blank ones between entries.
4. Make sure sharing is set to **Anyone with the link → Viewer**, otherwise the browser cannot read the data.
5. Reload <https://yingchen.org/pri>. No rebuild or redeploy is necessary.

To point the site at a **different** spreadsheet, copy its CSV export link
(`https://docs.google.com/spreadsheets/d/<ID>/export?format=csv&gid=<TAB_ID>`) and replace the `csvUrl`
value at the top of [`src/pages/pri.tsx`](src/pages/pri.tsx). The `gid` identifies the specific tab inside
the workbook.

---

### 6.5 Editing text on a page (home, research, teaching)

**Files:** anything in `src/pages/`.

1. Open the file and search for the sentence you want to change (`Ctrl + F`).
2. Edit only the words **between `>` and `<`**, or the value inside quotes.
3. Leave the surrounding elements untouched:

```tsx
// Before
<h2 className="text-2xl font-bold mb-4">Education</h2>

// After — only the words between the tags changed
<h2 className="text-2xl font-bold mb-4">Education and Training</h2>
```

**Replacing the profile photo or CV**

| Item | How |
| --- | --- |
| Profile photo | Overwrite `public/info/chenying.jpg` with a new image of the same filename. |
| CV | Save the new PDF in `public/`. Then update the link in `src/pages/home.tsx`:<br>`href="/CV_YingChen_20260117.pdf"` → your new filename. Keep the leading `/`. |

To add a new paragraph, copy an existing one and change the text:

```tsx
<p className="text-sm text-muted-foreground">
  Your new paragraph goes here.
</p>
```

To add a new bullet, copy a `<li>` line and change its text.

---

### 6.6 Adding or editing an event

**File:** [`src/data/events.ts`](src/data/events.ts)

```ts
    {
        id: 33,
        title: "Name of the conference",
        description: "City, Country",
        date: "1 Jan 2026 – 3 Jan 2026",
        link: "https://example.com",
    },
```

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Unique number. Use the next unused integer above the highest existing one. |
| `title` | yes | Event name. |
| `description` | yes | Venue or location. |
| `date` | yes | Human-readable date range. |
| `link` | no | Official event page; the title becomes clickable when present. Delete the whole line to omit it. |

Events are displayed in file order with the most recent at the top, so insert new entries at the beginning
of the list.

---

### 6.7 Editing the navigation menu

**File:** [`src/components/navbar.tsx`](src/components/navbar.tsx)

The `menu` array near the top of the file controls the links shown on every page:

```tsx
{ title: "Events", url: "/events" },
```

- `title` is the label visitors see.
- `url` must match a route declared in [`src/App.tsx`](src/App.tsx).

Adding or removing an entry here changes both the desktop menu and the mobile menu automatically.

---

## 7. Adding a new page

Adding a page takes three small edits.

**Step 1 — create the page** in `src/pages/`, for example `publications.tsx`:

```tsx
const Publications = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Publications</h1>
      <p className="text-sm text-muted-foreground">
        A list of publications will appear here.
      </p>
    </section>
  );
};

export default Publications;
```

**Step 2 — register the route** in [`src/App.tsx`](src/App.tsx):

```tsx
// at the top of the file, together with the other imports
import Publications from './pages/publications'

// inside <Routes>, next to the existing routes
<Route path="/publications" element={<Publications/>} />
```

**Step 3 — add a menu link** in [`src/components/navbar.tsx`](src/components/navbar.tsx):

```tsx
{ title: "Publications", url: "/publications" },
```

Save, run `npm run dev`, and the new page is reachable at <http://localhost:5173/publications>.

> The shared layout classes (`w-[80%] lg:w-[60%] mx-auto`) keep the page width consistent with the rest of
> the site. Copy them from an existing page.

---

## 8. Styling and theme

Styling uses **Tailwind CSS utility classes** written directly in the JSX, plus a small set of design tokens.

- **Colours, radius and dark-mode values** live in [`src/index.css`](src/index.css) as CSS variables in the
  `:root` and `.dark` blocks. Changing `--primary`, `--background` or `--radius` updates the whole site at once.
- **Component styles** such as `text-muted-foreground` or `bg-muted` reference those tokens, so they stay
  consistent if the palette changes.
- **Typography and spacing** are set per element, e.g. `text-sm`, `font-bold`, `mb-10`. Adjust the number or
  word to change size and spacing without touching the layout structure.

The files in `src/components/ui/` are generated by shadcn/ui and are shared by many pages. Avoid editing them
unless you intend to change a component everywhere it is used.

---

## 9. Deployment

The site is published automatically by GitHub Actions.

**Workflow:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

1. Every push to `main` (and every pull request against it) starts the workflow.
2. GitHub installs dependencies with `npm ci`, runs `npm run build`, and uploads the `dist/` folder as a
   Pages artifact.
3. On pushes only, the artifact is deployed to GitHub Pages — usually within one to two minutes.

**Custom domain**

- `public/CNAME` contains `yingchen.org`. This file must keep that exact name and must not be deleted.
- The domain's DNS records must point to GitHub Pages (an `A` record set for the apex domain, or a `CNAME`
  record for a `www` subdomain).
- Repository **Settings → Pages** should use **Source: GitHub Actions**, with `yingchen.org` set as the
  custom domain.

**The `base` setting**

[`vite.config.ts`](vite.config.ts) sets `base: '/'`. This is correct for a site served from the root of a
custom domain. Only change it if the site moves to a sub-path such as `https://user.github.io/repo/`.

**Deep links and the 404 page**

This is a single-page application, so every route is handled by JavaScript. GitHub Pages has no server-side
routing, therefore:

- `public/404.html` redirects unknown paths back into the app, and
- a matching script in `index.html` restores the original URL.

Both files are required for links such as `/member` or `/research/fuelture` to survive a page refresh.
Do not delete or rename them.

---

## 10. Publishing your changes

### Option A — directly on GitHub (no installation)

Best for small text edits and new team members.

1. Sign in to GitHub and open the repository: <https://github.com/Hanmingh/Chen>
2. Make sure the branch selector says **main**.
3. Open the file you want to change, e.g. `src/data/teamData.ts`.
4. Click the **pencil** icon (Edit this file).
5. Make your change. Use the **Preview** tab to check the surrounding structure.
6. Click **Commit changes…**, write a short description such as `Add Jane Doe to current members`,
   and commit directly to `main`.
7. Open the **Actions** tab and wait for the latest run to show a green check mark.
8. Visit <https://yingchen.org> and refresh with `Ctrl + Shift + R` (or `Cmd + Shift + R` on macOS).

For photo uploads, use **Add file → Upload files** and place the image in the correct `public/teams/...` folder.
Upload the image **before** committing the change that references it.

### Option B — from your computer

```bash
# See what you changed
git status

# Stage the files you edited
git add src/data/teamData.ts public/teams/current/jane-doe.jpg

# Describe the change
git commit -m "Add Jane Doe to current members"

# Publish — this triggers the automatic deployment
git push
```

If you work on a branch instead of `main`, open a pull request; the workflow will build and verify it, and
the site updates when the pull request is merged.

---

## 11. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| The page is blank after an edit | A syntax error, usually a missing comma, quote or brace | Undo the edit (`Ctrl + Z`), then redo it carefully. Check the terminal output for the file and line number. |
| `npm run build` fails with a TypeScript error | A required field is missing or a value has the wrong type | Read the reported file and line; compare the entry with an existing one. |
| My change is not on the live site | The workflow is still running, or you edited a different branch | Check the **Actions** tab; confirm the commit is on `main`; hard-refresh the browser. |
| An image does not appear | Wrong folder, wrong path, or a case/extension mismatch | The file must be inside `public/`, the path must match exactly (`photo.jpeg` ≠ `photo.jpg`), and it must not contain spaces. |
| A link shows *404* after refreshing | `public/404.html` or the redirect script in `index.html` is missing | Restore both files from version control. |
| `npm install` reports an engine error | Node.js is too old | Install Node.js 20 LTS or newer and reopen the terminal. |
| The seminar table is empty | The Google Sheet is private, or headers no longer match | Set sharing to *Anyone with the link — Viewer* and restore the `Date` / `Presenter` / `Title` headers. |
| `npm : 无法加载文件 …` on Windows | PowerShell execution policy blocks npm's script | Use `npm.cmd run dev` instead of `npm run dev`. |

---

## 12. Conventions for maintainers

- **Keep content in data files.** Team members belong in `teamData.ts`, events in `events.ts`; only put
  content directly in a page when it is genuinely unique to that page.
- **Use the `@/` alias** for imports from `src/`, e.g. `import { events } from "@/data/events"`.
- **Validate before pushing:** `npm run lint` and `npm run build` must both succeed.
- **Do not edit generated UI primitives** in `src/components/ui/` for one-off styling; use utility classes at
  the call site instead.
- **Keep asset names** lowercase with hyphens, and keep existing filenames when overwriting images so links
  do not break.
- **One logical change per commit**, with a short imperative message (`Update teaching modules for AY2025-2026`).

---

## 13. Contact

**Ying Chen** — Department of Mathematics, National University of Singapore
Block S17, Level 4, 10 Lower Kent Ridge Road, Singapore 119076

- Email: <matcheny@nus.edu.sg>
- ORCID: [0000-0002-2577-7348](https://orcid.org/0000-0002-2577-7348)
- LinkedIn: <https://www.linkedin.com/in/ying-chen-940a9969/>

For technical questions about this repository, please open an issue at
<https://github.com/Hanmingh/Chen/issues>.
