# Portfolio

A modern, performant portfolio site built with Next.js 16, TypeScript, and Tailwind CSS v4.

**[View Live Site →](https://nzkbuild.vercel.app)** *(Update with your actual deployment URL)*

![Portfolio Preview](./public/preview.png) *(Add screenshot after deployment)*

## Overview

This is the repository for my personal portfolio website. The site showcases my projects, background, and technical journey. Built as a single-page application with smooth scrolling navigation and a dark theme optimized for readability.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Key Features

- **Client-side interactivity** with React hooks for navigation and scroll effects
- **Responsive design** optimized for mobile, tablet, and desktop
- **Dark theme** with custom color palette using Tailwind's slate and indigo scales
- **Smooth scroll navigation** with active state tracking
- **Mobile-first approach** with hamburger menu for small screens
- **Type-safe** development with TypeScript
- **Fast builds** using Next.js Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Tailwind CSS imports and global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page (client component)
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── postcss.config.js    # PostCSS configuration for Tailwind v4
```

## Technical Decisions

### Why Next.js App Router?
Using the App Router for its improved performance with React Server Components and simplified data fetching patterns. The portfolio is primarily client-side for interactivity, but the architecture allows for easy expansion with server components if needed.

### Why Tailwind CSS v4?
Tailwind v4 offers improved performance and a cleaner configuration. Using the new `@import "tailwindcss"` syntax with the `@tailwindcss/postcss` plugin for better integration with Next.js.

### Component Architecture
The portfolio uses a single-page component structure with inline component definitions for simplicity. Data is separated into constant objects at the top of the file for easy content updates.

## Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Deploy with default Next.js settings

The site will automatically deploy on every push to the main branch.

## Performance

- **First Contentful Paint**: Optimized with Next.js static generation
- **Lighthouse Score**: Targeting 90+ across all metrics
- **Bundle Size**: Minimal dependencies, only essential libraries included

## Development Notes

- The main portfolio component uses `"use client"` directive for React hooks (useState, useEffect)
- Smooth scroll behavior is implemented with native browser APIs
- Mobile menu uses conditional rendering based on state
- All external links include `rel="noreferrer"` for security

## Contact

For questions about the code or implementation:

- **GitHub**: [@nzkbuild](https://github.com/nzkbuild)
- **Email**: nbzkri@gmail.com

## License

MIT License - feel free to use this code for your own portfolio.

