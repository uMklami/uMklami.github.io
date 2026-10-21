# Muhammad Aamir — Academic Website

Static site (HTML/CSS/JS, no build step) for GitHub Pages.

## Deploy
1. Create a repo named `<your-github-username>.github.io` (e.g. `uMklami.github.io`).
2. Push these files to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/uMklami/uMklami.github.io.git
   git push -u origin main
   ```
3. In the repo: Settings → Pages → Source: "Deploy from a branch", `main` / root.
4. The site goes live at `https://umklami.github.io`.

## Editing
- Text and sections: `index.html`
- Publications list: the `PUBS` array in `assets/main.js`
- Colours and fonts: `assets/style.css` (`:root` variables)
- Photo: add `assets/profile.jpg` and change the `<img class="avatar">` src in `index.html`
- CV: replace `MyCV-Fellowship.pdf` (or rename and update the CV link)

Preview locally: `python3 -m http.server` then open http://localhost:8000
