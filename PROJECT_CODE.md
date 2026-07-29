# Project Code Documentation

Generated for `my-next-website`. This document includes the project source, configuration, markdown files, and text-based public assets. Generated/vendor files such as `.next/`, `node_modules/`, `package-lock.json`, and binary assets such as `app/favicon.ico` are intentionally omitted.

## Project Overview

- Framework: Next.js 16.2.10
- React: 19.2.4
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`
- Animation: Framer Motion
- Main app route: `app/page.tsx`

## File Tree

```text
AGENTS.md
CLAUDE.md
README.md
package.json
next.config.ts
eslint.config.mjs
postcss.config.mjs
tsconfig.json
app/layout.tsx
app/page.tsx
app/loading.tsx
app/not-found.tsx
app/globals.css
components/Background.tsx
components/CursorGlow.tsx
components/Fadein.tsx
components/Footer.tsx
components/MagneticButton.tsx
components/Navbar.tsx
components/NoiseOverlay.tsx
components/ScrollButtons.tsx
components/ScrollProgress.tsx
components/Section.tsx
components/Services.tsx
components/TextReveal.tsx
components/TypewriterText.tsx
components/useTypewriter.ts
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

## Source Files

### `AGENTS.md`

``````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes â€” APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
``````

### `CLAUDE.md`

``````markdown
@AGENTS.md
``````

### `README.md`

``````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
``````

### `package.json`

``````json
{
  "name": "my-next-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --hostname 0.0.0.0",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.42.2",
    "lucide-react": "^0.528.0",
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^1.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
``````

### `next.config.ts`

``````ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.148.5.64"],
};

export default nextConfig;
``````

### `eslint.config.mjs`

``````js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
``````

### `postcss.config.mjs`

``````js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
``````

### `tsconfig.json`

``````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
``````

### `app/layout.tsx`

