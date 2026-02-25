import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/business-automation')({
  head: () => ({
    meta: [
      { title: 'Business Automation - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides business automation solutions including AI tools and smart workflows to streamline operations and reduce manual processes.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: BusinessAutomationPage,
})

function BusinessAutomationPage() {
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
            <h1 className="hero-main-title">Business Automation</h1>
            <h2 className="hero-subtitle">Smart Automation Tools &amp; AI Solutions</h2>

            <div className="hero-description">
              <p>
                Smart automation tools and AI-powered solutions to streamline workflows and reduce manual processes.
                Transform how your business operates with intelligent automation.
              </p>
              <p>
                From customer service chatbots to complex workflow automation, we help you work smarter, not harder.
              </p>
            </div>

            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">
                Automate Now
              </Link>
              <a href="/#solutions" className="btn-secondary">
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Capabilities Section */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Automation Capabilities</h2>
          <p className="section-subtitle">Transform your operations with intelligent automation</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Customer Service Automation</h3>
              <h4>AI-powered support systems</h4>
              <p>
                24/7 intelligent chatbots that handle inquiries, provide instant responses, and escalate when needed.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Workflow Automation</h3>
              <h4>Connect and streamline processes</h4>
              <p>
                Automated workflows that connect systems, eliminate manual data entry, and ensure consistency.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Marketing Automation</h3>
              <h4>Intelligent campaigns</h4>
              <p>
                Automated marketing sequences, lead nurturing, and personalized customer communications.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Data Processing</h3>
              <h4>Automated data handling</h4>
              <p>AI-powered document processing, data extraction, and intelligent data transformation.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>Reporting Automation</h3>
              <h4>Automated insights</h4>
              <p>Scheduled reports, automated analytics, and intelligent trend identification.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Integration Services</h3>
              <h4>Connect your tools</h4>
              <p>Seamless integration between your existing tools and platforms for unified operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="focus-section">
        <div className="container">
          <h2>Automation Benefits</h2>
          <p className="focus-subtitle">Why businesses choose automation</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>Save Time</h3>
              <p>Reduce manual tasks by up to 80% and free your team for strategic work.</p>
            </div>

            <div className="focus-item">
              <h3>Reduce Costs</h3>
              <p>Lower operational costs through efficient automation and error reduction.</p>
            </div>

            <div className="focus-item">
              <h3>Improve Accuracy</h3>
              <p>Eliminate human error with consistent, automated processes.</p>
            </div>

            <div className="focus-item">
              <h3>Scale Easily</h3>
              <p>Handle growth without proportional increases in resources or staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Ready to Automate?</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              Let us help you transform your business operations with intelligent automation. Our solutions can reduce
              costs, improve efficiency, and free your team to focus on what matters most.
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
