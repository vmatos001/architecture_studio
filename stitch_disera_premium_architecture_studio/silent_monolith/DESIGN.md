---
name: Silent Monolith
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#74593c'
  on-secondary: '#ffffff'
  secondary-container: '#fed9b4'
  on-secondary-container: '#795e40'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#141b2f'
  on-tertiary-container: '#7d839c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffddba'
  secondary-fixed-dim: '#e3c09d'
  on-secondary-fixed: '#2a1802'
  on-secondary-fixed-variant: '#5a4227'
  tertiary-fixed: '#dce1fe'
  tertiary-fixed-dim: '#c0c5e1'
  on-tertiary-fixed: '#141b2f'
  on-tertiary-fixed-variant: '#40465d'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
  travertine: '#EAE6DF'
  obsidian: '#121212'
  shattered-plaster: '#8C92AC'
  brushed-bronze: '#9E8060'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 80px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: 0.15em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '300'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.12em
  technical-data:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  grid-margin: 4rem
  grid-gutter: 2rem
  section-padding: 8rem
  mobile-margin: 1.5rem
  hairline: 1px
---

## Brand & Style

The brand identity is rooted in the concept of "Quiet Luxury"—a philosophy that prioritizes material honesty, intellectual rigor, and architectural permanence over fleeting trends. The UI serves as a digital extension of a physical gallery, where the "white space" is treated as a structural material itself. 

The design style is a fusion of **Minimalism** and **Architectural Structuralism**. It employs a visible, hair-line grid system reminiscent of technical blueprints and construction drawings. This framework provides a sense of order and engineering precision, while generous margins and fluid, cinematic transitions evoke a feeling of atmospheric luxury and calm.

The emotional response should be one of "intellectual serenity"—a sophisticated environment that feels both grounded in stone and light as air. Every interaction is deliberate, slow, and purposeful.

## Colors

The palette is derived from the raw materials of high-end European architecture:
- **Travertine (Neutral):** The canvas for the entire experience. This textured off-white provides a warmer, more human foundation than pure white, absorbing digital "blue light" for a more tactile feel.
- **Obsidian (Primary):** Used for structural elements, typography, and the defining 1px grid lines. It represents solidity and rigor.
- **Brushed Bronze (Secondary/Accent):** Reserved for subtle moments of interaction—active states, underlines, or small functional icons—mimicking the patina of metal hardware.
- **Shattered Plaster (Tertiary):** A cool-toned grey used for secondary information or background depth, mimicking the soft shadows cast on concrete surfaces.

## Typography

The typographic hierarchy establishes a dialogue between geometry and utility. 

**Outfit** is the display voice. It should always be used in Light (300) or Regular (400) weights with aggressive letter-spacing to create a sense of scale and "air." For main titles, uppercase is preferred to emphasize the architectural rhythm.

**Inter** provides the functional counterpart. It is used for all body copy and technical specifications. The line-height for body text is intentionally generous (1.8) to maintain readability and the editorial feel. Technical data labels (e.g., "Ubicación", "Año") use a smaller, uppercase Inter with medium weight for a "blueprint-label" aesthetic.

## Layout & Spacing

This design system utilizes a **Visible Fixed Grid** model. On desktop, the layout is governed by a 12-column grid. The grid lines themselves are rendered as 1px lines in Obsidian at 10% opacity, creating a "schematic" background.

- **Margins:** Large 64px (4rem) margins ensure content never feels crowded.
- **Section Padding:** Vertically, sections are separated by 128px (8rem) to force the user to slow down and appreciate the negative space.
- **Mobile Adaptivity:** On mobile, the grid collapses to 4 columns with 24px (1.5rem) margins. The visible grid lines remain but are simplified to vertical borders only.
- **Content Reflow:** Text blocks are often constrained to 6 or 8 columns (centered) to prevent excessively long line lengths, while hero images may span the full 12 columns for maximum impact.

## Elevation & Depth

In keeping with the "monolithic" theme, traditional shadows are almost entirely avoided. Instead, depth is conveyed through:

1.  **Tonal Overlays:** Using different opacities of Travertine or Shattered Plaster to distinguish between the background and active containers.
2.  **Hairline Outlines:** 1px Obsidian lines serve as the primary divider between elements. This "Low-contrast outline" approach maintains a flat, planar aesthetic.
3.  **Z-Axis Sliding:** Transitions between pages or sections use slow, linear-ease "slides," where one surface appears to move over another like a sliding stone door.
4.  **Glassmorphism (Minimal):** Background blurs (20px+) are used exclusively for navigation overlays to maintain a sense of the architecture beneath while focusing on the menu.

## Shapes

The shape language is strictly **Sharp (0)**. 

In architecture of this caliber, precision is found in the corner and the edge. There are no rounded corners in this system. Buttons, input fields, image containers, and cards all utilize 90-degree angles. This reinforces the feeling of structural integrity and modernism.

## Components

- **Buttons:** Sharp-edged boxes with no fill and 1px Obsidian borders. Upon hover, the background fills slowly with Brushed Bronze and the text shifts to Travertine.
- **Cards:** Defined by 1px hairline borders. Image-heavy, with text labels placed in the bottom-left corner using `technical-data` styling.
- **Input Fields:** A single 1px Obsidian line at the bottom. The label sits above in `label-sm` style. The "focus" state changes the line color to Brushed Bronze.
- **Progress Indicators:** A horizontal 1px line that fills as the user scrolls or as images load, emphasizing the linear nature of the grid.
- **Navigation:** Top-aligned, minimal text links in `label-sm`. The active link is indicated by a 1px Brushed Bronze underline that spans the full width of the grid column it occupies.
- **Technical Tables:** Project data (Superficie, Materiales) is presented in a two-column list separated by 1px horizontal lines, evoking a bill of quantities or a spec sheet.