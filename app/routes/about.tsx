import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us - ApplyLogics' },
      {
        name: 'description',
        content: 'Learn about ApplyLogics - A full-service technology company providing end-to-end digital solutions for businesses.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              About ApplyLogics
            </div>
            <h1 className="hero-main-title">Full-Service Technology Company</h1>
            <h2 className="hero-subtitle">Empowering businesses through innovative digital solutions</h2>

            <div className="hero-description">
              <p>ApplyLogics is a full-service technology company dedicated to helping businesses thrive in the digital age. We provide end-to-end solutions from web design and development to AI automation and custom software development.</p>
              <p>Our mission is to bridge the gap between business goals and technology implementation, delivering solutions that drive real, measurable results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What drives us to deliver excellence</p>

          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Client-Focused</h3>
              <h4>Your success is our success</h4>
              <p>We prioritize understanding your business needs and goals to deliver solutions that truly make a difference.</p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Quality First</h3>
              <h4>Excellence in every detail</h4>
              <p>We never compromise on quality, ensuring every project meets the highest standards of performance and reliability.</p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Innovation Driven</h3>
              <h4>Staying ahead of the curve</h4>
              <p>We constantly explore new technologies and methodologies to provide cutting-edge solutions for our clients.</p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Transparent Communication</h3>
              <h4>Clear, honest, and open</h4>
              <p>We believe in transparent communication, keeping you informed every step of the way.</p>
            </div>

            <div className="value-item">
              <div className="value-number">05</div>
              <h3>Long-Term Partnership</h3>
              <h4>Beyond project completion</h4>
              <p>We build lasting relationships with our clients, providing ongoing support and strategic guidance.</p>
            </div>

            <div className="value-item">
              <div className="value-number">06</div>
              <h3>Results Oriented</h3>
              <h4>Measurable business impact</h4>
              <p>We focus on delivering solutions that create tangible business value and measurable results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="container">
          <h2>Why Choose ApplyLogics</h2>
          <p className="focus-subtitle">What sets us apart from other technology companies</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>Comprehensive Solutions</h3>
              <p>From strategy to implementation and ongoing support, we provide complete end-to-end technology solutions.</p>
            </div>

            <div className="focus-item">
              <h3>Expert Team</h3>
              <p>Our team brings years of experience across web development, AI, cloud infrastructure, and business automation.</p>
            </div>

            <div className="focus-item">
              <h3>Proven Track Record</h3>
              <p>We've helped numerous businesses transform their digital presence and streamline their operations.</p>
            </div>

            <div className="focus-item">
              <h3>Flexible Engagement</h3>
              <p>Whether you need a one-time project or ongoing partnership, we tailor our services to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="testimonial">
            <p className="testimonial-text">We believe in a collaborative approach to technology. By understanding your business deeply and working closely with your team, we create solutions that are not just technically sound, but strategically aligned with your business objectives. Our agile methodology ensures flexibility, transparency, and continuous improvement throughout every engagement.</p>
            <div className="testimonial-author">
              <strong>Ready to work with us?</strong>
              <span className="author-title">Let's discuss your project</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
