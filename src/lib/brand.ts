// WMF Brand Tokens
export const WMFBrand = {
  colors: {
    roseDeep: "#A5375C",
    rose: "#C84862",
    roseLight: "#DE5762",
    teal: "#3C6A72",
    gradient:
      "linear-gradient(135deg, #6B0E51 0%, #A71466 33%, #C91E5F 66%, #1D4C4C 100%)",
  },
  fonts: {
    family: "var(--font-primary)",
    weight: {
      regular: 400,
      semibold: 600,
    },
  },
  buttonPrimary: {
    bg: "var(--wmf-rose-deep)",
    color: "#FFFFFF",
    hoverBg: "var(--wmf-rose)",
  },
  buttonSecondary: {
    bg: "transparent",
    color: "var(--wmf-rose-deep)",
    border: "2px solid var(--wmf-rose-deep)",
    hoverBg: "rgba(222, 87, 98, 0.1)",
  },
  text: {
    primary: "var(--wmf-text-primary)",
    secondary: "var(--wmf-text-secondary)",
    muted: "var(--wmf-text-muted)",
    accent: "var(--wmf-teal)",
    brand: "var(--wmf-rose-deep)",
  },
  background: {
    light: "var(--wmf-background-light)",
    white: "var(--wmf-background-white)",
  },
  border: {
    default: "var(--wmf-border)",
    light: "var(--wmf-border-light)",
  },
} as const;

// Utility functions for brand colors
export const getBrandColor = (color: keyof typeof WMFBrand.colors) => {
  return WMFBrand.colors[color];
};

export const getTextColor = (color: keyof typeof WMFBrand.text) => {
  return WMFBrand.text[color];
};

// CSS Custom Properties for use in styled-components or CSS-in-JS
export const brandCSSVars = {
  "--wmf-rose-deep": WMFBrand.colors.roseDeep,
  "--wmf-rose": WMFBrand.colors.rose,
  "--wmf-rose-light": WMFBrand.colors.roseLight,
  "--wmf-teal": WMFBrand.colors.teal,
  "--wmf-gradient": WMFBrand.colors.gradient,
} as const;
