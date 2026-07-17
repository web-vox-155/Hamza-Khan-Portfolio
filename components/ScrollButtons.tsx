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
          ↑
        </button>
      )}
    </div>
  );
}
