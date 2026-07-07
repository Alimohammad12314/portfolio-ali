# Mohammad Ali — Personal Academic Homepage

A modern, glass-morphism academic portfolio site. Zero build step, zero dependencies —
just two files.

## Files
- `index.html` — the whole page (HTML + CSS + JS in one file). Uses Google Fonts and Lucide icons via CDN.
- `content.js` — every piece of text/data on the site. **This is the file you edit.**
- `cv.pdf` — (optional) drop your CV here to enable the "Download CV" button and top-nav CV link.

## Preview locally
Just double-click `index.html` — it opens in your browser. That's it.

If your browser blocks the local `content.js` load (rare, but happens on some
Safari setups), start a tiny local server instead:

```bash
cd this-folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Edit your content
Open `content.js` in any editor (VS Code, Notepad, TextEdit) and change the values.
Every section — profile, publications, education, projects, leadership, skills —
is a plain JavaScript object. Save the file, refresh your browser, done.

Tips:
- Photo: set `profile.photo` to a URL or a filename like `./me.jpg` (put the image next to `index.html`).
- CV button: rename your CV to `cv.pdf` and place it next to `index.html`, or change `cvUrl` in `content.js` to any URL.
- Icons: any [Lucide icon name](https://lucide.dev/icons) works for `contacts[].icon` and `research.items[].icon`.
- Advisor / links: update `profile.advisorLine` and each `contacts[].href`.
- Dark/light theme toggles automatically via the moon/sun icon in the top-right nav.

## Publish on GitHub Pages
1. Create a public repo named `yourusername.github.io` (or any repo — you'll get `username.github.io/repo`).
2. Put `index.html`, `content.js`, and `cv.pdf` at the root of the repo.
3. Commit and push.
4. In the repo → Settings → Pages → Source: `main` branch, `/root` — save.
5. Your site is live at `https://yourusername.github.io/` in ~1 minute.

## Design
- Fonts: Cormorant Garamond (serif) + Inter (sans) + JetBrains Mono
- Palette: sky blue accent on a soft pale-blue background, glass cards with backdrop blur
- Fully responsive: sidebar sticks on desktop, stacks under a slide-in drawer on mobile
- Prefers-reduced-motion friendly

---

Made with care · edit freely.
