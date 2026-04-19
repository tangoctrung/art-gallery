"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function DescPainting({ description }: { description: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionToShow = isExpanded
    ? description
    : description.slice(0, 1);

  return (
    <section className="px-[5%] py-12 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="">
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:leading-[1.1]">
            Một điểm nhấn thị giác cho không gian sống hiện đại.
          </h2>
          <div className="mt-8 space-y-5 text-[17px] leading-7 tracking-[-0.374px] text-[var(--art-text-black-72)]">
            {descriptionToShow.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {description.length > 1 ? (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="mt-6 bg-(--art-surface-light) border border-( --art-border-light-emphasis) px-4 py-2 rounded-full inline-flex items-center gap-2 text-[17px] text-[var(--art-accent)] transition hover:text-[var(--art-accent-hover)]"
            >
              <span>{isExpanded ? "Thu gọn" : "Xem thêm"}</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default DescPainting;
