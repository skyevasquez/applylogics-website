# Agent Guidelines for ApplyLogics Website

## Build/Lint/Test Commands
- No build system configured - static HTML/CSS/JS project
- Open `index.html` in browser to test locally
- Use browser DevTools for debugging and testing
- Validate HTML: https://validator.w3.org/
- Validate CSS: https://jigsaw.w3.org/css-validator/

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Follow markdown-style syntax in content (# for h1, ## for h2, etc.)
- Use backticks (`) for inline code blocks
- Triple backticks (```) for multi-line code blocks
- Include proper meta tags and accessibility attributes

### CSS
- Use JetBrains Mono and Fira Code fonts exclusively
- Dark theme: background #1a202c, text #e2e8f0
- Use CSS custom properties for consistent colors
- Mobile-first responsive design with breakpoints at 1024px, 768px, 480px
- Smooth transitions and hover effects for interactive elements

### JavaScript
- Use ES6+ features
- Follow event delegation pattern
- Implement smooth scrolling and intersection observers
- Add accessibility features (ARIA labels, keyboard navigation)
- Mobile-responsive menu functionality

### Naming Conventions
- Use kebab-case for CSS classes and IDs
- Use camelCase for JavaScript variables and functions
- Use descriptive, semantic names
- Follow BEM-like naming for components

### Error Handling
- Graceful degradation for unsupported features
- Console logging for debugging (remove in production)
- Fallback styles for older browsers
- Proper error handling for async operations