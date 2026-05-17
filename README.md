# Tiago Meneguim — Professional Website

> Professional presence for mentorship, architecture, cloud, FinOps, automation and applied AI.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Deploy-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

## Preview

![Website preview](./public/preview.png)

## Overview

This repository contains the professional website of **Tiago Meneguim**.

The site supports professional positioning, technical authority, mentorship and project-based consulting around solution architecture, cloud, AWS, FinOps, automation and applied AI.

The content avoids exposing confidential client names, internal project details or proprietary implementation strategies.

## Tech Stack

- **React** for the interface layer
- **TypeScript** for type safety
- **Vite** for local development and production builds
- **CSS** for a lightweight custom design system
- **Cloudflare Pages** for deployment and edge delivery

## Project Structure

```txt
.
├── public/
│   ├── _redirects
│   ├── preview.png
│   └── tiago-meneguim.jpg
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Content.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Mentorship.tsx
│   │   ├── Projects.tsx
│   │   └── Services.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Frontend Architecture

The frontend is organized around reusable components and independent content sections.

- `components/` contains shared UI primitives.
- `sections/` contains business-facing page blocks.
- `App.tsx` defines page composition and language routing.
- `styles.css` centralizes layout, visual language and responsive behavior.

The site currently supports Portuguese and English through a lightweight route-based language switch.

## Responsiveness

The layout is optimized for mobile, tablet and desktop viewports using responsive grids, fluid typography and mobile-first stacking for content-heavy sections.

## SEO And Social Preview

The site includes SEO and social preview metadata in `index.html`:

- Document title
- Meta description
- Open Graph metadata
- Twitter Card metadata
- Canonical URL
- `hreflang` alternates for Portuguese and English

The social preview image is located at:

```txt
public/preview.png
```

In production, it is served as:

```txt
https://tiagomeneguim.com.br/preview.png
```

Recommended size:

```txt
1200x630px
```

## Running Locally

```bash
npm install
npm run dev
```

Local development URL:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
```

The production build is generated in:

```txt
dist
```

## Deployment

The project is deployed with Cloudflare Pages.

Recommended settings:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

The `_redirects` file supports client-side routing for paths such as `/en`.

## Performance

The site is intentionally lightweight:

- Static frontend
- Minimal runtime dependencies
- Optimized Vite build
- Cloudflare edge delivery
- Small visual asset set

Recommended validation tools:

- Lighthouse
- PageSpeed Insights
- LinkedIn Post Inspector

## Roadmap

- Add dedicated mentorship landing page
- Add dedicated consulting/project-based work page
- Add structured data with JSON-LD
- Add testimonials or LinkedIn recommendations
- Add privacy-conscious analytics
- Expand English content as international positioning evolves

## Links

- Website: https://tiagomeneguim.com.br
- English version: https://tiagomeneguim.com.br/en
- LinkedIn: https://www.linkedin.com/in/tiago-meneguim/

## Confidentiality Note

Some professional experiences and projects may be subject to confidentiality agreements. The website intentionally presents experience areas, technologies and outcomes without exposing client names, sensitive data or proprietary details.

---

Built with React, TypeScript and Vite to support a clear, fast and professional web presence.
