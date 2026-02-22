<div align="center">
  <img alt="Logo" src="src/images/logo.png" width="100" />
</div>

<h1 align="center">
  Naga Vinay Avvaru — Portfolio v1
</h1>

<p align="center">
  Personal portfolio website built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, based on the design of <a href="https://brittanychiang.com" target="_blank">Brittany Chiang's v4</a>. Showcasing my work in AI/ML, Computer Vision, and Agentic AI systems.
</p>

<p align="center">
  <a href="https://github.com/Vinay0905" target="_blank">GitHub</a> ·
  <a href="https://www.linkedin.com/in/naga-vinay-0905nva1915/" target="_blank">LinkedIn</a>
</p>

---

## ⭐ Attribution

This portfolio is built on top of [Brittany Chiang's v4](https://github.com/bchiang7/v4) design.  
Please give her credit if you fork or use this design — she did the heavy lifting on the UI and structure.

---

## 🛠 Installation & Set Up

> **Node.js Note:** This project uses Gatsby v3. It works best with Node v14–18.  
> If you're on Node v19+, use the `--openssl-legacy-provider` flag (already wired into the start script).

1. Install dependencies

   ```sh
   npm install --legacy-peer-deps
   ```

2. Start the development server

   ```sh
   NODE_OPTIONS=--openssl-legacy-provider npm start
   ```

   The site will be live at **http://localhost:8000**

## 🚀 Building for Production

1. Generate a full static production build

   ```sh
   NODE_OPTIONS=--openssl-legacy-provider npm run build
   ```

2. Preview the production build locally

   ```sh
   npm run serve
   ```

## ☁️ Deploying

### Netlify (Recommended)
1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → New site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `public`
5. Add environment variable: `NODE_OPTIONS` = `--openssl-legacy-provider`

### GitHub Pages
1. Uncomment `/public` in `.gitignore` (or commit the built `/public` folder)
2. Run `npm run build` locally
3. Push the `/public` folder contents to the `gh-pages` branch

---

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
