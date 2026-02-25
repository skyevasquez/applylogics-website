import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/ongoing-partnership')({
  head: () => ({
    meta: [
      { title: 'Ongoing Partnership - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides long-term technology partnership with continuous support, updates, and strategic guidance for sustained business growth.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: OngoingPartnershipPage,
})

function OngoingPartnershipPage() {
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
            <h1 className="hero-main-title">Ongoing Partnership</h1>
            <h2 className="hero-subtitle">Long-Term Technology Partnership</h2>

            <div className="hero-description">
              <p>
                Long-term technology partnership with continuous support, updates, and strategic guidance for sustained
                growth. We're not just a vendor—we're your technology partner.
              </p>
              <p>
                Our ongoing partnership model ensures your technology continues to drive business value as your company
                grows and evolves.
              </p>
            </div>

            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">
                Become a Partner
              </Link>
              <a href="/#solutions" className="btn-secondary">
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Partnership Benefits</h2>
          <p className="section-subtitle">What our ongoing partnership includes</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Continuous Support</h3>
              <h4>Always here when you need us</h4>
              <p>Ongoing technical support and assistance to keep your systems running smoothly.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Regular Updates</h3>
              <h4>Stay current and secure</h4>
              <p>Continuous updates, improvements, and enhancements to your technology systems.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Strategic Guidance</h3>
              <h4>Technology roadmap planning</h4>
              <p>Regular consultations to align technology decisions with your business goals.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Proactive Monitoring</h3>
              <h4>Prevent issues before they happen</h4>
              <p>24/7 monitoring and proactive maintenance to ensure optimal performance.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>Priority Access</h3>
              <h4>Fast response when it matters</h4>
              <p>Priority support with faster response times for critical issues.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Growth Support</h3>
              <h4>Scale with your business</h4>
              <p>Technology solutions that grow with your business needs and ambitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partnership Section */}
      <section className="focus-section">
        <div className="container">
          <h2>Why Choose Partnership</h2>
          <p className="focus-subtitle">The value of long-term technology partnership</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>Deep Understanding</h3>
              <p>We develop deep knowledge of your business, enabling more effective solutions.</p>
            </div>

            <div className="focus-item">
              <h3>Consistent Quality</h3>
              <p>Maintain high standards with a dedicated team that knows your systems.</p>
            </div>

            <div className="focus-item">
              <h3>Cost Effective</h3>
              <p>Predictable costs and better value through long-term partnership benefits.</p>
            </div>

            <div className="focus-item">
              <h3>Peace of Mind</h3>
              <p>Focus on your business while we handle your technology needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Partner With Us</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              Let's build a long-term partnership that drives your business forward. Our ongoing partnership model
              ensures you always have expert support and strategic guidance for your technology needs.
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
