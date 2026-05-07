"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Spotlight from "./Spotlight";
import PaintingOfCategory from "./PaintingOfCategory";
import StatueOfCategory from "./StatueOfCategory";
import Artists from "./Artists";

const scrollLockDuration = 760;

const homepageSections = [
  { id: "spotlight", component: <Spotlight /> },
  // { id: "introduction", component: <Introduction /> },
  { id: "collections", component: <PaintingOfCategory /> },
  { id: "statue-collections", component: <StatueOfCategory /> },
  { id: "artists", component: <Artists /> },
  // { id: "consultation", component: <ConsultingForm /> },
];

function updateSectionHash(sectionId: string) {
  const nextHash = `#${sectionId}`;

  if (window.location.hash === nextHash) {
    return;
  }

  window.history.replaceState(null, "", nextHash);
}

function getSectionIndexFromHash() {
  return homepageSections.findIndex(
    (section) => `#${section.id}` === window.location.hash,
  );
}

function getScrollableTarget(target: EventTarget | null, boundary: HTMLElement) {
  if (!(target instanceof HTMLElement)) {
    return null;
  }

  let element: HTMLElement | null = target;

  while (element && element !== boundary) {
    const overflowY = window.getComputedStyle(element).overflowY;
    const isScrollable =
      (overflowY === "auto" || overflowY === "scroll") &&
      element.scrollHeight > element.clientHeight;

    if (isScrollable) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}

function canScrollElement(element: HTMLElement, direction: number) {
  if (direction > 0) {
    return element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  }

  return element.scrollTop > 1;
}

function Homepage() {
  const scrollerRef = useRef<HTMLElement | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const scrollToSection = useCallback(
    (targetIndex: number, behavior: ScrollBehavior = "smooth") => {
      const scroller = scrollerRef.current;
      const nextIndex = Math.min(
        Math.max(targetIndex, 0),
        homepageSections.length - 1,
      );

      if (!scroller) {
        return;
      }

      const nextTop = nextIndex * scroller.clientHeight;

      isScrollingRef.current = behavior === "smooth";
      setActiveSectionIndex(nextIndex);
      updateSectionHash(homepageSections[nextIndex].id);
      scroller.scrollTo({
        top: nextTop,
        behavior,
      });

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      if (behavior !== "smooth") {
        isScrollingRef.current = false;
        return;
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        scroller.scrollTop = nextTop;
        isScrollingRef.current = false;
      }, scrollLockDuration);
    },
    [],
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const scroller = scrollerRef.current;

      if (!scroller || Math.abs(event.deltaY) < 10) {
        return;
      }

      const currentIndex = Math.round(scroller.scrollTop / scroller.clientHeight);
      const direction = event.deltaY > 0 ? 1 : -1;
      const targetIndex = currentIndex + direction;
      const scrollableTarget = getScrollableTarget(event.target, scroller);

      if (scrollableTarget && canScrollElement(scrollableTarget, direction)) {
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }

      if (targetIndex < 0 || targetIndex >= homepageSections.length) {
        return;
      }

      if (isScrollingRef.current) {
        return;
      }

      scrollToSection(targetIndex);
    },
    [scrollToSection],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scroller.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  useEffect(() => {
    const sectionIndex = getSectionIndexFromHash();
    let animationFrameId: number | null = null;

    if (sectionIndex >= 0) {
      animationFrameId = window.requestAnimationFrame(() => {
        scrollToSection(sectionIndex, "auto");
      });
    }

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollToSection]);

  return (
    <main
      ref={scrollerRef}
      className="h-svh overflow-y-hidden bg-(--art-surface-light) text-(--art-text-primary) overscroll-y-contain"
    >
      {homepageSections.map((section, index) => (
        <div
          key={section.id}
          data-homepage-section={index}
          data-homepage-section-active={index === activeSectionIndex}
          className="h-full overflow-hidden"
        >
          {section.component}
        </div>
      ))}
    </main>
  );
}

export default Homepage;
