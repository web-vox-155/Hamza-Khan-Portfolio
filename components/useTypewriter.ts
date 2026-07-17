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
