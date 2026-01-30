---
name: brand-guidelines
description: Applies Rangeway's official brand colors, typography, and visual style to artifacts. Use this when designing UIs, generating assets, or styling content to match the Rangeway brand identity.
license: Complete terms in LICENSE.txt
---

# Rangeway Brand Guidelines

## Overview

Use this skill to access Rangeway's official brand identity. Rangeway is a premium EV charging network that prioritizes hospitality and experience.

**Keywords**: rangeway, ev charging, premium hospitality, warm, charcoal, raleway, source sans

## Brand Guidelines

### Colors

**Primary Palette:**
- **Charcoal**: `#2d2d2d` (RGB 45, 45, 45) - Backgrounds, primary text, logos.
- **Warm**: `#f4a855` (RGB 244, 168, 85) - Accents, CTAs, destination dots.

**Secondary Palette:**
- **Cream**: `#f5f1eb` (RGB 245, 241, 235) - Light backgrounds, diverse sections.
- **Sage**: `#4a5d52` (RGB 74, 93, 82) - Seasonal, campaigns, nature-aligned accents.

**Neutrals:**
- **White**: `#ffffff`
- **Gray-100**: `#f8f7f5` (Lightest gray)
- **Gray-200**: `#e5e5e5` (Borders/Dividers)
- **Gray-400**: `#999999` (Subtle text)
- **Gray-600**: `#666666` (Body text on light backgrounds)

### Typography

**Headings:**
- **Font**: Raleway
- **Weight**: Bold (700)
- **Style**: Title Case
- **Usage**: Main headlines (H1-H3), wordmarks.

**Body:**
- **Font**: Source Sans 3 (or Source Sans Pro)
- **Weight**: Regular (400)
- **Usage**: Body copy, descriptions, UI elements.
- **Fallbacks**: San-serif system fonts (Inter, Helvetica, Arial).

### Visual Style & Composition

**Aesthetic:**
- **Theme**: "Golden Hour" warmth, premium hospitality, journey.
- **Lighting**: Warm, inviting, soft shadows.
- **Texture**: Clean matte surfaces, high-quality photography.

**UI Elements:**
- **Rounded Corners**:
    - Cards: `12px`
    - Large Containers: `16px`
    - Small Icons/Buttons: `6px`
- **Spacing**: Generous whitespace to convey luxury and calm.
- **Cards**:
    - Light: `var(--gray-100)` or White with subtle shadow `0 2px 8px rgba(0,0,0,0.06)`.
    - Dark: `var(--charcoal)` with White text.
    - Warm: Gradient or solid `var(--warm)`.

### Voice & Tone

- **Thoughtful**: Precise and intentional communications.
- **Welcoming**: Hospitality-first, treating users as guests.
- **Elevated**: Premium but accessible, avoiding utility jargon.

### Logo Assets

**Location**: `logos/rangeway-logo-assets/`
- **Lockups**: `logos/rangeway-logo-assets/lockup/`
- **Marks**: `logos/rangeway-logo-assets/mark/`
- **App Icons**: `logos/rangeway-logo-assets/app-icons/`

**SVG Path (Mark)**:
```html
<path d="M20 100 L20 16 C20 10 24 6 30 6 L56 6 C72 6 80 16 80 32 C80 46 72 54 58 56 L82 100" 
      stroke="currentColor" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="58" cy="32" r="10" fill="currentColor"/>
```

## Usage Rules

1. **Logo Usage**: 
   - **Digital/Signage**: Primary (Charcoal bg)
   - **Marketing/Merch**: Warm bg
   - **Partnerships/Docs**: Light (Cream/White bg)
   - See `rangeway-brand-final.html` for comprehensive usage table.
2. **Clear Space**: Always maintain clear space equal to the height of the accent dot.
3. **Contrast**: Ensure legibility. Use White text on Charcoal/Sage/Warm. Charcoal on Cream/White.
4. **Imagery**: Prioritize images that show human connection and comfort, not just hardware.
