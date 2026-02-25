import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/technology-consulting')({
  head: () => ({
    meta: [
      { title: 'Technology Consulting - ApplyLogics' },
      { name: 'description', content: 'ApplyLogics provides expert technology consulting services including digital infrastructure, solution design, and technology planning for business growth.' },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: TechConsultingPage,
})

function TechConsultingPage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>Service</div>
            <h1 className="hero-main-title">Technology Consulting</h1>
            <h2 className="hero-subtitle">Strategic Guidance and Planning</h2>
            <div className="hero-description">
              <p>Expert advice on digital infrastructure, solution design, and technology planning for business growth. We help you make informed decisions about your technology investments.</p>
              <p>Our consulting services bridge the gap between your business goals and the technology needed to achieve them.</p>
            </div>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Schedule Consultation</Link>
              <a href="/#services" className="btn-secondary">View All Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Our Consulting Services</h2>
          <p className="section-subtitle">Strategic technology guidance for your business</p>
          <div className="value-grid">
            <div className="value-item"><div className="value-number">01</div><h3>Technology Assessment</h3><h4>Comprehensive tech stack evaluation</h4><p>Thorough analysis of your current technology landscape to identify gaps, opportunities, and areas for improvement.</p></div>
            <div className="value-item"><div className="value-number">02</div><h3>Digital Strategy</h3><h4>Roadmap for digital transformation</h4><p>Strategic planning to align your technology investments with business objectives and long-term growth plans.</p></div>
            <div className="value-item"><div className="value-number">03</div><h3>Solution Architecture</h3><h4>Technical design and planning</h4><p>Design of scalable, secure, and efficient technology solutions tailored to your specific business requirements.</p></div>
            <div className="value-item"><div className="value-number">04</div><h3>Vendor Selection</h3><h4>Objective technology recommendations</h4><p>Unbiased evaluation and recommendations for software, platforms, and technology vendors that best fit your needs.</p></div>
            <div className="value-item"><div className="value-number">05</div><h3>Security Consulting</h3><h4>Risk assessment and security planning</h4><p>Comprehensive security assessments and recommendations to protect your business data and systems.</p></div>
            <div className="value-item"><div className="value-number">06</div><h3>Process Optimization</h3><h4>Streamline business operations</h4><p>Analysis and recommendations for improving business processes through better technology utilization.</p></div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Our Consulting Approach</h2>
          <p className="focus-subtitle">Proven methodology for technology success</p>
          <div className="focus-grid">
            <div className="focus-item"><h3>Discovery</h3><p>Deep dive into your business operations, goals, and current technology landscape to understand your unique challenges.</p></div>
            <div className="focus-item"><h3>Analysis</h3><p>Comprehensive assessment of opportunities, risks, and potential solutions aligned with your business objectives.</p></div>
            <div className="focus-item"><h3>Strategy</h3><p>Development of actionable technology roadmaps with clear priorities, timelines, and expected outcomes.</p></div>
            <div className="focus-item"><h3>Implementation Support</h3><p>Ongoing guidance and support throughout the implementation process to ensure successful execution.</p></div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Ready to Transform Your Technology?</h2>
          <div className="testimonial">
            <p className="testimonial-text">Let our experts help you navigate the complex technology landscape and make strategic decisions that drive real business results. Schedule a consultation to discuss your technology challenges.</p>
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
