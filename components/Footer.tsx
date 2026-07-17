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
              © {currentYear} Hamza Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
