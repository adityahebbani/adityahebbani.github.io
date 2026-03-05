# Void - Minimalist Portfolio Template

A clean, minimalist portfolio template built with Astro and TailwindCSS.

![Hero](.github/571_1x_shots_so.png)

## ✨ Features

- **⚡ Astro 5** - Fast, modern static site generation
- **🎨 TailwindCSS 4** - Utility-first styling with dark mode
- **📱 Responsive Design** - Mobile-first approach
- **🔍 SEO Optimized** - Sitemap, meta tags
- **🚀 Zero JS by Default** - Minimal JavaScript for optimal performance
- **📝 TypeScript** - Full type safety throughout

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/JorgeRosbel/void.git
cd void

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Your site will be available at `http://localhost:4321`.

### Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🧾 Content

Edit your information in `src/content/site.json`.

## 📁 Project Structure

```
void/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # Astro components
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   └── ...
│   ├── content/         # Site copy/data
│   │   └── site.json
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   │   └── index.astro
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Personal Information

Edit `src/content/site.json` to update:
- Personal name and title
- Project descriptions
- Experience details
- Contact information

### Styling

The template uses TailwindCSS with a dark theme. Customize colors and styles in:
- Global CSS classes in components
- Tailwind configuration (if needed)

### Adding New Sections

1. Create new components in `/src/components/`
2. Add translation keys to all i18n files
3. Import and use components in `/src/pages/[lang]/index.astro`

## 🔧 Configuration

### Site Configuration

Update `astro.config.mjs` to change:
- Site URL (`site` property)
- Add/remove integrations

### Package Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes i18n validation)
- `pnpm preview` - Preview production build

## 🌍 Deployment

This template works great with:

- **Vercel** - Zero-config deployment
- **Netlify** - Simple static site hosting
- **GitHub Pages** - Free static hosting
- **Cloudflare Pages** - Global CDN


## 📝 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [@ariaskit/astro-i18n Documentation](https://github.com/JorgeRosbel/astro-i18n)

---

**Built with ❤️ using Astro and TailwindCSS**