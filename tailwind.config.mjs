import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "on-error-container": "#93000a",
        "brushed-bronze": "#9E8060",
        "surface-container-high": "#ece8e1",
        "inverse-surface": "#31302c",
        "primary-fixed-dim": "#c8c6c5",
        "secondary": "#74593c",
        "travertine": "#EAE6DF",
        "inverse-primary": "#c8c6c5",
        "primary-container": "#1c1b1b",
        "on-secondary-container": "#795e40",
        "surface-container-highest": "#e6e2db",
        "surface-container": "#f1ede6",
        "on-tertiary-fixed": "#141b2f",
        "on-surface": "#1c1c18",
        "on-background": "#1c1c18",
        "outline-variant": "#c4c7c7",
        "on-tertiary-container": "#7d839c",
        "error": "#ba1a1a",
        "shattered-plaster": "#8C92AC",
        "surface-variant": "#e6e2db",
        "on-secondary-fixed": "#2a1802",
        "surface-dim": "#dddad3",
        "surface-tint": "#5f5e5e",
        "obsidian": "#121212",
        "tertiary-container": "#141b2f",
        "on-surface-variant": "#444748",
        "tertiary-fixed": "#dce1fe",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#1c1b1b",
        "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#5a4227",
        "tertiary": "#000000",
        "background": "#fdf9f2",
        "secondary-fixed": "#ffddba",
        "primary": "#000000",
        "error-container": "#ffdad6",
        "primary-fixed": "#e5e2e1",
        "on-tertiary-fixed-variant": "#40465d",
        "on-primary-fixed-variant": "#474646",
        "inverse-on-surface": "#f4f0e9",
        "surface-container-low": "#f7f3ec",
        "secondary-fixed-dim": "#e3c09d",
        "on-secondary": "#ffffff",
        "surface": "#fdf9f2",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "outline": "#747878",
        "on-primary-container": "#858383",
        "tertiary-fixed-dim": "#c0c5e1",
        "surface-bright": "#fdf9f2",
        "secondary-container": "#fed9b4"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      spacing: {
        "mobile-margin": "1.5rem",
        "hairline": "1px",
        "grid-gutter": "2rem",
        "section-padding": "8rem",
        "grid-margin": "4rem"
      },
      fontFamily: {
        "display-lg-mobile": ["Outfit", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Outfit", "sans-serif"],
        "technical-data": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Outfit", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg-mobile": ["48px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "300" }],
        "label-sm": ["12px", { "lineHeight": "1.5", "letterSpacing": "0.12em", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "1.8", "letterSpacing": "0.02em", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.4", "letterSpacing": "0.1em", "fontWeight": "300" }],
        "technical-data": ["11px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400" }],
        "display-lg": ["80px", { "lineHeight": "1.1", "letterSpacing": "0.15em", "fontWeight": "300" }]
      }
    }
  },
  plugins: [forms]
};
