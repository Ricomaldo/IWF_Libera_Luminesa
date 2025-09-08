# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Libera Luminosa, a wellness therapy practice specializing in Olfactotherapy, Olfactocoaching, and Reflexology. The site is built with vanilla HTML, SCSS, and JavaScript - no build tools or package managers are required.

## Key Commands

### SCSS Compilation
```bash
# Compile SCSS with watch mode (development)
sass --watch scss/main.scss:css/main.css

# Compile SCSS once (production)
sass scss/main.scss:css/main.css --style=compressed --no-source-map
```

### Local Development
```bash
# Using Python's built-in server
python -m http.server 8000

# Or using PHP's built-in server
php -S localhost:8000
```

## Architecture

### File Structure
- **HTML Pages**: Static pages in root directory (index.html, contact.html, mes-accompagnements.html, mon-parcours.html, mentions-legales.html, merci.html)
- **SCSS**: Modular structure using Sass's @use system
  - `scss/abstracts/`: Variables, mixins, functions
  - `scss/base/`: Reset, typography, utilities
  - `scss/components/`: Buttons, cards, forms, hero sections
  - `scss/layout/`: Header, navigation, footer, grid
  - `scss/pages/`: Page-specific styles
  - `scss/main.scss`: Entry point importing all modules
- **JavaScript**: Minimal JS for interactions
  - `js/main.js`: Core functionality (smooth scroll, navigation, forms, lazy loading)
  - `js/navigation.js`: Mobile menu and navigation handling
- **Assets**: Images organized by purpose in `assets/images/`

### Design System
- **Colors**: 
  - Primary: Golden (#D4AF37)
  - Secondary: Pearl white (#F5F1E8)
  - Accent: Wood brown (#8B6F47)
  - Text: Anthracite gray (#2F2F2F)
- **Typography**: Playfair Display for headings, Open Sans for body text
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

### Key Features
- Lazy loading for videos and maps (click-to-load)
- Smooth scrolling for anchor links
- Active navigation state management
- Contact form with client-side validation
- Timeline animations on the parcours page
- Responsive mobile navigation with burger menu

### Business Context
- Client: Séverine Kohler - wellness therapist
- Target audience: 40+ years, focus on accessibility and readability
- Design philosophy: Feminine, soft, professional spa-like aesthetic
- Performance: Optimized for fast loading on VPS hosting