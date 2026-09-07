# Frontend Intern Assessment — Training and Development Page

A pixel-fidelity, fully responsive implementation of the provided Figma design ("Training and Development" page for Tobams Group), built as a static Next.js page per the Frontend Intern Assessment brief.

**Figma reference:** [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

**Live URL:** [https://training-development-page.vercel.app/](https://training-development-page.vercel.app/)

## Tech Stack

- **Framework:** Next.js (App Router, latest version)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (latest version) — no other CSS frameworks used
- **UI Components:** shadcn/ui (built on top of Tailwind, not a separate CSS framework)
- **Icons:** lucide-react, react-icons
- **Deployment:** Vercel

This is a **static page** — no database, backend, or dynamic data fetching is used, per the scope of the assessment.

## Setup Instructions

### 1. Clone the repository

\```bash
git clone <your-repo-url>
cd training-development-page
\```

### 2. Install dependencies

\```bash
npm install
\```

### 3. Run the development server

\```bash
npm run dev
\```
Open [http://localhost:3000](http://localhost:3000) to view it locally.

### 4. Build for production

\```bash
npm run build
npm start
\```

## Deployment

This project is deployed on **Vercel**:

1. Repo pushed to a public GitHub repository.
2. Repo imported directly into Vercel.
3. Deployed with default Next.js build settings — no environment variables required.

## Responsiveness

The page was tested and verified at the three required breakpoints:

- **425px (mobile)**
- **768px (tablet)**
- **1280px+ (desktop)**

All responsive behavior uses Tailwind's built-in breakpoint prefixes (`sm:`, `md:`, `lg:`). No custom media queries were written.

## Design Decisions & Technical Assumptions

- **Tablet (`md`) breakpoint:** The Figma file provided only two design frames — a desktop frame (~1440px) and a mobile frame (~560px/425px). No dedicated tablet frame was included. To avoid inventing an unverified layout at 768px, the mobile layout is carried through the `sm` and `md` breakpoints, with the desktop layout only activating at `lg` (1024px+). This keeps every breakpoint visually faithful to an actual design frame that was provided, rather than guessing an intermediate layout. At exactly 768px, the page therefore renders the mobile-style stacked layout, scaled up slightly by Tailwind's responsive text/spacing utilities.
- **Max content width:** Each section is constrained with Tailwind's `max-w-[...]` utilities (matching each Figma frame's measured width) and centered with `mx-auto`, rather than stretching full-bleed on ultra-wide monitors — matching the Figma frame proportions regardless of actual viewport width.
- **Component library:** shadcn/ui is used for buttons, cards, inputs, and labels. This is a Tailwind-based, unstyled/headless component set (not a separate CSS framework like Bootstrap or Material UI), so it doesn't conflict with the "Tailwind only" requirement — all visual styling still comes from Tailwind utility classes.
- **Icons:** `lucide-react` is used for general UI icons (chevrons, menu, user, mail, phone, bullet markers). `react-icons` (Font Awesome 6 set) is used specifically for footer social icons, since lucide-react has deprecated/removed several brand icons (LinkedIn, Instagram, X/Twitter).
- **Images:** All images are served via Next.js's `<Image>` component from the `public` directory, referenced with root-relative paths (e.g. `/hero-image/hero-banner.jpg`).
- **Component structure:** The page is broken into one component per logical section (Navbar, Hero, LearningManagement, CooperateTraining, ManagementDevelopment, TransformationHub, TrainingTheConsultant, CtaBanner, Testimonials, Footer), each in its own file under `/components`. `page.tsx` only composes these components — it contains no section-level markup itself.
- **Semantic HTML:** `<nav>` wraps site navigation, `<main>` wraps the primary page content, each content block is wrapped in a `<section>`, and `<footer>` wraps the site footer, per the accessibility requirement.
- **Testimonials carousel:** Built as a lightweight custom carousel using `useState` and array-index wrapping, rather than a third-party carousel library, to keep the implementation simple and dependency-light for a straightforward slide-through interaction.

## Project Structure (partial)

\```
app/
favicon.ico
globals.css
layout.tsx
page.tsx
components/
ui/ # shadcn/ui components
hero.tsx
learning-management.tsx
corporate-training.tsx
management-development.tsx
transformation-hub.tsx
training-the-consultant.tsx
consultation.tsx # CTA banner ("Let's work together...")
testimonial.tsx
navbar.tsx
navlinks.tsx
mobile-menu.tsx
footer.tsx
\```
