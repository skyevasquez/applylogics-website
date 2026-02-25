import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/ai-business-automation')({
  head: () => ({
    meta: [
      { title: 'AI Business Automation - ApplyLogics' },
      { name: 'description', content: 'ApplyLogics provides AI business automation solutions including chatbots and smart workflows to streamline operations and improve business efficiency.' },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: AIAutomationPage,
})

function AIAutomationPage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>Service</div>
            <h1 className="hero-main-title">AI Business Automation</h1>
            <h2 className="hero-subtitle">Intelligent Automation Solutions</h2>
            <div className="hero-description">
              <p>Transform your business operations with intelligent automation solutions. From customer service chatbots to complex workflow automation, we help you reduce manual tasks and improve efficiency.</p>
              <p>Our AI-powered solutions learn from your business processes and continuously improve performance.</p>
            </div>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <a href="/#services" className="btn-secondary">View All Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Automation Solutions We Build</h2>
          <p className="section-subtitle">AI-powered tools to transform your operations</p>
          <div className="value-grid">
            <div className="value-item"><div className="value-number">01</div><h3>Customer Service Chatbots</h3><h4>24/7 intelligent customer support</h4><p>AI-powered chatbots that handle customer inquiries, provide instant responses, and escalate complex issues to human agents.</p></div>
            <div className="value-item"><div className="value-number">02</div><h3>Workflow Automation</h3><h4>Streamlined business processes</h4><p>Automated workflows that connect different systems, eliminate manual data entry, and ensure consistent process execution.</p></div>
            <div className="value-item"><div className="value-number">03</div><h3>Lead Qualification</h3><h4>Intelligent lead scoring and routing</h4><p>AI systems that qualify leads automatically, score prospects based on behavior, and route them to the appropriate sales team.</p></div>
            <div className="value-item"><div className="value-number">04</div><h3>Document Processing</h3><h4>Automated data extraction</h4><p>AI-powered document processing that extracts data from invoices, forms, and contracts, reducing manual data entry errors.</p></div>
            <div className="value-item"><div className="value-number">05</div><h3>Email Automation</h3><h4>Smart email marketing and responses</h4><p>Intelligent email automation that personalizes content, optimizes send times, and manages customer communication sequences.</p></div>
            <div className="value-item"><div className="value-number">06</div><h3>Analytics &amp; Reporting</h3><h4>Automated insights and reporting</h4><p>AI-driven analytics that generate automated reports, identify trends, and provide actionable insights for decision-making.</p></div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Benefits of AI Automation</h2>
          <p className="focus-subtitle">Transform your business with intelligent automation</p>
          <div className="focus-grid">
            <div className="focus-item"><h3>Increased Efficiency</h3><p>Reduce manual tasks by up to 80% and allow your team to focus on strategic activities that drive business growth.</p></div>
            <div className="focus-item"><h3>24/7 Availability</h3><p>Provide round-the-clock customer service and process automation that never sleeps, improving satisfaction and response times.</p></div>
            <div className="focus-item"><h3>Cost Reduction</h3><p>Significantly reduce operational costs by automating repetitive tasks and minimizing human error in business processes.</p></div>
            <div className="focus-item"><h3>Scalable Solutions</h3><p>AI automation scales with your business growth, handling increased workload without proportional staffing increases.</p></div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Automate Your Business Today</h2>
          <div className="testimonial">
            <p className="testimonial-text">Ready to transform your business with AI automation? Our intelligent solutions can help you streamline operations, reduce costs, and improve customer satisfaction through smart automation.</p>
            <div className="testimonial-author">
              <strong>Schedule your automation consultation</strong>
              <span className="author-title">hello@applylogics.com | 352-325-1006</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
