import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SimpleIcon } from "simple-icons";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { career } from "@/content/career";
import { CareerEntry, EntryKind } from "@/types/content";
import { brandColor } from "@/lib/brand";
import { SITE_URL } from "@/lib/site";
import { formatPeriod, thisMonth } from "@/lib/month";
import { stackLink } from "@/lib/stackLinks";

import { Duration } from "./Duration";
import { TimelineRow } from "./TimelineRow";

const mono = JetBrains_Mono({ subsets: ["latin"] });

const description = "A timeline of how I got here, and what I made faster.";

export const metadata: Metadata = {
  title: "Career",
  description,
  openGraph: {
    title: "Career | Waqas Ali",
    url: `${SITE_URL}/career`,
    description,
    siteName: "Waqas Ali",
    locale: "en_US",
    type: "website",
  },
};

/** Rail between two entries, in rem. The same everywhere. */
const GAP = 2;

/** The ring around each node, so you can read the kind of entry at a glance. */
const RING: Record<EntryKind, string> = {
  work: "ring-accent/40",
  venture: "ring-amber-500/50",
  education: "ring-emerald-500/40",
  life: "ring-gray-300 dark:ring-gray-600",
};

/**
 * Sits on the rail, so it needs the page background behind it to punch a hole
 * in the line. Life milestones get their emoji, or a dot, rather than a logo
 * tile.
 */
const Mark: React.FC<
  Pick<CareerEntry, "kind" | "logo" | "logoDark" | "monogram" | "emoji">
> = ({ kind, logo, logoDark, monogram, emoji }) => {
  if (kind === "life") {
    if (emoji) {
      return (
        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--background-end-rgb))] text-lg"
        >
          {emoji}
        </span>
      );
    }
    return (
      <span aria-hidden className="flex h-9 w-9 items-center justify-center">
        {/* Only as wide as the diamond, so the rail keeps running behind it. */}
        <span className="flex h-4 w-4 items-center justify-center bg-[rgb(var(--background-end-rgb))]">
          <span className="h-2 w-2 rotate-45 bg-gray-400 dark:bg-gray-500" />
        </span>
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--background-end-rgb))] ring-1 ${RING[kind]}`}
    >
      {logo ? (
        <>
          <Image
            src={logo}
            alt=""
            className={`h-5 w-5 object-contain ${logoDark ? "dark:hidden" : ""}`}
          />
          {logoDark && (
            <Image
              src={logoDark}
              alt=""
              className="hidden h-5 w-5 object-contain dark:block"
            />
          )}
        </>
      ) : (
        <span className={`${mono.className} text-[10px] font-medium`}>
          {monogram}
        </span>
      )}
    </span>
  );
};

/**
 * Brand colours straight off simple-icons, corrected per surface by
 * `brandColor` so the near black marks survive dark mode.
 */
const Stack: React.FC<{ stack: SimpleIcon[] }> = ({ stack }) => (
  <ul className="mt-4 flex flex-row flex-wrap gap-1.5">
    {stack.map((icon) => {
      const { title, path, hex } = icon;
      const { light, dark, iconLight, iconDark } = brandColor(hex);
      return (
        <li key={title}>
          <Link
            href={stackLink(icon)}
            target="_blank"
            style={
              {
                "--brand": light,
                "--brand-dark": dark,
                "--brand-icon": iconLight,
                "--brand-icon-dark": iconDark,
              } as React.CSSProperties
            }
            className="flex flex-row items-center gap-1.5 rounded-full bg-(--brand)/8 px-2 py-1 text-[11px] text-(--brand) ring-1 ring-(--brand)/20 transition-colors hover:bg-(--brand)/15 hover:ring-(--brand)/40 dark:bg-(--brand-dark)/12 dark:text-(--brand-dark) dark:ring-(--brand-dark)/25 dark:hover:bg-(--brand-dark)/20 dark:hover:ring-(--brand-dark)/45"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-(--brand-icon) dark:fill-(--brand-icon-dark)"
            >
              <path d={path} />
            </svg>
            {title}
          </Link>
        </li>
      );
    })}
  </ul>
);

/** The date range as written: derived from the months, or the free text. */
const periodOf = (entry: CareerEntry) =>
  entry.start ? formatPeriod(entry.start, entry.end) : entry.period;

const Header: React.FC<{ entry: CareerEntry }> = ({ entry }) => {
  const { organisation, href, role, start, end, kind, summary } = entry;
  return (
    <>
      <span className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
        {href ? (
          // Above the row's stretched toggle, so it stays its own click target.
          <Link
            href={href}
            target="_blank"
            className="relative z-10 inline-flex w-fit flex-row items-center gap-1 font-semibold hover:text-accent hover:underline"
          >
            {organisation}
            <ArrowTopRightOnSquareIcon
              aria-hidden
              className="h-3.5 w-3.5 shrink-0 text-gray-400"
            />
          </Link>
        ) : (
          <span className="font-semibold">{organisation}</span>
        )}
        <span
          className={`${mono.className} text-[11px] text-gray-500 dark:text-gray-400`}
        >
          {periodOf(entry)}
          {start && (
            <>
              {" · "}
              <Duration start={start} end={end} asOf={thisMonth()} />
            </>
          )}
        </span>
      </span>
      {role && <span className="block text-sm">{role}</span>}
      {/* Life milestones have nothing to expand, so their one line sits here. */}
      {kind === "life" && summary && (
        <span className="mt-1 block text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {summary}
        </span>
      )}
    </>
  );
};

const Detail: React.FC<{ entry: CareerEntry }> = ({ entry }) => (
  <div className="pb-1">
    {entry.highlights && (
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-gray-400">
        {entry.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    )}

    {entry.summary && (
      <p className="mt-4 text-sm leading-relaxed">{entry.summary}</p>
    )}

    {entry.stack && <Stack stack={entry.stack} />}
  </div>
);

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-2xl font-semibold leading-7">Career</h1>
        <p className="mt-2 text-sm leading-relaxed">
          I write software in Hong Kong.
        </p>
      </section>

      <ol className="relative">
        {/* The rail. Behind the nodes, which punch through it. */}
        <span
          aria-hidden
          className="absolute bottom-4 left-4.5 top-4 w-px bg-gray-200 dark:bg-gray-700"
        />
        {career.map((entry, index) => {
          const detail =
            entry.highlights ||
            entry.stack ||
            (entry.summary && entry.kind !== "life");

          return (
            <TimelineRow
              key={`${entry.organisation}-${periodOf(entry)}`}
              label={
                entry.role
                  ? `${entry.organisation}, ${entry.role}`
                  : entry.organisation
              }
              gap={index === career.length - 1 ? 0 : GAP}
              defaultOpen={entry.defaultOpen}
              node={
                <Mark
                  kind={entry.kind}
                  logo={entry.logo}
                  logoDark={entry.logoDark}
                  monogram={entry.monogram}
                  emoji={entry.emoji}
                />
              }
              header={<Header entry={entry} />}
              detail={detail ? <Detail entry={entry} /> : undefined}
            />
          );
        })}
      </ol>
    </div>
  );
}
