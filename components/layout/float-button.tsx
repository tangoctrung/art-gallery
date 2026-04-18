"use client"

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function FloatButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-5 bottom-5 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-[var(--art-border-light)] bg-[var(--art-surface-dark)]/88 text-[var(--art-text-inverse)] shadow-[0_20px_45px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--art-accent)] md:right-8 md:bottom-8 md:h-14 md:w-14 ${isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}

export default FloatButton
