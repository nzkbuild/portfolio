# nzkbuild

<div align="center">

![Portfolio Banner](./public/portfolio-banner.svg)

**Builder from HR and operations into automation and web development**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## Overview

This is the repository for my personal portfolio website. It showcases my projects, technical background, and journey from HR operations into automation and web development. Built as a single-page application with smooth scrolling navigation and a dark theme.

**[View Live Portfolio →](https://nzkbuild.vercel.app)**

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Build Tool**: Turbopack

## Features

- Client-side interactivity with React hooks for navigation and scroll effects
- Responsive design optimized for mobile, tablet, and desktop viewports
- Dark theme with custom color palette using Tailwind's slate and indigo scales
- Smooth scroll navigation with active state tracking
- Mobile-first approach with hamburger menu for small screens
- Type-safe development with TypeScript
- Fast builds using Next.js Turbopack
- Optimized for performance with minimal dependencies

## Projects Featured

### KIOS (Internal Operations System)

Internal tool built to organize staff roles, appointments, and outreach activities for a public-sector organisation. Replaced scattered spreadsheets with a centralized system.

- Custom PIN login for staff authentication
- Role-based views for management and frontline teams
- Centralized tables for daily operations tracking
- Built through continuous feedback from actual users
- **Tech**: Next.js, Supabase, TypeScript, Tailwind CSS, Vercel
- **Status**: Active development

### Support and Resistance X (SNRX)

Automated trading system built in MQL4 and MQL5. My entry point into coding. Goal was to remove emotion from beginner trading decisions with rule-based execution.

- Deployed on VPS and RDP environments
- Executes predefined trading logic on MT4 and MT5 platforms
- Backtested and forward tested for reliability
- Taught discipline, pattern recognition, and clean logic
- **Tech**: MQL4, MQL5, MetaTrader, VPS/RDP
- **Status**: Completed

### Trading Automation Lab

Experimental sandbox for learning system integration and API communication. Hands-on projects to understand data flow, timing, and cross-platform execution.

- Grid trading prototype for Luno Malaysia exchange
- Telegram bot for sending trade alerts and signals
- Python to MT4/MT5 execution bridge
- Focus on API integration and real-time data handling
- **Tech**: Python, REST APIs, Luno API, Telegram Bot API
- **Status**: Experimental

### SNRX Lite

Minimal landing page experiment to learn custom domain setup, DNS configuration, and static site hosting.

- Basic HTML/CSS layout with responsive design
- Custom domain configuration and DNS management
- Deployed on GitHub Pages
- **Tech**: HTML/CSS, GitHub Pages

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind CSS imports and global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page (client component)
├── public/                  # Static assets and images
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS v4 configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS config for @tailwindcss/postcss
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nzkbuild/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site locally.

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your changes to GitHub
2. Import the repository in Vercel
3. Deploy with default Next.js settings

The site will automatically redeploy on every push to the main branch.

### Environment Variables

No environment variables are required for the portfolio site itself. If you fork this project and add features that require API keys or secrets, create a `.env.local` file and add them there.

## Technical Details

### Why Next.js App Router?

Using the App Router for improved performance with React Server Components and simplified routing. The portfolio is primarily client-side for interactivity, but the architecture allows for easy expansion with server components.

### Why Tailwind CSS v4?

Tailwind v4 offers improved performance and a cleaner configuration. Using the new `@import "tailwindcss"` syntax with the `@tailwindcss/postcss` plugin for better integration with Next.js.

### Component Architecture

The portfolio uses a single-page component structure with inline component definitions for simplicity. Data is separated into constant objects at the top of the file for easy content updates without touching the UI logic.

### Client Component Usage

The main portfolio component uses the `"use client"` directive to enable React hooks (useState, useEffect) for scroll tracking and mobile menu state management.

## Screenshots

![Portfolio Preview](./public/preview.png)

*Screenshot showing the hero section and project cards*

![Mobile View](./public/mobile-preview.png)

*Responsive mobile layout with hamburger menu*

## Performance

- First Contentful Paint optimized with Next.js static generation
- Minimal JavaScript bundle with only essential dependencies
- Lazy loading for images and components where applicable
- Lighthouse score targeting 90+ across all metrics

## Contact

- **Email**: nbzkri@gmail.com
- **GitHub**: [@nzkbuild](https://github.com/nzkbuild)
- **LinkedIn**: [linkedin.com/in/nbzkri](https://www.linkedin.com/in/nbzkri/)

## License

MIT License - feel free to use this code for your own portfolio.

---

<div align="center">

Built with Next.js, TypeScript, and Tailwind CSS

</div>
