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
        {/* ───────── Hero ───────── */}
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
                    I specialize in end-to-end product development — from wireframes
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

        {/* ───────── Services (NEW) ───────── */}
        <Services />

        {/* ───────── Projects ───────── */}
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
            {/* ── Project 1 ── */}
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

            {/* ── Project 2 ── */}
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

            {/* ── Project 3 ── */}
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

        {/* ───────── Contact ───────── */}
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
                      <span className="rounded-lg border border-zinc-700 p-2 text-sm">✉</span>
                      hamza@example.com
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <span className="rounded-lg border border-zinc-700 p-2 text-sm">⌘</span>
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
