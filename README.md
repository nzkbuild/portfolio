# nzkbuild

<div align="center">

**Builder from HR and operations into automation and web development**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000-style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6-style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4-style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E-style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000-style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## Overview

Repository for my personal portfolio website. It showcases projects, technical background, and the journey from HR operations into automation and web development. Built as a single-page app with smooth scrolling and a dark, glassy theme.

**[View Live Portfolio](https://nzkbuild.vercel.app)**

---

## Tech Stack

- Framework: Next.js 16 (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS v4 plus custom CSS utilities in `app/globals.css`
- Icons: Lucide React
- Deployment: Vercel

## Features

- Smooth scroll navigation with active state tracking
- Responsive layout for mobile/tablet/desktop
- Dark theme with custom glass utilities (buttons, cards, pills)
- Mobile hamburger menu and section anchors
- Type-safe React components

## Projects Featured

- KIOS - internal operations system (Next.js, Supabase, Tailwind, Vercel) - Active development
- SNRX - automated trading system (MQL4/5, VPS/RDP) - Completed
- Trading Automation Lab - API/bot experiments (Python, REST, Luno, Telegram) - Experimental
- SNRX Lite - static landing page + custom domain (HTML/CSS, GitHub Pages)

## Project Structure

```
portfolio/
|- app/                 # Pages and components
|  |- globals.css       # Tailwind v4 import + design tokens/utilities
|  |- layout.tsx        # Root layout and metadata
|  `- page.tsx          # Main portfolio page
|- public/              # Static assets served at /
|  `- ref/              # Project screenshots
|- tailwind.config.ts   # Minimal Tailwind v4 config
|- postcss.config.js    # @tailwindcss/postcss pipeline
|- tsconfig.json        # TypeScript configuration
|- package.json         # Scripts and dependencies
`- README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/nzkbuild/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev      # Start dev server (Turbopack)
npm run lint     # Run Next.js lint
npm run build    # Production build
npm run start    # Start production server
```

Tailwind v4 is configured via `@import "tailwindcss";` in `app/globals.css` and the `@tailwindcss/postcss` plugin. Custom glass/button/pill utilities live directly in `globals.css`.

### Assets

- Project screenshots live in `public/ref/`.
- Portfolio preview images: `public/preview.png`, `public/mobile-preview.png`.

## Deployment

Optimized for Vercel. Connect the repo in Vercel and deploy with default Next.js settings; pushes to `main` auto-redeploy.

## Contact

- Email: nbzkri@gmail.com  
- GitHub: [@nzkbuild](https://github.com/nzkbuild)  
- LinkedIn: [linkedin.com/in/nbzkri](https://www.linkedin.com/in/nbzkri/)

## License

MIT - use this as a starter for your own portfolio.

---

<div align="center">

Built with Next.js, TypeScript, and Tailwind CSS

</div>