``````tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NoiseOverlay from "../components/NoiseOverlay";
import ScrollProgress from "../components/ScrollProgress";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hamza Khan | Full-Stack Developer",
    template: "%s | Hamza Khan",
  },
  description:
    "Portfolio of Hamza Khan, a full-stack developer building modern, interactive, and high-performance web applications.",
  keywords: [
    "Hamza Khan",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hamza Khan" }],
  creator: "Hamza Khan",

  openGraph: {
    title: "Hamza Khan | Full-Stack Developer",
    description:
      "Modern web applications, interactive interfaces, and scalable development.",
    url: "https://your-domain.com",
    siteName: "Hamza Khan Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Full-Stack Developer",
    description:
      "Modern web applications, interactive interfaces, and scalable development.",
  },

  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <NoiseOverlay />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
``````

### `app/page.tsx`

``````tsx
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Section from "../components/Section";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import FadeIn from "../components/Fadein";
import Services from "../components/Services";
import TextReveal from "../components/TextReveal";
import MagneticButton from "../components/MagneticButton";
import TypewriterText from "../components/TypewriterText";
import ScrollButtons from "../components/ScrollButtons";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <CursorGlow />
      <main className="relative z-10 min-h-screen bg-transparent text-white pt-24">
        <ScrollButtons />
        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mx-auto max-w-6xl px-6 py-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance projects
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                <TypewriterText
                  words={["Full-Stack Developer & UI/UX Designer"]}
                  className="font-semibold uppercase tracking-[0.35em] text-zinc-500"
                />
              </p>
              <h1 className="mt-4 text-5xl font-black leading-[1.1] md:text-7xl lg:text-8xl">
                <TextReveal text="Building modern\ndigital experiences" />
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                I&apos;m <span className="font-semibold text-white">Hamza Khan</span>.
                I design and build fast, interactive, and visually polished web
                applications with clean architecture, responsive design, and
                exceptional user experience.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#projects" className="bg-white text-black">
                View Projects
              </MagneticButton>
              <MagneticButton href="#contact" className="bg-indigo-400 text-slate-950">
                Hire Me
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-16 grid gap-6 border-t border-zinc-800 pt-10 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold">Full-Stack</p>
                <p className="mt-2 text-sm text-zinc-400">
                  React Â· Next.js Â· Node.js Â· PostgreSQL
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">UI/UX</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Modern design systems Â· Prototyping Â· Figma
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">Performance</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Core Web Vitals Â· SEO Â· Accessibility
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center gap-3 text-sm text-zinc-400">
              <div className="h-12 w-12 rounded-3xl border border-zinc-700 bg-white/5 grid place-items-center text-xl text-white">
                â†“
              </div>
              <p>Scroll to explore the latest case studies, pricing, and client work.</p>
            </div>
          </FadeIn>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ About â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <Section id="about">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  About
                </p>
                <h2 className="mt-3 text-4xl font-bold">About Me</h2>
                <div className="mt-8 space-y-5 text-zinc-300">
                  <p className="leading-8">
                    I&apos;m <span className="font-semibold text-white">Hamza Khan</span>,
                    a full-stack web developer and UI/UX designer focused on
                    creating modern, high-performance, and visually engaging web
                    applications.
                  </p>
                  <p className="leading-8">
                    I specialize in end-to-end product development â€” from wireframes
                    and design systems to scalable backend architecture and
                    deployment. My work emphasizes clean code, smooth interactions,
                    and pixel-perfect execution.
                  </p>
                  <p className="leading-8">
                    Whether you need a landing page that converts, a complex
                    dashboard, or a full SaaS application, I bring both the design
                    vision and the technical skills to ship it.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="text-xl font-semibold">Frontend</h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {[
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Framer Motion",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="text-xl font-semibold">Backend & Tools</h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {[
                      "Node.js",
                      "PostgreSQL",
                      "Git",
                      "GitHub",
                      "VS Code",
                      "REST APIs",
                      "Responsive Design",
                      "Performance Optimization",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Currently Leveling Up</h3>
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      In Progress
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { name: "Advanced Node.js / Express", w: "w-4/5" },
                      { name: "PostgreSQL & Database Design", w: "w-3/5" },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/20 px-4 py-3"
                      >
                        <span className="text-sm">{skill.name}</span>
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-800">
                          <div
                    className={`h-full rounded-full bg-indigo-200 ${skill.w} transition-all duration-1000`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Services (NEW) â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <Services />

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Projects â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <Section id="projects">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Portfolio
                </p>
                <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-zinc-400">
                Real-world applications demonstrating full-stack capabilities,
                authentication, database design, and modern UI/UX.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* â”€â”€ Project 1 â”€â”€ */}
            <FadeIn delay={0.1}>
              <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-900/40">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute rounded-full bg-white/10 blur-3xl"
                    style={{
                      width: 160,
                      height: 160,
                      top: -80,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
                    In Development
                  </span>
                  <span className="text-sm text-zinc-500">01</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold relative z-10">
                  AI Productivity Platform
                </h3>
                <p className="mt-4 leading-7 text-zinc-400 relative z-10">
                  Full-stack application with AI-assisted workflows, notes,
                  tasks, auth, search, and a modern dashboard interface.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {["Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm font-semibold relative z-10">
                  <span className="text-zinc-500">Coming Soon</span>
                </div>
              </article>
            </FadeIn>

            {/* â”€â”€ Project 2 â”€â”€ */}
            <FadeIn delay={0.2}>
              <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-900/40">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute rounded-full bg-white/10 blur-3xl"
                    style={{
                      width: 160,
                      height: 160,
                      top: -80,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
                    In Development
                  </span>
                  <span className="text-sm text-zinc-500">02</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold relative z-10">
                  Real-Time Collaboration App
                </h3>
                <p className="mt-4 leading-7 text-zinc-400 relative z-10">
                  Collaborative workspace with live updates, shared projects,
                  comments, notifications, and role-based access control.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {["Next.js", "Socket.IO", "Node.js", "PostgreSQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm font-semibold relative z-10">
                  <span className="text-zinc-500">Coming Soon</span>
                </div>
              </article>
            </FadeIn>

            {/* â”€â”€ Project 3 â”€â”€ */}
            <FadeIn delay={0.3}>
              <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-900/40">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute rounded-full bg-white/10 blur-3xl"
                    style={{
                      width: 160,
                      height: 160,
                      top: -80,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
                    In Development
                  </span>
                  <span className="text-sm text-zinc-500">03</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold relative z-10">
                  Analytics Dashboard
                </h3>
                <p className="mt-4 leading-7 text-zinc-400 relative z-10">
                  Analytics platform with real-time charts, filtering,
                  authentication, API integrations, and data visualization.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {["Next.js", "TypeScript", "Charts", "PostgreSQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm font-semibold relative z-10">
                  <span className="text-zinc-500">Coming Soon</span>
                </div>
              </article>
            </FadeIn>
          </div>
        </Section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€ Contact â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <Section id="contact">
          <FadeIn>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 sm:p-12">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Get in Touch
                  </p>
                  <h2 className="mt-3 text-4xl font-bold">Let&apos;s Work Together</h2>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Have a project in mind? I&apos;m currently accepting freelance
                    opportunities. Send me a message and let&apos;s discuss how I can
                    help bring your vision to life.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href="mailto:hamza@example.com"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg border border-zinc-700 p-2 text-sm">âœ‰</span>
                      hamza@example.com
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg border border-zinc-700 p-2 text-sm">âŒ˜</span>
                      github.com/yourusername
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg border border-zinc-700 p-2 text-sm">in</span>
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm text-zinc-400 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-zinc-800 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-600 focus:bg-black/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-zinc-800 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-600 focus:bg-black/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-600 focus:bg-black/50"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-zinc-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-600 focus:bg-black/50"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  );
}
``````

### `app/loading.tsx`

``````tsx
export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#050505] text-white">
      <div className="space-y-4 text-center">
        <div className="h-16 w-16 rounded-full border border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Loading portfolio</p>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full w-1/2 bg-white"
            style={{ animation: "loading 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
``````

### `app/not-found.tsx`

``````tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-white">
      <div className="max-w-xl space-y-8 text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl font-black">
          404
        </div>
        <div>
          <h1 className="text-4xl font-bold">Lost in space?</h1>
          <p className="mt-4 text-zinc-400">
            The page you&apos;re looking for is floating somewhere else. Let&apos;s get you back to the portfolio.
          </p>
        </div>
        <Link href="/" className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
          Return home
        </Link>
      </div>
    </main>
  );
}
``````

### `app/globals.css`

``````css
@import "tailwindcss";

:root {
  --background: #101426;
  --foreground: #eef1ff;
  --muted: #b1b9d8;
  --border: #3a4265;
  --card: rgba(38, 45, 78, 0.45);
  --card-border: rgba(151, 165, 214, 0.2);
  --accent: #c7d2fe;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 10% 5%, rgba(129, 140, 248, 0.14), transparent 28rem),
    radial-gradient(circle at 90% 30%, rgba(125, 211, 252, 0.09), transparent 26rem),
    var(--background);
  color: var(--foreground);
  /* REMOVED: font-family: Arial... */
  /* Geist font is applied via layout.tsx className */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

::selection {
  background: rgba(165, 180, 252, 0.35);
  color: #f8fafc;
}

@media (pointer: coarse) {
  .hide-on-coarse {
    display: none !important;
  }
}

@keyframes loading {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
}

/* Muted indigo palette for existing Tailwind utilities. */
.text-white { color: #f1f5ff; }
.text-zinc-200 { color: #e2e8ff; }
.text-zinc-300 { color: #cbd5f5; }
.text-zinc-400 { color: #aeb9da; }
.text-zinc-500 { color: #8f9ac0; }
.text-zinc-600 { color: #7781a8; }
.border-zinc-800 { border-color: rgba(73, 84, 125, 0.72); }
.border-zinc-700 { border-color: rgba(105, 119, 166, 0.72); }
.border-zinc-600 { border-color: rgba(151, 165, 214, 0.72); }
.border-zinc-500 { border-color: rgba(183, 196, 240, 0.72); }
[class~="bg-zinc-900/60"] { background-color: rgba(30, 38, 70, 0.68); }
[class~="bg-zinc-900/40"] { background-color: rgba(30, 38, 70, 0.48); }
[class~="bg-zinc-900/30"] { background-color: rgba(30, 38, 70, 0.4); }
[class~="bg-zinc-900/20"] { background-color: rgba(30, 38, 70, 0.3); }
[class~="bg-zinc-900/40"]:hover { background-color: rgba(45, 55, 94, 0.52); }
.bg-zinc-800 { background-color: rgba(56, 66, 105, 0.72); }
``````

### `components/Background.tsx`

``````tsx
"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      <motion.div
        className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-140px] top-[20%] h-[520px] w-[520px] rounded-full bg-sky-300/10 blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[-120px] h-[620px] w-[620px] rounded-full bg-violet-300/10 blur-[140px]"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
``````

### `components/CursorGlow.tsx`

``````tsx
"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [lagPosition, setLagPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
      setLagPosition((prev) => ({
        x: prev.x + (x - prev.x) * 0.15,
        y: prev.y + (y - prev.y) * 0.15,
      }));
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow-dot pointer-events-none fixed z-10 h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ left: position.x - 4, top: position.y - 4 }}
      />
      <div
        className="cursor-glow-ring pointer-events-none fixed z-0 h-[200px] w-[200px] rounded-full bg-white/10 blur-[80px] hide-on-coarse"
        style={{ left: lagPosition.x - 100, top: lagPosition.y - 100 }}
      />
    </>
  );
}
``````

### `components/Fadein.tsx`

``````tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeIn({
  children,
  delay = 0,
}: FadeInProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
``````

### `components/Footer.tsx`

``````tsx
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Hamza Khan</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
              Full-stack developer & UI/UX designer building modern, interactive,
              and high-performance web applications.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hamza@example.com"
                className="text-zinc-400 transition hover:text-white"
              >
                Email
              </a>
            </div>
            <p className="text-zinc-600 text-xs">
              Â© {currentYear} Hamza Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
``````

### `components/MagneticButton.tsx`

``````tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const deltaX = event.clientX - (left + width / 2);
    const deltaY = event.clientY - (top + height / 2);
    const maxDistance = 50;
    x.set(Math.max(Math.min(deltaX, maxDistance), -maxDistance));
    y.set(Math.max(Math.min(deltaY, maxDistance), -maxDistance));
  };

  const resetMotion = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      // client-side navigation to anchor or url
      window.location.assign(href);
      return;
    }

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMotion}
      style={{ x: springX, y: springY }}
      className={`rounded-2xl border border-zinc-700 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-white/10 transition hover:scale-[1.02] hover:border-zinc-500 ${className}`}
    >
      {children}
    </motion.button>
  );
}
``````

### `components/Navbar.tsx`

``````tsx
"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-zinc-700/80 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-indigo-950/20"
              : "border-zinc-800 bg-slate-950/45 backdrop-blur-md"
          }`}
        >
          <div className="flex h-14 items-center justify-between px-4">
            <a href="#" className="group">
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-white transition group-hover:text-zinc-200">
                  Hamza
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Khan
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-white/5"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="/resume.pdf"
              className="hidden md:block rounded-lg bg-indigo-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-400/15 transition hover:bg-indigo-300"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              className="md:hidden rounded-lg border border-zinc-700 px-3 py-2 text-zinc-300"
            >
              {open ? "âœ•" : "â˜°"}
            </button>
          </div>

          {open && (
            <div className="border-t border-zinc-800 md:hidden">
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-sm transition ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white bg-white/5"
                        : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-indigo-400 px-3 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
``````

### `components/NoiseOverlay.tsx`

``````tsx
export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] opacity-5"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23noise)\' opacity=\'0.15\'/%3E%3C/svg%3E')",
        backgroundSize: "cover",
      }}
    />
  );
}
``````

### `components/ScrollButtons.tsx`

``````tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const scrollHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollY + innerHeight >= scrollHeight - 80;
      setShowTop(isAtBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-6 z-50">
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700 bg-slate-950/90 text-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.8)] transition hover:border-indigo-300 hover:bg-zinc-900"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          â†‘
        </button>
      )}
    </div>
  );
}
``````

### `components/ScrollProgress.tsx`

``````tsx
"use client";

import { motion, useSpring, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-[2px] origin-left bg-white"
      style={{ scaleX }}
    />
  );
}
``````

### `components/Section.tsx`

``````tsx
import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      {children}
    </section>
  );
}
``````

### `components/Services.tsx`

``````tsx
"use client";

import FadeIn from "./Fadein";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications using Next.js, React, TypeScript, Node.js, and PostgreSQL. From database design to deployment.",
  },
  {
    num: "02",
    title: "UI/UX Design & Prototyping",
    desc: "Clean, modern interfaces with Figma-to-code precision. I design experiences that convert â€” not just look pretty.",
  },
  {
    num: "03",
    title: "Performance & SEO Optimization",
    desc: "Core Web Vitals optimization, lazy loading, image optimization, semantic markup, and technical SEO audits.",
  },
  {
    num: "04",
    title: "Responsive & Accessible Design",
    desc: "Mobile-first, fully responsive layouts that work across all devices and meet WCAG accessibility standards.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              What I Do
            </p>
            <h2 className="mt-3 text-4xl font-bold">Services</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            I help startups, agencies, and businesses build fast, scalable, and
            visually stunning web products.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/40">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute rounded-full bg-white/5 blur-3xl"
                  style={{
                    width: 160,
                    height: 160,
                    top: -60,
                    right: -60,
                  }}
                />
              </div>

              <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-400 transition">
                {service.num}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// Local Section wrapper to match your Section.tsx props
function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      {children}
    </section>
  );
}
``````

### `components/TextReveal.tsx`

``````tsx
"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const lines = text.split("\n").filter(Boolean);

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={line + index} className="overflow-hidden">
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
              delay: delay + index * 0.08,
            }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
``````

### `components/TypewriterText.tsx`

``````tsx
"use client";

import useTypewriter from "./useTypewriter";

type TypewriterTextProps = {
  words: string[];
  className?: string;
};

export default function TypewriterText({
  words,
  className = "",
}: TypewriterTextProps) {
  const text = useTypewriter(words, 100, 1800);

  return (
    <span className={className}>
      {text}
      <span className="inline-block animate-pulse text-white">|</span>
    </span>
  );
}
``````

### `components/useTypewriter.ts`

``````ts
"use client";

import { useEffect, useState } from "react";

export default function useTypewriter(
  words: string[],
  speed = 120,
  pause = 1800
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const isComplete = !isDeleting && text === currentWord;
    const isEmpty = isDeleting && text === "";
    const typingSpeed = isDeleting ? speed / 2 : speed;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
      } else if (isEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      } else {
        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, isComplete ? pause : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, pause, speed, words]);

  return text;
}
``````

### `public/file.svg`

``````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
``````

### `public/globe.svg`

``````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
``````

### `public/next.svg`

``````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
``````

### `public/vercel.svg`

``````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
``````

### `public/window.svg`

``````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
``````

