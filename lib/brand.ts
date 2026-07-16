// Source of truth for brand hex values, mirrored in app/globals.css's @theme block.
// Kept here too for contexts that need raw hex (SVG fills/gradients, metadata themeColor).
export const BRAND = {
  cloud: "#FAF7F2",
  ink: "#2E2A22",
  halo: "#C9A227",
  ember: "#D98C2B",
  emberDeep: "#9A621C",
  steel: "#8C8478",
} as const;
