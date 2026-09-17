# risa_homepage

Personal academic homepage for Risa Shinoda, migrated from the previous
Google Sites page. Plain HTML/CSS/JS — no build step.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser.

## Replace the profile photo

Drop a photo at `img/profile.jpg` (square-ish works best, it's shown in a
circle). Until that file exists, the page shows a placeholder "RS" avatar.

## Structure

- `index.html` — all page content (about, news, publications, experience,
  education, awards, service, contact)
- `css/style.css` — styling, including a dark-mode palette
- `js/main.js` — mobile nav toggle
- `img/` — favicon and profile photo

## Publish on GitHub Pages (when ready)

This was set up for a **user site**, so the GitHub repo must be named
exactly `<your-github-username>.github.io`.

```
gh repo create <your-github-username>.github.io --public --source=. --remote=origin
git push -u origin main
```

Then in the repo's Settings → Pages, set the source to the `main` branch
(root). The site will be live at `https://<your-github-username>.github.io/`
within a few minutes.

If you'd rather not use the `gh` CLI, create the repo manually on GitHub
with that exact name, then:

```
git remote add origin git@github.com:<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```
