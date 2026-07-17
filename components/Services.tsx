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
    desc: "Clean, modern interfaces with Figma-to-code precision. I design experiences that convert — not just look pretty.",
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
