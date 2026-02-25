import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ApplyLogics - Agentic Systems for the Enterprise' },
      {
        name: 'description',
        content:
          'ApplyLogics - Full-service technology company providing end-to-end digital solutions including web design, hosting, AI automation, and custom development for businesses.',
      },
      { property: 'og:image', content: '/og-image.png' },
      { property: 'twitter:image', content: '/og-image.png' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="cyber-grid"></div>
        <div className="floating-elements">
          <div className="float-line float-line-1"></div>
          <div className="float-line float-line-2"></div>
          <div className="float-line float-line-3"></div>
          <div className="cyber-circle cyber-circle-1"></div>
          <div className="cyber-circle cyber-circle-2"></div>
          <div className="data-stream"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span className="badge-text">Full-Service Technology Company</span>
            </div>
            <h1 className="hero-main-title">
              We build{' '}
              <span className="gradient-text glitch-text" data-text="Digital Solutions">
                Digital Solutions
              </span>
              .
            </h1>
            <h2 className="hero-subtitle">End-to-end digital transformation for modern businesses</h2>

            <div className="hero-description">
              <p>
                Today, businesses need comprehensive digital solutions to stay competitive. We help organizations
                modernize their operations, enhance user experiences, and automate processes with cutting-edge
                technology.
              </p>
              <p>From web development to AI automation, ApplyLogics delivers solutions that drive real results.</p>
            </div>

            <div className="hero-cta">
              <Link to="/contact" className="btn-primary magnetic-btn">
                <span className="btn-text">Get Started</span>
                <span className="btn-icon">→</span>
              </Link>
              <a href="#services" className="btn-secondary magnetic-btn">
                <span className="btn-text">Explore Services</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number" data-count="50">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number" data-count="98">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">applylogics.sh</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command typing-text"></span>
                  <span className="terminal-cursor">_</span>
                </div>
                <div className="terminal-output"></div>
              </div>
            </div>
            <div className="code-snippet">
              <pre>
                <code>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-var">solution</span> ={' '}
                  <span className="code-func">await</span> applyLogics.
                  <span className="code-method">transform</span>
                  {`({\n  `}
                  <span className="code-prop">business</span>:{' '}
                  <span className="code-string">"yours"</span>
                  {`,\n  `}
                  <span className="code-prop">tech</span>: [
                  <span className="code-string">"AI"</span>,{' '}
                  <span className="code-string">"Web"</span>,{' '}
                  <span className="code-string">"Cloud"</span>],{`\n  `}
                  <span className="code-prop">result</span>:{' '}
                  <span className="code-string">"success"</span>
                  {`\n});`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section id="services" className="value-props">
        <div className="container">
          <h2 className="section-title gsap-reveal">Our Services</h2>
          <p className="section-subtitle gsap-reveal">Comprehensive technology solutions tailored to your business needs</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Web Design &amp; Development</h3>
              <h4>Creating modern, responsive websites</h4>
              <p>Modern, responsive websites focused on brand identity and user experience. Custom designs that convert visitors into customers.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Hosting &amp; Server Setup</h3>
              <h4>Professional setup and management</h4>
              <p>Secure, reliable hosting solutions with professional setup and ongoing management for optimal performance.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>AI Business Automation</h3>
              <h4>Intelligent automation solutions</h4>
              <p>Implementing chatbots and smart workflows to streamline operations and improve business efficiency.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Technology Consulting</h3>
              <h4>Strategic guidance and planning</h4>
              <p>Expert advice on digital infrastructure, solution design, and technology planning for business growth.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>Maintenance &amp; Support</h3>
              <h4>Ongoing technical support</h4>
              <p>Regular updates, security patches, monitoring, and technical support to keep your digital assets running smoothly.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Custom Development</h3>
              <h4>Tailored software solutions</h4>
              <p>Custom apps, API integrations, and database design tailored to your specific business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="focus-section">
        <div className="container">
          <h2 className="gsap-reveal">Comprehensive Solutions</h2>
          <p className="focus-subtitle gsap-reveal">End-to-end digital transformation services</p>

          <div className="focus-grid">
            <Link to="/digital-presence" className="focus-item focus-item-link">
              <h3>Digital Presence</h3>
              <p>Complete web presence solutions including design, development, hosting, and ongoing maintenance for maximum impact.</p>
              <span className="focus-item-arrow">→</span>
            </Link>

            <Link to="/business-automation" className="focus-item focus-item-link">
              <h3>Business Automation</h3>
              <p>Smart automation tools and AI-powered solutions to streamline workflows and reduce manual processes.</p>
              <span className="focus-item-arrow">→</span>
            </Link>

            <Link to="/technical-infrastructure" className="focus-item focus-item-link">
              <h3>Technical Infrastructure</h3>
              <p>Robust server setup, secure hosting, and reliable technical infrastructure to support your business operations.</p>
              <span className="focus-item-arrow">→</span>
            </Link>

            <Link to="/ongoing-partnership" className="focus-item focus-item-link">
              <h3>Ongoing Partnership</h3>
              <p>Long-term technology partnership with continuous support, updates, and strategic guidance for sustained growth.</p>
              <span className="focus-item-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="partners-section">
        <div className="container">
          <h2>Client Testimonials</h2>
          <p className="section-subtitle">What our partners say about working with us</p>

          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-text">ApplyLogics transformed our digital presence completely. Their team delivered a beautiful, responsive website and set up reliable hosting that has never let us down. The ongoing support is exceptional.</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span className="author-title">CEO, TechStart Solutions</span>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">The AI automation solutions from ApplyLogics have streamlined our customer service operations. The chatbot handles 80% of our inquiries automatically, and the custom development work was flawless.</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span className="author-title">Operations Director, GrowthCorp</span>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">Working with ApplyLogics on our technical infrastructure was a game-changer. They migrated our entire system to the cloud with zero downtime and improved our performance by 300%. Highly recommended.</p>
              <div className="testimonial-author">
                <strong>David Park</strong>
                <span className="author-title">CTO, InnovateTech</span>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">From strategy to execution, ApplyLogics delivered beyond our expectations. Their technology consulting helped us identify opportunities we never knew existed. Our ROI increased significantly within months.</p>
              <div className="testimonial-author">
                <strong>Jennifer Martinez</strong>
                <span className="author-title">Founder, ScaleUp Ventures</span>
              </div>
            </div>
          </div>

          <div className="testimonials-cta">
            <Link to="/contact" className="btn-primary magnetic-btn">
              <span className="btn-text">Start Your Project</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
