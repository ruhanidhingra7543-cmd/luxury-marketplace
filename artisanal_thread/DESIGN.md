---
name: Artisanal Thread
colors:
  surface: '#fbfbe2'
  surface-dim: '#dbdcc3'
  surface-bright: '#fbfbe2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5dc'
  surface-container: '#efefd7'
  surface-container-high: '#eaead1'
  surface-container-highest: '#e4e4cc'
  on-surface: '#1b1d0e'
  on-surface-variant: '#464653'
  inverse-surface: '#303221'
  inverse-on-surface: '#f2f2d9'
  outline: '#767684'
  outline-variant: '#c6c5d5'
  surface-tint: '#4b53bc'
  primary: '#00003c'
  on-primary: '#ffffff'
  primary-container: '#000080'
  on-primary-container: '#777eea'
  inverse-primary: '#bfc2ff'
  secondary: '#9f402d'
  on-secondary: '#ffffff'
  secondary-container: '#fd876f'
  on-secondary-container: '#732010'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#00006e'
  on-primary-fixed-variant: '#3239a3'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a5'
  on-secondary-fixed: '#3e0500'
  on-secondary-fixed-variant: '#802918'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbfbe2'
  on-background: '#1b1d0e'
  surface-variant: '#e4e4cc'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 48px
---

## Brand & Style

The design system is rooted in **Minimalist Luxury**, balancing the tactile warmth of high-end textiles with the precision of a modern marketplace. It targets a sophisticated demographic of interior designers and collectors who value provenance and quality over mass production.

The aesthetic avoids visual clutter to let high-resolution photography of rug textures and weaves take center stage. By utilizing a "Quiet Luxury" approach, the UI evokes an emotional response of serenity, trust, and exclusivity. The interface remains understated, serving as a clean gallery frame for the products themselves.

## Colors

The palette is anchored by a warm, paper-like background (**Cream**) and sophisticated structural elements in **Navy Blue**. 

- **Primary (Navy Blue):** Used for core navigation, high-hierarchy typography, and primary call-to-action buttons. It provides a sense of authority and timelessness.
- **Secondary (Terracotta):** Used for highlighting craftsmanship, natural materials, and promotional accents. It adds warmth and an earthy connection to the textile origin.
- **Tertiary (Gold):** Reserved for "Premium" or "Limited Edition" indicators, ratings, and subtle decorative accents. Use sparingly to maintain a refined feel.
- **Neutral (Beige):** Employed for surface containers, search bars, and subtle borders to create soft contrast against the cream background.

## Typography

The typography system utilizes **Inter** to maintain a modern, systematic clarity that contrasts beautifully with organic rug patterns. 

- **Display & Headlines:** Use tight letter-spacing for a high-end, editorial feel. 
- **Body Text:** Generous line heights ensure readability for long-form product descriptions regarding weave density and material history.
- **Caps Labels:** Used for category headers and utility labels (e.g., "KNOT COUNT", "MATERIAL") to create a structured, professional hierarchy.

## Layout & Spacing

This design system employs a **Fluid Grid** with generous safe areas to mimic the layout of a luxury lifestyle magazine. 

- **Mobile:** A 4-column grid with 24px outer margins to provide "breathing room" for the content.
- **Vertical Rhythm:** A base 8px unit drives all spacing. Use large gaps (48px+) between distinct sections (e.g., "Featured Collection" vs "Designer Spotlight") to reinforce the minimalist aesthetic.
- **Horizontal Scrolling:** Product carousels should peek from the right edge to indicate more content without cluttering the screen.

## Elevation & Depth

Depth is used to simulate the physical layering of fabrics. We avoid harsh shadows in favor of **Ambient, Tinted Depth**.

- **Surface Layering:** Use the Neutral Beige for "Surface" containers sitting on the Cream "Background."
- **Soft Shadows:** Floating elements like primary buttons and product cards utilize a multi-layered shadow (0px 10px 30px) with a very low opacity (5-8%) Navy Blue tint. This creates a "lifted" effect rather than a "floating" one.
- **Zero-Border Style:** Rely on subtle tonal changes (Beige on Cream) rather than outlines to define card boundaries.

## Shapes

The shape language is defined by **pronounced, friendly curves** that evoke the softness of the textiles.

- **Product Cards:** Must use a 24px corner radius (`rounded-xl` context) to create a soft, inviting frame for product imagery.
- **Inputs & Buttons:** Use a consistent 12px-16px radius.
- **Interactive Icons:** Should be contained within circular or highly rounded containers to maintain the organic flow of the design.

## Components

- **Primary Buttons:** Navy Blue background with White or Gold text. Use a tall padding (16px vertical) for a premium, tactile feel.
- **Product Cards:** The centerpiece of the UI. Images should have a subtle zoom effect on tap. Backgrounds of the cards should be the Neutral Beige.
- **Price Chips:** Simple, high-contrast Navy text on a Gold-tinted background to denote value without being "loud."
- **Filter Chips:** Pill-shaped with a thin Navy border when unselected, and solid Terracotta when active.
- **Input Fields:** Use "Floating Labels" with the Cream background and a subtle Beige bottom-border only, or a fully rounded Beige container.
- **Textile Detail Tabs:** Use a minimalist underline indicator in Navy Blue to switch between "Description," "Origin," and "Shipping."
- **Wholesale Badge:** A distinct, Gold-bordered architectural label for B2B accounts.