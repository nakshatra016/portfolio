# Nakshatra Ramakrishnan — Portfolio

Static multi-page portfolio built with plain HTML, CSS and a bit of JavaScript.

## How to use

1. Clone or download the files.
2. Put your `resume.pdf` in the `assets` folder and optionally a `profile.jpg`.
3. Open `index.html` in your browser to preview locally.

## Deploy

**Option A — GitHub Pages**
- Create a repository (e.g., `portfolio`).
- Push the folder contents to the repository root.
- In repo settings -> Pages -> deploy from `gh-pages` branch or `main` / `master` branch root. GitHub will serve the static files.

**Option B — Netlify**
- Drag & drop the folder into Netlify Sites or connect repo and set build command: none, publish directory: `/`.

## Customize
- Edit `css/style.css` to change colors, fonts and spacing.
- Change content in HTML files to update projects, skills or contact details.
- Add analytics or a contact backend when you move beyond static hosting.

---

## Notes
- Contact form uses `mailto:` — for a production form, integrate a serverless function or form service (Formspree, Netlify Forms, etc.).
- Replace placeholder `assets/profile.jpg` and `assets/resume.pdf` with your real profile image and CV.
