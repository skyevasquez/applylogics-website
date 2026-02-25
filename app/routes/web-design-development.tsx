import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/web-design-development')({
  head: () => ({
    meta: [
      { title: 'Web Design & Development - ApplyLogics' },
      { name: 'description', content: 'ApplyLogics provides professional web design and development services, creating modern, responsive websites focused on brand identity and user experience.' },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: WebDesignPage,
})

function WebDesignPage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Service
            </div>
            <h1 className="hero-main-title">Web Design &amp; Development</h1>
            <h2 className="hero-subtitle">Creating Modern, Responsive Websites</h2>
            <div className="hero-description">
              <p>We create stunning, responsive websites that not only look great but also convert visitors into customers. Our design process focuses on your brand identity and user experience.</p>
              <p>From concept to launch, we handle every aspect of web development using the latest technologies and best practices.</p>
            </div>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <a href="/#services" className="btn-secondary">View All Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <h2 className="section-title">What We Deliver</h2>
          <p className="section-subtitle">Comprehensive web solutions tailored to your needs</p>
          <div className="value-grid">
            <div className="value-item"><div className="value-number">01</div><h3>Custom Web Design</h3><h4>Unique designs tailored to your brand</h4><p>Custom website designs that reflect your brand identity and resonate with your target audience. No templates, just original creative work.</p></div>
            <div className="value-item"><div className="value-number">02</div><h3>Responsive Development</h3><h4>Mobile-first, cross-device compatibility</h4><p>Fully responsive websites that work perfectly on desktop, tablet, and mobile devices. Optimized for all screen sizes and browsers.</p></div>
            <div className="value-item"><div className="value-number">03</div><h3>Performance Optimization</h3><h4>Fast loading, SEO-friendly websites</h4><p>Optimized for speed and search engines with clean code, compressed images, and efficient loading strategies.</p></div>
            <div className="value-item"><div className="value-number">04</div><h3>Content Management</h3><h4>Easy-to-use CMS integration</h4><p>User-friendly content management systems that allow you to easily update your website content without technical knowledge.</p></div>
            <div className="value-item"><div className="value-number">05</div><h3>E-Commerce Solutions</h3><h4>Online stores that convert</h4><p>Complete e-commerce solutions with secure payment processing, inventory management, and conversion-optimized checkout flows.</p></div>
            <div className="value-item"><div className="value-number">06</div><h3>Ongoing Support</h3><h4>Continuous maintenance and updates</h4><p>Regular updates, security patches, and technical support to keep your website running smoothly and securely.</p></div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Our Development Process</h2>
          <p className="focus-subtitle">From concept to launch in structured phases</p>
          <div className="focus-grid">
            <div className="focus-item"><h3>Discovery &amp; Planning</h3><p>Understanding your business goals, target audience, and project requirements to create a comprehensive development strategy.</p></div>
            <div className="focus-item"><h3>Design &amp; Prototyping</h3><p>Creating wireframes, mockups, and interactive prototypes to visualize the final product before development begins.</p></div>
            <div className="focus-item"><h3>Development &amp; Testing</h3><p>Building your website with clean, efficient code and thorough testing across all devices and browsers.</p></div>
            <div className="focus-item"><h3>Launch &amp; Optimization</h3><p>Deploying your website with proper SEO setup, analytics integration, and ongoing optimization for better performance.</p></div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <div className="testimonial">
            <p className="testimonial-text">Let's create a website that not only looks amazing but also drives results for your business. Our team is ready to bring your vision to life with modern design and cutting-edge development.</p>
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
