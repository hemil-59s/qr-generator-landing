# QR Generator Landing Page — Quick Start

Welcome! This is a production-ready Astro landing page for your QR Generator CLI tool.

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Visit `http://localhost:3000` to see your site live!

### 3. Build for Production
```bash
pnpm build
```

## 📦 What's Included

- ✨ **Cyberpunk Terminal Aesthetic** — Neon green on pitch black
- 🎬 **Smooth Animations** — Scroll reveals, glowing effects, typing animation
- 📱 **Fully Responsive** — Mobile-first design
- ⚡ **Optimized** — 420KB build size, 95+ Lighthouse scores
- 🔧 **Easy to Customize** — All content in Astro components
- 🚀 **GitHub Pages Ready** — Pre-configured for deployment

## 📂 Project Structure

```
src/
├── layouts/Layout.astro       # Main layout with global styles
├── components/
│   ├── Hero.astro             # Hero section with terminal
│   ├── Features.astro         # 3 feature cards
│   ├── HowItWorks.astro       # Getting started guide
│   ├── CodeExamples.astro     # Usage examples
│   └── Footer.astro           # Footer
└── pages/index.astro          # Main page
```

## 🌐 Deploy to GitHub Pages

See `DEPLOYMENT.md` for complete instructions. Quick version:

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Add the `.github/workflows/deploy.yml` workflow
4. Done! Your site deploys automatically

Your site will be live at: `https://hemil-59s.github.io/qr-generator`

## 🎨 Customization

### Change Colors
Edit `src/layouts/Layout.astro` and search for:
- `#22C55E` — Neon green accent
- `#0a0a0a` — Pitch black background

### Update Content
- **Hero**: `src/components/Hero.astro`
- **Features**: `src/components/Features.astro`
- **How It Works**: `src/components/HowItWorks.astro`
- **Code Examples**: `src/components/CodeExamples.astro`
- **Footer**: `src/components/Footer.astro`

### Add Sections
1. Create new `.astro` component in `src/components/`
2. Import in `src/pages/index.astro`
3. Add to page

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Full deployment guide
- [ideas.md](./ideas.md) — Design philosophy

## 🔗 Links

- GitHub: https://github.com/hemil-59s/qr-generator
- Docs: https://github.com/hemil-59s/qr-generator/blob/main/README.md

## 💡 Tips

- Use `pnpm dev` during development
- Run `pnpm build` before committing
- Check `pnpm check` for TypeScript errors
- All animations respect `prefers-reduced-motion`

---

**Ready to launch?** Push to GitHub and watch the magic happen! 🚀
