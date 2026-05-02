---
name: Vibrant Value
colors:
  surface: '#fbf8ff'
  surface-dim: '#d9d9e7'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ededfb'
  surface-container-high: '#e7e7f5'
  surface-container-highest: '#e1e1ef'
  on-surface: '#191b25'
  on-surface-variant: '#434656'
  inverse-surface: '#2e303a'
  inverse-on-surface: '#f0effe'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd400'
  on-secondary-container: '#6f5c00'
  tertiary: '#00556d'
  on-tertiary: '#ffffff'
  tertiary-container: '#006f8d'
  on-tertiary-container: '#c2ebff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#ffe170'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#bce9ff'
  tertiary-fixed-dim: '#6cd3fc'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#004d63'
  background: '#fbf8ff'
  on-background: '#191b25'
  surface-variant: '#e1e1ef'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  grid_columns: '12'
  gutter: 24px
  margin_mobile: 16px
  margin_desktop: 64px
  stack_sm: 12px
  stack_md: 24px
  stack_lg: 48px
---

## Brand & Style
This design system centers on a "Hyper-Modern Functional" style, blending clean minimalism with high-energy accents. The brand personality is rooted in the "smart-buy" culture of Pakistan, targeting youth and families who seek trendiness without a high price tag. The visual language conveys accessibility through generous white space and trustworthiness through structured layouts, while injecting fun through vibrant pops of color and fluid interactions.

The emotional response should be one of "discovery and delight"—the feeling of finding a hidden gem for a bargain. Motion is key to this experience; every interaction should feel snappy yet soft, using smooth transitions to reinforce the friendly nature of the brand.

## Colors
The palette balances a "Vibrant Blue" for trust and authority with a "Cheerful Yellow" for energy and value signaling. Clean white serves as the primary canvas to ensure the interface feels modern and uncluttered. 

To prevent the high-contrast primary colors from feeling overwhelming, a series of soft pastel accents are used for category tags, background washes, and secondary UI elements. These pastels add a "trendy" aesthetic popular with younger demographics. Functional colors (success, error, warning) are softened to match the pastel theme while maintaining high legibility.

## Typography
This design system utilizes **Plus Jakarta Sans** for its optimistic, rounded terminals and contemporary geometric structure. It strikes the perfect balance between a friendly "neighborhood store" vibe and a professional e-commerce platform.

Headlines use a heavier weight (Bold/ExtraBold) with slight negative letter-spacing to create a punchy, editorial look for deals and price points. Body text is kept airy with a 1.6 line-height to ensure effortless readability on mobile devices, which is the primary touchpoint for the target audience in Pakistan.

## Layout & Spacing
A 12-column fixed grid is used for desktop to maintain a premium, organized feel, while mobile transitions to a fluid single-column layout with 16px side margins. 

The spacing rhythm follows an 8px base unit. To emphasize the "clean" aspect of the brief, the system utilizes "intentional voids"—larger vertical gaps (stack_lg) between sections to prevent the "dollar store" inventory from feeling cluttered or overwhelming. Gutters are generous at 24px to ensure product cards have room to breathe.

## Elevation & Depth
This design system uses **Ambient Shadows** and **Tonal Layers** rather than heavy borders. Depth is created through soft, diffused shadows with a slight Blue-tint (#0052FF at 4-8% opacity) to make components feel like they are floating on a clean surface.

- **Level 0 (Base):** Clean white background.
- **Level 1 (Cards):** Subtlest shadow, used for product listings.
- **Level 2 (Hover/Active):** Increased shadow spread and a slight upward translation (-4px) to simulate physical lift.
- **Level 3 (Modals/Overlays):** Deep, soft shadows with a background blur (12px) on the underlying content to focus user attention.

## Shapes
The shape language is "Approachable Geometric." A consistent 1rem (16px) radius is applied to product cards and containers to soften the UI. 

Interactive elements like buttons use a "Pill-shape" (fully rounded) to maximize the "fun" and "youthful" brand personality. Input fields use a slightly tighter 12px radius to maintain a sense of structure and data-entry efficiency. These rounded corners are essential to differentiating the store from traditional, rigid discount retailers.

## Components

### Buttons
Primary buttons are Pill-shaped, using the Vibrant Blue with white text. They feature a 200ms ease-out transition that scales the button slightly (1.02x) on hover. Secondary buttons use a "Ghost" style with a 2px blue border or a soft-pastel background.

### Cards
Product cards are the core of this design system. They feature a white background, Level 1 shadow, and a 16px corner radius. On hover, the shadow deepens to Level 2 and the product image scales slightly. Price tags are displayed in a "Cheerful Yellow" pill-badge in the top-right corner of the image.

### Chips & Tags
Used for categories (e.g., "Kitchen," "Tech," "Toys"). These use the soft pastel palette (e.g., Soft Pink background with Dark Pink text) to create a color-coded browsing experience that feels organized yet playful.

### Input Fields
Clean, 12px rounded borders in a light gray. On focus, the border transitions to Vibrant Blue with a soft blue outer glow (3px).

### Motion Tokens
- **Hover Transitions:** 200ms ease-out.
- **Page Transitions:** 400ms "slide-up" with fade.
- **Feedback Loops:** Quick 100ms spring for "Add to Cart" button clicks.

### Exclusive Components
- **"The Dollar Deal" Badge:** A rotating or animated circular badge for featured items.
- **Progressive Bundle Bar:** A visual tracker showing how close the user is to free shipping or a bundle discount, using a gradient from Tertiary Blue to Primary Blue.