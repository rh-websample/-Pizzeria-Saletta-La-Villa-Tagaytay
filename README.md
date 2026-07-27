# Pizzeria Saletta — La Villa Tagaytay

A cozy, single-page website for **Pizzeria Saletta La Villa Tagaytay**, a wood-fired Italian pizzeria and pasta house on the Tagaytay ridge. Built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies to install.

🔗 Facebook: https://www.facebook.com/PizzeriaSalettaLaVilla/

## What's inside

```
saletta-site/
├── index.html          # all page content
├── css/
│   └── style.css       # design system + layout + animation
├── js/
│   └── script.js       # nav toggle, scroll reveal, string-light bulbs
├── assets/
│   └── images/         # optimized photos used across the site
└── README.md
```

## Preview it locally

No build tools needed. Either:

- Double-click `index.html` to open it in your browser, **or**
- Serve it locally so relative paths behave exactly like production:
  ```bash
  cd saletta-site
  python3 -m http.server 8080
  # then open http://localhost:8080
  ```

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `saletta-la-villa`).
2. Push this folder's contents to the `main` branch:
   ```bash
   cd saletta-site
   git init
   git add .
   git commit -m "Launch Pizzeria Saletta site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick **Branch: main**, folder **/ (root)**, then **Save**.
6. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## Editing content

Everything lives in `index.html` — menu items, review quotes, hours/contact copy, and section text are all plain HTML, so you can edit them directly without touching the CSS or JS. Colors, fonts, and spacing are defined once as CSS custom properties at the top of `css/style.css` under `:root`, so retheming the whole site means changing a handful of values in one place.

## Notes

- Fonts (Fraunces, Karla, Caveat) load from Google Fonts via CDN — an internet connection is needed the first time a visitor's browser fetches them.
- Images are pre-optimized JPEGs already sized for the web; swap in new photos at similar dimensions to keep load times quick.
- The site has no backend — the "Reserve a Table" and "Visit" call-to-actions link straight to the restaurant's Facebook page for messaging and reservations.
