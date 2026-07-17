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
