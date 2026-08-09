"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  /** The mark that sits on the rail. Rendered on the server. */
  node: React.ReactNode;
  /**
   * Organisation, role and period. Sits under the toggle's stretched click
   * area, so anything interactive in it needs `relative z-10`.
   */
  header: React.ReactNode;
  /** Names the entry to screen readers on its toggle, e.g. "GRAIL, Intern". */
  label: string;
  /** Everything behind the click. Omitted on the plain life milestones. */
  detail?: React.ReactNode;
  /** Rail below this entry, in rem. */
  gap: number;
  defaultOpen?: boolean;
};

/**
 * One entry on the rail. The detail stays in the DOM when collapsed, clipped by
 * a 0fr grid row rather than unmounted, so the whole page is still in the
 * static HTML and the expand can be animated.
 *
 * Rows below the fold fade up as they scroll into view. Hiding them is the
 * effect's job, not the stylesheet's: the server HTML is fully visible, and a
 * row only gets `data-reveal` (opacity 0, in globals.css) once it has hydrated
 * and is known to be off screen, so it has an observer to bring it back with
 * `data-revealed`. With JavaScript off, or a bundle that fails to load, nothing
 * is ever hidden, and nothing on screen at load blinks out and back.
 */
export const TimelineRow: React.FC<Props> = ({
  node,
  header,
  label,
  detail,
  gap,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const row = useRef<HTMLLIElement>(null);
  const panelId = useId();

  useEffect(() => {
    const element = row.current;
    if (!element) return;

    const alreadyOnScreen =
      element.getBoundingClientRect().top < window.innerHeight;
    if (
      alreadyOnScreen ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // No rootMargin: any shrink of the viewport could leave a short last row
    // that never scrolls far enough in to count, and so never reappears.
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some(({ isIntersecting }) => isIntersecting)) return;
      element.setAttribute("data-revealed", "");
      observer.disconnect();
    });

    element.setAttribute("data-reveal", "");
    observer.observe(element);
    return () => {
      observer.disconnect();
      element.removeAttribute("data-reveal");
      element.removeAttribute("data-revealed");
    };
  }, []);

  return (
    <li
      ref={row}
      data-open={open ? "" : undefined}
      style={{ paddingBottom: `${gap}rem` }}
      className="timeline-row relative flex flex-row gap-4"
    >
      <div className="relative z-10 shrink-0">{node}</div>

      <div className="min-w-0 flex-1">
        {detail ? (
          // The whole row toggles: the button's ::after stretches over it.
          <div className="group relative -mx-2 rounded px-2 py-0.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            {header}
            <button
              type="button"
              onClick={() => setOpen((was) => !was)}
              aria-expanded={open}
              aria-controls={panelId}
              className="mt-1 inline-flex cursor-pointer print:hidden flex-row items-center gap-0.5 text-xs font-medium text-accent after:absolute after:inset-0 after:content-['']"
            >
              {open ? "Hide details" : "Details"}
              <span className="sr-only"> for {label}</span>
              <ChevronRightIcon
                aria-hidden
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  open ? "rotate-90" : "group-hover:translate-x-0.5"
                }`}
              />
            </button>
          </div>
        ) : (
          <div className="py-0.5">{header}</div>
        )}

        {detail && (
          <div
            id={panelId}
            inert={!open}
            // Printed open: paper has no button to press.
            className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none print:grid-rows-[1fr] ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            {/*
             * The clip only exists for the collapse. Its box is widened past
             * the content, layout unchanged, so the stack pills' rings and
             * focus outlines, drawn outside their edges, are not cut off.
             */}
            <div className="-mx-1 overflow-hidden px-1">{detail}</div>
          </div>
        )}
      </div>
    </li>
  );
};
