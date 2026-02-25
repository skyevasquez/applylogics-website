import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/hosting-server-setup')({
  head: () => ({
    meta: [
      { title: 'Hosting & Server Setup - ApplyLogics' },
      { name: 'description', content: 'ApplyLogics provides secure, reliable hosting solutions with professional setup and ongoing management for optimal performance.' },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: HostingPage,
})

function HostingPage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>Service</div>
            <h1 className="hero-main-title">Hosting &amp; Server Setup</h1>
            <h2 className="hero-subtitle">Professional Setup and Management</h2>
            <div className="hero-description">
              <p>Secure, reliable hosting solutions with professional setup and ongoing management for optimal performance. We handle the technical complexity so you can focus on your business.</p>
              <p>From shared hosting to dedicated servers and cloud infrastructure, we provide the right solution for your needs.</p>
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
          <h2 className="section-title">Our Hosting Solutions</h2>
          <p className="section-subtitle">Enterprise-grade infrastructure for businesses of all sizes</p>
          <div className="value-grid">
            <div className="value-item"><div className="value-number">01</div><h3>Managed Hosting</h3><h4>Fully managed server solutions</h4><p>Complete server management including updates, security patches, monitoring, and performance optimization.</p></div>
            <div className="value-item"><div className="value-number">02</div><h3>Cloud Infrastructure</h3><h4>Scalable cloud solutions</h4><p>AWS, Google Cloud, and Azure infrastructure setup and management for scalable, reliable applications.</p></div>
            <div className="value-item"><div className="value-number">03</div><h3>Security &amp; SSL</h3><h4>Enterprise-grade security</h4><p>SSL certificates, firewall configuration, DDoS protection, and regular security audits to keep your data safe.</p></div>
            <div className="value-item"><div className="value-number">04</div><h3>Backup &amp; Recovery</h3><h4>Automated backup solutions</h4><p>Regular automated backups with quick recovery options to ensure your data is always protected.</p></div>
            <div className="value-item"><div className="value-number">05</div><h3>Performance Monitoring</h3><h4>24/7 uptime monitoring</h4><p>Continuous monitoring of server health, performance metrics, and instant alerts for any issues.</p></div>
            <div className="value-item"><div className="value-number">06</div><h3>Migration Services</h3><h4>Seamless server migration</h4><p>Zero-downtime migration from your current hosting to our optimized infrastructure.</p></div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Why Choose Our Hosting</h2>
          <p className="focus-subtitle">Reliability and performance you can count on</p>
          <div className="focus-grid">
            <div className="focus-item"><h3>99.9% Uptime Guarantee</h3><p>We guarantee 99.9% uptime for all our hosting services, ensuring your website is always available to your customers.</p></div>
            <div className="focus-item"><h3>Fast Load Times</h3><p>Optimized servers with SSD storage, CDN integration, and caching for lightning-fast page load speeds.</p></div>
            <div className="focus-item"><h3>Expert Support</h3><p>Access to our team of server experts for technical support, troubleshooting, and optimization advice.</p></div>
            <div className="focus-item"><h3>Scalable Resources</h3><p>Easily scale your hosting resources up or down based on your traffic and business needs.</p></div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <div className="testimonial">
            <p className="testimonial-text">Let us handle your hosting infrastructure so you can focus on growing your business. Our team will set up, optimize, and maintain your servers for optimal performance.</p>
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
