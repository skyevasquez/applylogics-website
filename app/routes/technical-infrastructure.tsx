import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/technical-infrastructure')({
  head: () => ({
    meta: [
      { title: 'Technical Infrastructure - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides robust technical infrastructure including server setup, secure hosting, and reliable systems to support your business operations.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: TechnicalInfrastructurePage,
})

function TechnicalInfrastructurePage() {
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
            <h1 className="hero-main-title">Technical Infrastructure</h1>
            <h2 className="hero-subtitle">Robust Systems &amp; Secure Hosting</h2>

            <div className="hero-description">
              <p>
                Robust server setup, secure hosting, and reliable technical infrastructure to support your business
                operations. Build your business on a solid foundation.
              </p>
              <p>
                From initial setup to ongoing management, we ensure your technical infrastructure is always reliable
                and secure.
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

      {/* Infrastructure Services Section */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Infrastructure Services</h2>
          <p className="section-subtitle">Enterprise-grade infrastructure for your business</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Cloud Infrastructure</h3>
              <h4>Scalable cloud solutions</h4>
              <p>AWS, Google Cloud, and Azure setup and management for reliable, scalable applications.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Server Management</h3>
              <h4>Fully managed servers</h4>
              <p>Complete server management including updates, security, monitoring, and optimization.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Security Implementation</h3>
              <h4>Enterprise-grade security</h4>
              <p>SSL certificates, firewall configuration, DDoS protection, and regular security audits.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Backup &amp; Recovery</h3>
              <h4>Data protection systems</h4>
              <p>Automated backup solutions with quick recovery options to protect critical data.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>Monitoring &amp; Alerts</h3>
              <h4>24/7 system monitoring</h4>
              <p>Continuous monitoring of infrastructure health with instant alerts for issues.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Performance Optimization</h3>
              <h4>Maximum efficiency</h4>
              <p>Ongoing optimization of infrastructure for peak performance and cost efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="focus-section">
        <div className="container">
          <h2>Infrastructure Benefits</h2>
          <p className="focus-subtitle">Why solid infrastructure matters</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>High Availability</h3>
              <p>99.9% uptime guarantee ensures your systems are always accessible to users.</p>
            </div>

            <div className="focus-item">
              <h3>Scalability</h3>
              <p>Easily scale resources up or down based on your business needs and traffic.</p>
            </div>

            <div className="focus-item">
              <h3>Security</h3>
              <p>Enterprise-grade security measures protect your data and applications.</p>
            </div>

            <div className="focus-item">
              <h3>Performance</h3>
              <p>Optimized infrastructure ensures fast, responsive applications and websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Build on Solid Infrastructure</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              Let us build and manage the technical foundation your business needs to thrive. Our infrastructure
              solutions provide the reliability, security, and performance you can count on.
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
