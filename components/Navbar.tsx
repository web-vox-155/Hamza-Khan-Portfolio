"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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
  const tickingRef = useRef(false);

  const updateScrollState = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((link) => link.href.replace("#", ""));
    for (const section of sections.slice().reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    }
    tickingRef.current = false;
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(updateScrollState);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateScrollState]);

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
              href="#contact"
              className="hidden md:block rounded-lg bg-indigo-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-400/15 transition hover:bg-indigo-300"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              className="md:hidden rounded-lg border border-zinc-700 px-3 py-2 text-zinc-300"
            >
              {open ? "✕" : "☰"}
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
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-indigo-400 px-3 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
