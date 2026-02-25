import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/digital-presence')({
  head: () => ({
    meta: [
      { title: 'Digital Presence - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides complete digital presence solutions including web design, development, hosting, and ongoing maintenance for maximum business impact.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: DigitalPresencePage,
})

function DigitalPresencePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Solution
            </div>
            <h1 className="hero-main-title">Digital Presence</h1>
            <h2 className="hero-subtitle">Complete Web Presence Solutions</h2>

            <div className="hero-description">
              <p>
                In today's digital landscape, your online presence is often the first interaction customers have with
                your business. A comprehensive digital presence goes beyond just having a website.
              </p>
              <p>
                Our solutions encompass everything from strategic web design and development to reliable hosting and
                ongoing maintenance, ensuring your business performs exceptionally well online.
              </p>
            </div>

            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <a href="/#solutions" className="btn-secondary">
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Our Digital Presence Services</h2>
          <p className="section-subtitle">Everything you need for a powerful online presence</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Strategic Web Design</h3>
              <h4>Custom design that reflects your brand</h4>
              <p>
                Visually stunning websites that capture your brand essence and resonate with your target audience.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Responsive Development</h3>
              <h4>Flawless performance across all devices</h4>
              <p>Fast-loading websites that work seamlessly on desktops, tablets, and mobile devices.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Reliable Hosting</h3>
              <h4>Secure, fast, and always available</h4>
              <p>Enterprise-grade hosting with regular backups, security monitoring, and 24/7 support.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Ongoing Maintenance</h3>
              <h4>Continuous improvement and support</h4>
              <p>Regular updates, security patches, performance optimization, and content updates.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>SEO Optimization</h3>
              <h4>Get found by your target audience</h4>
              <p>SEO best practices to help your website rank higher in search results.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Analytics &amp; Reporting</h3>
              <h4>Data-driven insights for growth</h4>
              <p>Detailed analytics and reporting to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="focus-section">
        <div className="container">
          <h2>Key Benefits</h2>
          <p className="focus-subtitle">Why choose our digital presence solutions</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>Professional Image</h3>
              <p>Establish credibility and trust with a polished, professional online presence.</p>
            </div>

            <div className="focus-item">
              <h3>Increased Visibility</h3>
              <p>Get discovered by more potential customers through improved search rankings.</p>
            </div>

            <div className="focus-item">
              <h3>Better Engagement</h3>
              <p>Keep visitors engaged with intuitive navigation and compelling content.</p>
            </div>

            <div className="focus-item">
              <h3>Measurable Results</h3>
              <p>Track your success with comprehensive analytics and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              Let us help you create a powerful online presence that drives real business results. From initial design
              to ongoing optimization, we're your partner in digital success.
            </p>
            <div className="testimonial-author">
              <strong>Contact us today</strong>
              <span className="author-title">hello@applylogics.com | 352-325-1006</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
