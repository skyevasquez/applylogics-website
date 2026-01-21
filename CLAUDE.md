# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ApplyLogics is a static marketing website for a full-service technology company. The site uses a modern cyberpunk/dark monokai theme with GSAP animations and is built with vanilla HTML, CSS, and JavaScript.

## Development Setup

**Testing locally:**
```bash
# Simply open index.html in a browser
open index.html  # macOS
```

**No build system** - This is a static site with no compilation or bundling required.

## Core Architecture

### File Structure
- **index.html** - Homepage with services, solutions, and testimonials sections
- **about.html** - About page
- **contact.html** - Contact page
- **[service-name].html** - Individual service pages (web-design-development.html, hosting-server-setup.html, etc.)
- **[solution-name].html** - Individual solution pages (digital-presence.html, business-automation.html, etc.)
- **styles.css** - Single CSS file with all styles (1285 lines)
- **script.js** - Single JavaScript file with GSAP animations (542 lines)
- **favicon.png** - CPU chip logo

### Design System

**Theme: Dark Monokai Cyberpunk**
- Font: JetBrains Mono (monospace) for all text
- Color Palette (CSS variables in styles.css):
  - Background: `--bg-darker: #121212`, `--bg-dark: #1e1e1e`, `--bg-card: #2d2a2e`
  - Accent colors: `--accent-cyan: #66d9ef` (primary), `--accent-magenta: #f92672`, `--accent-yellow: #e6db74`, `--accent-green: #a6e22e`
  - Text: `--text-primary: #fcfcfa`, `--text-secondary: #9d9c9a`, `--text-muted: #75746f`
  - Effects: Glitch effects, neon glows, RGB split, scanlines, noise overlay

**Key Visual Effects:**
- `.glitch-text` - Text glitch effect with data-text attribute
- `.gradient-text` - Cyan/magenta/yellow gradient
- Scanline overlay on body::before
- Noise texture on body::after
- Animated grid background on hero section
- Neon glow effects on borders and text

### JavaScript Architecture (script.js)

**GSAP Setup:**
- Registers ScrollTrigger and TextPlugin
- All animations use GSAP timelines and tweens
- Configuration object at top defines easing curves and colors

**Key Animation Systems:**
1. **Hero animations** - Sequential timeline on page load (lines 136-183)
2. **Scroll triggers** - Cards, titles, testimonials animate on scroll into view
3. **Interactive effects**:
   - Magnetic buttons (lines 384-408)
   - 3D card tilt on hover (lines 351-378)
   - Glitch text effect on hover/load (lines 188-213)
4. **Navigation** - Smooth scroll, mobile menu, navbar background change on scroll
5. **Random glitch** - Periodic RGB split effect (lines 499-524)

**Important patterns:**
- GSAP sets initial state with `gsap.set()`, then animates with timelines
- ScrollTrigger uses 'play none none reverse' for reversible animations
- Stagger delays for card grids (index * 0.1)
- Reduced motion support (lines 538-541)

### HTML Structure Pattern

All pages follow this structure:
```
- Skip link (accessibility)
- navbar (fixed)
  - nav-logo with logo-link (image + glitch-text)
  - mobile-menu-btn
  - nav-menu (becomes mobile dropdown)
- hero section
  - hero-badge (with pulsing dot)
  - hero-main-title (with gradient-text)
  - hero-subtitle
  - hero-description
  - hero-cta (buttons)
- content sections
- footer
  - footer-section (4 columns: About, Services, Solutions, Our Brands)
  - social-icons (GH, FB, D+, BS, X)
  - footer-bottom (copyright)
- GSAP scripts (Core, ScrollTrigger, TextPlugin)
- script.js
```

### CSS Organization (styles.css)

1. **CSS Variables** (:root) - Lines 4-62
2. **Reset & Base** - Lines 64-120
3. **Glitch Effects** - Lines 149-218
4. **Navigation** - Lines 219-318
5. **Hero Section** - Lines 319-473
6. **Buttons** - Lines 474-558
7. **Section Titles** - Lines 559-593
8. **Value Props/Services** - Lines 595-699
9. **Focus/Solutions** - Lines 700-791
10. **Partners/Testimonials** - Lines 792-867
11. **Footer** - Lines 869-997
12. **Scroll to Top Button** - Lines 999-1045
13. **Mobile/Responsive** - Lines 1047-1172
14. **Animations & Utilities** - Lines 1174-1285

## Navigation Structure

**Main nav links:**
- Services → index.html#services
- Solutions → index.html#solutions
- Testimonials → index.html#testimonials
- About → about.html
- Contact → contact.html

**Service pages** (linked from footer):
- web-design-development.html
- hosting-server-setup.html
- ai-business-automation.html
- technology-consulting.html
- maintenance-support.html
- custom-development.html

**Solution pages** (linked from footer):
- digital-presence.html
- business-automation.html
- technical-infrastructure.html
- ongoing-partnership.html

## Responsive Design

**Breakpoints:**
- `max-width: 1024px` - Reduce section padding, 2-column footer
- `max-width: 768px` - Mobile nav menu, single-column grids
- `max-width: 480px` - Further reduced padding, smaller text

**Mobile nav behavior:**
- `.mobile-menu-btn` appears, toggles `.mobile-active` class on `.nav-menu`
- Menu drops down from fixed navbar with backdrop blur

## Animation Guidelines

**When adding new animations:**
- Use GSAP, not CSS animations (except for infinite loops like glitch effects)
- Set initial state with `gsap.set()` before animating
- Use ScrollTrigger for scroll-based reveals
- Use stagger for lists/grids
- Respect prefers-reduced-motion (globalTimeline.timeScale(10))

**Common GSAP patterns:**
```javascript
// Scroll trigger reveal
gsap.from('.element', {
    scrollTrigger: {
        trigger: '.element',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
});

// Magnetic button effect
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
});
```

## External Dependencies

**CDN Scripts (loaded from HTML):**
- GSAP Core: gsap.min.js (3.12.5)
- ScrollTrigger: ScrollTrigger.min.js (3.12.5)
- TextPlugin: TextPlugin.min.js (3.12.5)

**Fonts:**
- JetBrains Mono (Google Fonts, weights: 300, 400, 500, 600, 700, 800)

## Git Workflow

**Modified files** (from git status):
- All core files have uncommitted changes from recent redesign
- Last commit: "Add CPU chip favicon, update color scheme to gold/red..."
- Previous: "Initial commit: Modern Framer/Webflow-inspired redesign"

**Main branch:** `main`

## Validation & Testing

- HTML validation: https://validator.w3.org/
- CSS validation: https://jigsaw.w3.org/css-validator/
- Test in browser DevTools for responsive design
- Check animations with GSAP DevTools if available
- Verify glitch effects and hover states
- Test mobile menu on small viewports
- Verify accessibility (skip links, ARIA labels, keyboard navigation)

## Brand Information

- **Company:** ApplyLogics Inc.
- **Tagline:** Full-Service Technology Company / Agentic Systems for the Enterprise
- **Contact:** hello@applylogics.com, 352-325-1006
- **Social:** GitHub, Facebook, Dev++, Bluesky, X
- **Partner brands:** OG The Project (ogtheproject.com)
