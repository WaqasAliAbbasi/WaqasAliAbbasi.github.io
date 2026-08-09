"use client";

import React, { useSyncExternalStore } from "react";

import { monthsInclusive, thisMonth, YearMonth } from "@/lib/month";

const plural = (count: number, unit: string) =>
  `${count} ${unit}${count === 1 ? "" : "s"}`;

/** The month never changes under the reader, so there is nothing to watch. */
const subscribe = () => () => {};

/**
 * The reader's month. The static HTML and hydration use `asOf`, the build
 * month, so they agree; the client then reads its own clock, which keeps
 * anything counted against "now" from going stale between deploys. A clock
 * behind the build is ignored rather than allowed to count backwards.
 */
const useNow = (asOf: YearMonth) =>
  useSyncExternalStore(
    subscribe,
    () => {
      const now = thisMonth();
      return now > asOf ? now : asOf;
    },
    () => asOf,
  );

/** "3 years 8 months". Inclusive of both months, the way a CV counts them. */
export const Duration: React.FC<{
  start: YearMonth;
  end?: YearMonth;
  asOf: YearMonth;
}> = ({ start, end, asOf }) => {
  const now = useNow(asOf);
  const total = monthsInclusive(start, end ?? now);
  const years = Math.floor(total / 12);
  const months = total % 12;
  return (
    <>
      {[years && plural(years, "year"), months && plural(months, "month")]
        .filter(Boolean)
        .join(" ")}
    </>
  );
};
