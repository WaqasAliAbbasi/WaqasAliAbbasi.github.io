/**
 * simple-icons ships one brand hex per icon, chosen for a white page. Several
 * of them are black or near black (Next.js, Kafka, Clojure, Prisma), which
 * disappears against the dark surface, and a handful are near white, which
 * disappears against the light one. So each brand gets a pair: the hex as
 * given, nudged only when it would not survive its background.
 */

type Rgb = [number, number, number];

const parse = (hex: string): Rgb => [
  parseInt(hex.slice(0, 2), 16),
  parseInt(hex.slice(2, 4), 16),
  parseInt(hex.slice(4, 6), 16),
];

const format = ([r, g, b]: Rgb) =>
  `#${[r, g, b].map((c) => Math.round(c).toString(16).padStart(2, "0")).join("")}`;

/** WCAG relative luminance, 0 (black) to 1 (white). */
const luminance = ([r, g, b]: Rgb) => {
  const linear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
};

/** WCAG contrast ratio, 1 to 21. */
const contrast = (a: Rgb, b: Rgb) => {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

/** `t` of the way from `from` to `to`. */
const lerp = ([r, g, b]: Rgb, [tr, tg, tb]: Rgb, t: number): Rgb => [
  r + (tr - r) * t,
  g + (tg - g) * t,
  b + (tb - b) * t,
];

/** `colour` laid over `surface` at `alpha`, the way a `bg-x/15` tint paints. */
const tint = (colour: Rgb, surface: Rgb, alpha: number) =>
  lerp(surface, colour, alpha);

const WHITE: Rgb = [255, 255, 255];
const BLACK: Rgb = [0, 0, 0];

type Theme = "light" | "dark";

/** The two page surfaces, as --background-end-rgb in globals.css. */
const SURFACE: Record<Theme, Rgb> = { light: WHITE, dark: [26, 32, 44] };

/**
 * The pill behind each chip is the brand colour itself at this alpha, at its
 * strongest: the hover tint in the career page's `Stack` (`hover:bg-(--brand)/15`
 * and `dark:hover:bg-(--brand-dark)/20`). Keep the two in step.
 */
const PILL_ALPHA: Record<Theme, number> = { light: 0.15, dark: 0.2 };

/**
 * Two tiers, because the label and the glyph are not held to the same bar. The
 * label is 11px text, so it needs WCAG AA's 4.5:1 against its pill. The glyph
 * is a graphic and only needs 3:1, which keeps far more of the brand: React
 * stays cyan rather than going teal.
 */
const TEXT_CONTRAST = 4.5;
const ICON_CONTRAST = 3;

/** The pill a chip labelled in `label` paints, at its strongest. */
const pill = (label: Rgb, theme: Theme) =>
  tint(label, SURFACE[theme], PILL_ALPHA[theme]);

/**
 * Walks the colour toward black (light page) or white (dark page) until it
 * clears `wanted` against `background`, which is a function because the
 * label's pill is tinted by the label itself and so moves with it. Anything
 * that already clears it is passed through exactly as simple-icons gives it,
 * which is most of them. Rounds every step, so what is checked is exactly the
 * hex that ships.
 */
const legible = (
  rgb: Rgb,
  theme: Theme,
  wanted: number,
  background: (colour: Rgb) => Rgb,
) => {
  const target = theme === "light" ? BLACK : WHITE;
  let colour = rgb;
  for (let step = 0; step < 40; step++) {
    if (contrast(colour, background(colour)) >= wanted) break;
    const [r, g, b] = lerp(colour, target, 0.1);
    colour = [Math.round(r), Math.round(g), Math.round(b)];
  }
  return colour;
};

export type BrandColor = {
  /** Label, on the white page and on the dark one. */
  light: string;
  dark: string;
  /** Glyph, same two surfaces. */
  iconLight: string;
  iconDark: string;
};

/**
 * Pure and deterministic, so this runs at render time and ships no client
 * JavaScript.
 */
export const brandColor = (hex: string): BrandColor => {
  const rgb = parse(hex);
  const label = (theme: Theme) =>
    legible(rgb, theme, TEXT_CONTRAST, (colour) => pill(colour, theme));
  const light = label("light");
  const dark = label("dark");
  // The glyph sits on the label's pill, which it does not tint itself.
  const icon = (theme: Theme, onPill: Rgb) =>
    legible(rgb, theme, ICON_CONTRAST, () => pill(onPill, theme));
  return {
    light: format(light),
    dark: format(dark),
    iconLight: format(icon("light", light)),
    iconDark: format(icon("dark", dark)),
  };
};
