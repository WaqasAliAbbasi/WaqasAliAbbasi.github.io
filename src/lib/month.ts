import dayjs from "dayjs";

/** A month as `YYYY-MM`. Plain strings in this form also sort chronologically. */
export type YearMonth = `${number}-${number}`;

const parse = (month: YearMonth) => {
  const parsed = dayjs(month);
  if (!/^\d{4}-\d{2}$/.test(month) || !parsed.isValid()) {
    throw new Error(`Expected YYYY-MM, got "${month}"`);
  }
  return parsed;
};

/** The current month, in local time. */
export const thisMonth = () => dayjs().format("YYYY-MM") as YearMonth;

/** "April 2024 to present". */
export const formatPeriod = (start: YearMonth, end?: YearMonth) =>
  `${parse(start).format("MMMM YYYY")} to ${
    end ? parse(end).format("MMMM YYYY") : "present"
  }`;

/** Months from `start` to `end`, counting both, the way a CV does. */
export const monthsInclusive = (start: YearMonth, end: YearMonth) =>
  parse(end).diff(parse(start), "month") + 1;
