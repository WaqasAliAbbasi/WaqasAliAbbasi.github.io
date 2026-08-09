import { Metadata } from "next";
import { StaticImageData } from "next/image";
import { SimpleIcon } from "simple-icons";

import { YearMonth } from "@/lib/month";

export type PostMetaData = Metadata & {
  title: string;
  date: Date;
  excerpt: string;
};

/**
 * Sets the colour of the node on the rail. `life` entries are the personal
 * milestones between the jobs; they carry no role and nothing to expand.
 */
export type EntryKind = "work" | "venture" | "education" | "life";

/**
 * When it happened. A role whose months are known gives `start` and `end`
 * (both inclusive; `end` left out means it is still going), and the page
 * writes the date range and the duration from them. Anything looser
 * ("Summer 2019") gives `period` as free text instead, and shows no duration.
 */
type When =
  | { start: YearMonth; end?: YearMonth; period?: never }
  | { period: string; start?: never; end?: never };

export type CareerEntry = When & {
  kind: EntryKind;
  organisation: string;
  role?: string;
  /** Opens on load, so the timeline never renders fully collapsed. */
  defaultOpen?: boolean;
  /** The organisation's site, linked from its name. */
  href?: string;
  /**
   * Drop a square logo file into src/assets/logos and import it here. Without
   * one the entry falls back to the monogram below.
   */
  logo?: StaticImageData;
  /** Optional variant for the dark theme, for a logo that would vanish on it. */
  logoDark?: StaticImageData;
  /** Omitted on `life` entries, which draw their emoji on the rail instead. */
  monogram?: string;
  /** The mark for a `life` entry. Without one it gets a plain dot. */
  emoji?: string;
  /** A few points of detail, for the roles worth expanding on. */
  highlights?: string[];
  /** A single line, used instead of highlights on the shorter entries. */
  summary?: string;
  /** Rendered as brand icons, so every entry here needs a simple-icons match. */
  stack?: SimpleIcon[];
};

export type ProjectMetaData = Metadata & {
  title: string;
  date: Date;
  highlight?: boolean;
  description: string;
  image: StaticImageData;
};
