import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouterState,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap',
      },
      { rel: 'stylesheet', href: '/styles.css' },
      { rel: 'icon', type: 'image/svg+xml', href: '/logo-binary.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function Navbar() {
  const routerState = useRouterState()
  const isHome = routerState.location.pathname === '/'
  const servicesHref = isHome ? '#services' : '/#services'
  const solutionsHref = isHome ? '#solutions' : '/#solutions'
  const testimonialsHref = isHome ? '#testimonials' : '/#testimonials'

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src="/logo-binary.svg" alt="ApplyLogics" className="binary-logo" />
            <span className="logo-text glitch-text" data-text="ApplyLogics">ApplyLogics</span>
          </Link>
        </div>
        <button className="mobile-menu-btn" aria-label="Toggle menu">Menu</button>
        <div className="nav-menu">
          <a href={servicesHref} className="nav-link">Services</a>
          <a href={solutionsHref} className="nav-link">Solutions</a>
          <a href={testimonialsHref} className="nav-link">Testimonials</a>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="glitch-text" data-text="ApplyLogics">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <img src="/logo-binary.svg" alt="ApplyLogics Logo" className="binary-logo" style={{ height: '32px', marginRight: '10px' }} />
                ApplyLogics
              </Link>
            </h3>
            <p>Full-Service Technology Company</p>
            <p>End-to-end digital solutions for businesses</p>
            <div id="contact" style={{ marginTop: '24px' }}>
              <h4>Contact</h4>
              <p><a href="mailto:hello@applylogics.com" style={{ textDecoration: 'none', color: 'inherit' }}>hello@applylogics.com</a></p>
              <p><a href="tel:3523251006" style={{ textDecoration: 'none', color: 'inherit' }}>352-325-1006</a></p>
            </div>
            <div className="social-media">
              <div className="social-icons">
                <a href="https://github.com/applylogics" className="social-icon github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
                <a href="https://facebook.com/applylogics" className="social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a>
                <a href="https://dev.to/applylogics" className="social-icon devplusplus" target="_blank" rel="noopener noreferrer" aria-label="Dev++"></a>
                <a href="https://bsky.app/profile/applylogics" className="social-icon bluesky" target="_blank" rel="noopener noreferrer" aria-label="Bluesky"></a>
                <a href="https://x.com/applylogics" className="social-icon twitter" target="_blank" rel="noopener noreferrer" aria-label="X"></a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/web-design-development">Web Design &amp; Development</Link></li>
              <li><Link to="/hosting-server-setup">Hosting &amp; Server Setup</Link></li>
              <li><Link to="/ai-business-automation">AI Business Automation</Link></li>
              <li><Link to="/technology-consulting">Technology Consulting</Link></li>
              <li><Link to="/maintenance-support">Maintenance &amp; Support</Link></li>
              <li><Link to="/custom-development">Custom Development</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/digital-presence">Digital Presence</Link></li>
              <li><Link to="/business-automation">Business Automation</Link></li>
              <li><Link to="/technical-infrastructure">Technical Infrastructure</Link></li>
              <li><Link to="/ongoing-partnership">Ongoing Partnership</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Brands</h4>
            <ul>
              <li><a href="https://ogtheproject.com" target="_blank" rel="noopener noreferrer">OG The Project</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ApplyLogics Inc. All rights reserved. |{' '}
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '10px' }}>Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />

        {/* GSAP from CDN */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js" />
        <script src="/script.js" />

        <Scripts />
      </body>
    </html>
  )
}
