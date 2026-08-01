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
import HeroPhoto from "../components/scenes/HeroPhoto";
import ScrollButtons from "../components/ScrollButtons";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <CursorGlow />
      <main className="relative z-10 min-h-screen overflow-x-clip bg-transparent text-white pt-24">
        <ScrollButtons />
        {/* ───────── Hero ───────── */}
        <section className="relative mx-auto max-w-6xl px-6 py-32">
          <HeroPhoto />
          <div className="hero-aurora" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <FadeIn>
            <div className="relative inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-slate-950/55 px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance projects
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative mt-8 max-w-5xl">
              <div className="min-h-[1.1rem] overflow-hidden sm:min-h-[1.4rem]">
                <p className="max-w-full overflow-hidden text-[0.64rem] uppercase tracking-[0.18em] text-cyan-200/70 sm:text-sm sm:tracking-[0.35em]">
                  <TypewriterText
                    words={["Full-Stack Developer & UI/UX Designer"]}
                    className="font-semibold uppercase tracking-[0.18em] text-cyan-200/70 sm:tracking-[0.35em]"
                  />
                </p>
              </div>
              <h1 className="mt-4 text-4xl font-black leading-[0.9] sm:text-5xl md:mt-5 md:text-7xl lg:text-8xl">
                <TextReveal lines={["Building modern", "digital experiences"]} />
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-zinc-300">
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
                  React · Next.js · Node.js · PostgreSQL
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">UI/UX</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Modern design systems · Prototyping · Figma
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">Performance</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Core Web Vitals · SEO · Accessibility
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center gap-3 text-sm text-zinc-400">
              <div className="h-12 w-12 rounded-3xl border border-zinc-700 bg-white/5 grid place-items-center text-xl text-white">
                ↓
              </div>
              <p>Scroll to explore the latest case studies, pricing, and client work.</p>
            </div>
          </FadeIn>
        </section>

        {/* ───────── About ───────── */}
        <Section id="about">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  About
                </p>
                <h2 className="mt-3 text-4xl font-bold">About Me</h2>
                <div className="mt-8 space-y-5 text-zinc-300">
                  <p className="leading-8">
                    I&apos;m <span className="font-semibold text-white">Hamza Khan</span>,
                    a full-stack developer who designs, builds, and ships complete
                    web applications — not just interfaces, the whole system behind
                    them.
                  </p>
                  <p className="leading-8">
                    My most recent build is a production full-stack platform with
                    real authentication, a live PostgreSQL database, complete
                    CRUD workflows, and drag-and-drop interactions — designed,
                    built, and deployed end to end, by me, on my own.
                  </p>
                  <p className="leading-8">
                    I care about the details that separate a demo from a real
                    product: data that actually persists, auth that&apos;s actually
                    secure, and interfaces that feel deliberate rather than
                    templated. If you need something built and shipped, not just
                    mocked up, that&apos;s the work I do.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn direction="right" delay={0.1}>
                <div className="rounded-3xl border-2 table-leaf line-rose p-6">
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
                        className="rounded-full shape-neon px-4 py-1.5 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-3xl border-2 table-leaf line-sky p-6">
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
                        className="rounded-full shape-neon px-4 py-1.5 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-3xl border-2 table-leaf line-emerald p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Recently Shipped</h3>
                    <span className="rounded-full shape-neon px-3 py-1 text-xs">
                      Live
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      "Full authentication system with secure sessions",
                      "Real-time drag-and-drop task management",
                      "Production PostgreSQL database, deployed live",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-black/20 px-4 py-3"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full shape-neon-check text-xs">
                          ✓
                        </span>
                        <span className="text-sm text-zinc-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* ───────── Services (NEW) ───────── */}
        <FadeIn direction="right">
          <Services />
        </FadeIn>

        {/* ───────── Projects ───────── */}
        <Section id="projects">
          <FadeIn direction="left">
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

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {/* ── Project 1 ── */}
            <FadeIn delay={0.1}>
              <article className="group relative overflow-hidden rounded-3xl border-2 table-leaf line-gold p-6 transition-all duration-500 hover:-translate-y-2">
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
                        className="rounded-full shape-neon px-3 py-1 text-xs"
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

            {/* ── Project 2 ── */}
            <FadeIn delay={0.2}>
              <article className="group relative overflow-hidden rounded-3xl border-2 table-leaf line-fuchsia p-6 transition-all duration-500 hover:-translate-y-2">
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
                        className="rounded-full shape-neon px-3 py-1 text-xs"
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

            {/* ── Project 3 ── */}
            <FadeIn delay={0.3}>
              <article className="group relative overflow-hidden rounded-3xl border-2 table-leaf line-amber p-6 transition-all duration-500 hover:-translate-y-2">
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
                        className="rounded-full shape-neon px-3 py-1 text-xs"
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

        {/* ───────── Contact ───────── */}
        <Section id="contact">
          <FadeIn direction="right">
            <div className="rounded-3xl border-2 table-leaf line-violet p-8 sm:p-12">
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
                      href="mailto:ainature155@gmail.com"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg shape-neon p-2 text-sm">✉</span>
                      ainature155@gmail.com
                    </a>
                    <a
                      href="https://github.com/web-vox-155"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg shape-neon p-2 text-sm">⌘</span>
                      github.com/web-vox-155
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hamza-khan-36172a377"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg shape-neon p-2 text-sm">in</span>
                      linkedin.com/in/hamza-khan
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
                        className="input-neon w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition"
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
                        className="input-neon w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition"
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
                      className="input-neon w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition"
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
                      className="input-neon w-full resize-none rounded-xl border px-4 py-3 text-sm text-white outline-none transition"
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
