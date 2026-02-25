import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us - ApplyLogics' },
      {
        name: 'description',
        content: 'Get in touch with ApplyLogics for your technology needs. Contact us for web design, hosting, AI automation, and custom development services.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <section id="main-content" className="hero hero-contact">
        <div className="cyber-grid"></div>
        <div className="floating-elements">
          <div className="float-line float-line-1"></div>
          <div className="float-line float-line-2"></div>
          <div className="cyber-circle cyber-circle-1"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span className="badge-text">Get in Touch</span>
            </div>
            <h1 className="hero-main-title">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h1>
            <h2 className="hero-subtitle">Ready to transform your business with technology?</h2>

            <div className="hero-description">
              <p>Whether you need a new website, hosting solutions, AI automation, or custom development, we're here to help. Get in touch with our team to discuss your project.</p>
              <p>We typically respond within 24 hours and offer free initial consultations to understand your needs.</p>
            </div>

            <div className="hero-cta">
              <a href="mailto:hello@applylogics.com" className="btn-primary magnetic-btn">
                <span className="btn-text">Send Email</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="tel:+13523251006" className="btn-secondary magnetic-btn">
                <span className="btn-text">Call Now</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="chat-interface">
              <div className="chat-header">
                <div className="chat-header-left">
                  <div className="chat-avatar">
                    <span>AL</span>
                    <span className="chat-status-dot"></span>
                  </div>
                  <div className="chat-header-info">
                    <span className="chat-name">ApplyLogics Support</span>
                    <span className="chat-status">Online • Typically replies instantly</span>
                  </div>
                </div>
                <div className="chat-header-actions">
                  <span className="chat-action">−</span>
                  <span className="chat-action">□</span>
                </div>
              </div>
              <div className="chat-messages" id="chatMessages"></div>
              <div className="chat-input-area">
                <div className="chat-input-wrapper">
                  <input type="text" className="chat-input" placeholder="Type your message..." readOnly />
                  <button className="chat-send-btn">
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Contact Information</h2>
          <p className="focus-subtitle">Multiple ways to reach us</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>Email</h3>
              <p>hello@applylogics.com</p>
              <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '14px' }}>For general inquiries, project discussions, and support requests.</p>
            </div>

            <div className="focus-item">
              <h3>Phone</h3>
              <p>352-325-1006</p>
              <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '14px' }}>Call us during business hours for immediate assistance.</p>
            </div>

            <div className="focus-item">
              <h3>Social Media</h3>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                <a href="https://github.com/applylogics" className="social-icon github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
                <a href="https://facebook.com/applylogics" className="social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a>
                <a href="https://dev.to/applylogics" className="social-icon devplusplus" target="_blank" rel="noopener noreferrer" aria-label="Dev++"></a>
                <a href="https://bsky.app/profile/applylogics" className="social-icon bluesky" target="_blank" rel="noopener noreferrer" aria-label="Bluesky"></a>
                <a href="https://x.com/applylogics" className="social-icon twitter" target="_blank" rel="noopener noreferrer" aria-label="X"></a>
              </div>
              <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '14px' }}>Follow us for updates and tech insights.</p>
            </div>

            <div className="focus-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM EST</p>
              <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '14px' }}>Emergency support available 24/7 for partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <h2 className="section-title">What to Expect</h2>
          <p className="section-subtitle">Our consultation process</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Initial Contact</h3>
              <h4>Reach out via email or phone</h4>
              <p>Contact us through your preferred method. We'll respond within 24 hours to schedule a consultation.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Discovery Call</h3>
              <h4>Understanding your needs</h4>
              <p>We'll have an initial conversation to understand your business, goals, and technical requirements.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Proposal</h3>
              <h4>Tailored solution plan</h4>
              <p>We'll create a detailed proposal outlining our recommended approach, timeline, and investment.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Kickoff</h3>
              <h4>Start building together</h4>
              <p>Once approved, we'll kick off the project with clear milestones and regular communication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <div className="testimonial">
            <p className="testimonial-text">Don't hesitate to reach out. We're here to answer your questions, discuss your project ideas, and help you find the right technology solutions for your business. Every great partnership starts with a conversation.</p>
            <div className="testimonial-author">
              <strong>Contact us today</strong>
              <span className="author-title">hello@applylogics.com | 352-325-1006</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="mailto:hello@applylogics.com" className="btn-primary">Send Us an Email</a>
            <a href="tel:+13523251006" className="btn-secondary" style={{ marginLeft: '16px' }}>Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  )
}
