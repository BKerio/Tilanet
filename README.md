# TILA-NET ENTERPRISE LIMITED — Premium Corporate Platform

[![React](https://img.shields.io/badge/React-19.2-blue.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF.svg?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Crafting Solutions. Engineering Success.**  
> A premium, fully-responsive corporate portal designed for **Dynatrix Consulting Ltd**, a leading IT Consulting & Digital Transformation partner across Africa. Built with high-end modern aesthetics, smooth performance-tuned animations, interactive charts, and a robust component architecture.

---

## 🌟 Key Features

*   **Premium Visual Aesthetics**: An eye-catching "Luxury Gold & Deep Charcoal" brand identity featuring sleek typography, harmonious dark mode-influenced panels, smooth gradients, and glassmorphic micro-interactions.
*   **Fully Dynamic Component System**: 40+ modular UI components built using **Tailwind CSS** and **shadcn UI** baselines, styled with extreme precision.
*   **Advanced Animations & Interactions**: Powered by **GSAP (ScrollTrigger)** and **Framer Motion** for state-of-the-art entry effects, hover animations, scroll-bound transitions, and smooth client counters.
*   **Interactive Industry Analytics**: Elegant data visualization powered by **Recharts**, including an interactive pie chart showcasing industry market shares.
*   **Complete Multi-Page Router**: Seamless navigation with robust route management (`react-router-dom`), including instant-scroll behavior upon navigation.
*   **Content-Rich Resource Center**: Pre-loaded blog, detailed service portfolio, and agile methodologies built dynamically with static datasets.
*   **Accessible Primitives**: Leverages `@radix-ui` primitives to ensure high keyboard accessibility and screen-reader compatibility.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Type-safe declarative UI building with performance enhancements. |
| **Build System** | [Vite 7](https://vite.dev/) | Ultra-fast HMR and optimized production bundle execution. |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first responsive layout styling and dark-theme configurations. |
| **Primitives** | [Radix UI](https://www.radix-ui.com/) | Accessible, unstyled UI primitives forming shadcn base components. |
| **Animations** | [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/) | Cinematic entrance triggers and fluid interactive elements. |
| **Data Viz** | [Recharts](https://recharts.org/) | Responsive SVG charts for dynamic corporate market representation. |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent, and customizable modern vector iconography. |

---

## 📂 Project Directory Structure

```filepath
app/
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── assets/             # Global media files and graphics
│   ├── components/         # Reusable UI widgets and layout modules
│   │   ├── ui/             # Accessible shadcn-derived base components
│   │   ├── Navbar.tsx      # Main responsive navigation drawer & menus
│   │   ├── Footer.tsx      # High-density corporate footer
│   │   └── Layout.tsx      # Global shell wrapping Router views
│   ├── data/               # Static site content and mock databases
│   │   ├── index.ts        # Comprehensive consulting info database
│   │   └── siteData.ts     # Configuration, links, and services list
│   ├── hooks/              # Custom application-specific hooks
│   ├── pages/              # Routed view assemblies (Home, About, Services, etc.)
│   ├── sections/           # Modular page-specific landing blocks
│   ├── types/              # Domain-specific TypeScript declarations
│   ├── App.css             # Page/App-specific styles override
│   ├── App.tsx             # Root router outlet component
│   ├── index.css           # Global typography & design system tokens
│   └── main.tsx            # Application bundle entrypoint
├── index.html              # HTML core shell & Lexend typography load
├── tailwind.config.js      # Custom theme palettes, border radiuses, & animations
└── tsconfig.json           # Comprehensive compiler settings
```

---

## 🎨 Design System & Color Tokens

The visual signature of the website is built upon a curated dark-premium color palette declared inside `src/index.css` and `tailwind.config.js`:

```css
:root {
  --background: 43 24% 96%;        /* Warm Alabaster White */
  --foreground: 220 6% 10%;        /* Deep Slate Charcoal */
  --primary: 42 99% 62%;           /* Warm Luxury Gold (#FEC63F) */
  --secondary: 220 6% 10%;         /* Classic Matte Charcoal (#18191C) */
  --border: 220 8% 88%;            /* Muted Grey Border */
  --radius: 0rem;                  /* Industrial Sharp Edge Profile */
}
```

### Premium Visual Typography
*   **Primary Font**: `Lexend` — Highly readable, modern geometric sans-serif loaded via Google Fonts.
*   **Spacing Hierarchy**: Strict vertical spacing matching the custom utility classes (`section-padding`, `container-custom`).
*   **Custom Class Design**:
    *   `.btn-theme`: A rich button class featuring absolute slide-in overlays that shift background colors on hover.
    *   `.service-block`: Dynamic card container with shadow elevations (`shadow-[0_10px_60px_rgba(0,0,0,0.08)]`) and golden-accented border-top transitions.
    *   `.link-hover-line`: Elegant inline text hover lines which slide outward from the center.

---

## 🚦 Getting Started

### 📋 Prerequisites
Ensure you have the following installed on your local environment:
*   [Node.js](https://nodejs.org/) (Version `20.x` or later recommended)
*   [npm](https://www.npmjs.com/) (bundled with Node) or [Yarn](https://yarnpkg.com/)

### 🚀 Local Development Setup

Follow these steps to run the platform locally:

1.  **Clone and Navigate to Workspace**
    ```bash
    cd c:/Users/brian/PROJECTS/app
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Launch Dev Server**
    ```bash
    npm run dev
    ```
    Once started, the server terminal output will display the local port (usually `http://localhost:5173`). Open this link in your browser to interact with the website.

4.  **Linter Verification**
    Validate code quality and coding standard compliance:
    ```bash
    npm run lint
    ```

5.  **Compile & Production Build**
    Prepare the project bundle optimized for static deployment:
    ```bash
    npm run build
    ```
    The production-ready assets will be compiled into the `dist/` directory.

---

## 📊 Modules & Routed Page Details

The website compiles several highly detailed page templates matching realistic corporate requirements:

1.  **Home Page (`/`)**: 
    An immersive landing layout. Instantly grabs attention through a bold Hero section, followed by a sliding welcome matrix, strategic service showcase, dynamic stats odometer, a carousel of tier-1 technology partners, testimonial review modules, and custom CTA prompts.
2.  **About Us (`/about`)**: 
    Deep corporate insight presenting the mission, vision, and five core company values (Integrity, Customer Centricity, Innovation, Excellence, Collaboration). Leverages GSAP scroll-hooks to animate grids smoothly.
3.  **Services (`/services`)**: 
    Detailed descriptions of Dynatrix's 6 core service columns (IT Consulting, Digital Transformation, Cloud Migrations, Cybersecurity, Systems Integration, Software Engineering) alongside ancillary delivery systems (System Audits, HR Payroll outsourcing).
4.  **Solutions (`/solutions`)**: 
    Highlights comprehensive tech ecosystems including Dynamics 365, ODOO ERP, Sage, and deep network firewalls (Fortinet, Cisco, Check Point).
5.  **Industries (`/industries`)**: 
    Contains the **Interactive Recharts Industry Distribution**, analyzing the exact sector market shares that Dynatrix services across Africa (e.g. Manufacturing 10%, Financials 9%, Retail 8%, etc.).
6.  **Agile Process (`/process`)**: 
    Visualizes the specialized 5D delivery model: **Discovery** ➜ **Design** ➜ **Deliver** ➜ **Debrief** ➜ **Develop** inside a highly structured step grid.
7.  **Clients (`/clients`)**: 
    Comprehensive register of elite partners (AAR Hospital, Bolba SACCO, Steel & Tube, etc.) showing real retention records.
8.  **Knowledge Center (`/blog`)**: 
    A fully responsive, categorized listing of insightful technical articles addressing modern digital transformation trends in the African landscape.
9.  **Contact Us (`/contact`)**: 
    Equipped with a secure functional client intake form, detailed office locations (Kiambere Road, Upperhill, Nairobi), operational schedule indicators, and active telephone link pathways.

---

## ⚡ Deployment & Optimization

### Production Performance Highlights
*   **Fast Loading Headers**: Critical styles loaded via custom Tailwind directives in the main HTML header.
*   **Vite Code Splitting**: Route components are dynamically split during the bundling process to minimize initial page load payload size.
*   **Responsive Vector Assets**: Lucide icons are bundled dynamically to prevent CSS blocking or rendering delays.
*   **Pure Native CSS Scroll & Inertial Animations**: Utilizing custom animations configured directly into the Tailwind processing layers.

---

## 📄 License & Attribution

This project is a private system designed for the exclusive branding profile of **Dynatrix Consulting Ltd**. All custom intellectual data, asset structures, and graphic styling sheets belong strictly to their respective owners.

*Developed with pride to engineer success across the African digital ecosystem.* 🌍🚀
