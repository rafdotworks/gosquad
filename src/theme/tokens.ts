/** Gosquad design tokens — re-export for JS-only needs (e.g. comment pin positioning). */

export const colors = {
  canvas: "#FDFCFC",
  sand: "#F5F3F1",
  sand2: "#EFEDE9",
  surface: "#FFFFFF",
  line: "#E5E5E5",
  lineSoft: "#EEECE8",
  ink: "#16150F",
  body: "#322E26",
  muted: "#777169",
  faint: "#A59F97",
  onInk: "#FDFCFC",
  sage: "#5C7456",
  sageText: "#3C4538",
  sageBg: "#F0F1EC",
  sageLine: "rgba(92,116,86,0.16)",
  clay: "#9A4B38",
  clayText: "#5E2B1F",
  clayBg: "#F4EEEB",
  clayLine: "rgba(154,75,56,0.16)",
} as const;

export const fonts = {
  display: "var(--font-display)",
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
  wordmark: "var(--font-wordmark)",
} as const;

/** @deprecated Use named exports (colors, fonts) instead */
export const c = colors;
