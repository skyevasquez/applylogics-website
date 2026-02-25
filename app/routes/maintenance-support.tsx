import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/maintenance-support')({
  head: () => ({
    meta: [
      { title: 'Maintenance & Support - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides ongoing maintenance and support services including updates, security patches, monitoring, and technical support for digital assets.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: MaintenanceSupportPage,
})

function MaintenanceSupportPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-main-title"># Maintenance &amp; Support</h1>
            <h2 className="hero-subtitle">## Ongoing Technical Support</h2>
            <p className="hero-trusted">`Regular updates, security patches, and monitoring`</p>

            <div className="hero-description">
              <p>
                {`\`\`\`
                        Keep your digital assets running smoothly with
                        comprehensive maintenance and support services.
                        We provide proactive monitoring, regular updates,
                        and responsive technical support.
                        \`\`\``}
              </p>
              <p>
                {`\`\`\`
                        From security patches to performance optimization,
                        our maintenance services ensure your websites and
                        applications remain secure, fast, and reliable
                        for your users and customers.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">## maintenance_services_included</h2>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">1.</div>
              <h3>### security_updates</h3>
              <h4>**Regular security patches and monitoring**</h4>
              <p>
                {`\`\`\`
                        Proactive security updates, vulnerability
                        assessments, and malware monitoring to
                        protect your digital assets from threats.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">2.</div>
              <h3>### performance_monitoring</h3>
              <h4>**24/7 uptime and performance tracking**</h4>
              <p>
                {`\`\`\`
                        Continuous monitoring of website performance,
                        uptime tracking, and proactive issue resolution
                        to ensure optimal user experience.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">3.</div>
              <h3>### content_updates</h3>
              <h4>**Regular content and feature updates**</h4>
              <p>
                {`\`\`\`
                        Assistance with content updates, feature
                        additions, and website modifications to
                        keep your site fresh and current.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">4.</div>
              <h3>### backup_management</h3>
              <h4>**Automated backups and recovery**</h4>
              <p>
                {`\`\`\`
                        Regular automated backups with secure storage
                        and quick recovery options to protect against
                        data loss and system failures.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">5.</div>
              <h3>### technical_support</h3>
              <h4>**Responsive help desk and troubleshooting**</h4>
              <p>
                {`\`\`\`
                        Expert technical support for issues, questions,
                        and troubleshooting with fast response times
                        and knowledgeable assistance.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">6.</div>
              <h3>### analytics_reporting</h3>
              <h4>**Monthly performance and analytics reports**</h4>
              <p>
                {`\`\`\`
                        Detailed monthly reports on website performance,
                        security status, and recommendations for
                        improvements and optimizations.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="focus-section">
        <div className="container">
          <h2>## support_plan_options</h2>
          <p className="focus-subtitle">`Choose the level of support that fits your needs`</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>### basic_maintenance</h3>
              <p>
                {`\`\`\`
                        Essential security updates, basic monitoring,
                        and monthly backups. Perfect for small
                        websites with minimal complexity.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### standard_support</h3>
              <p>
                {`\`\`\`
                        Comprehensive maintenance including security
                        updates, performance monitoring, content
                        updates, and priority technical support.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### premium_care</h3>
              <p>
                {`\`\`\`
                        Full-service maintenance with 24/7 monitoring,
                        priority support, regular optimization, and
                        dedicated account management.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### enterprise_support</h3>
              <p>
                {`\`\`\`
                        Custom maintenance solutions for large
                        organizations with complex requirements,
                        SLA guarantees, and dedicated support team.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>## protect_your_digital_investment</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              {`\`\`\`
                    Don't let technical issues hurt your business.
                    Our maintenance and support services ensure your
                    digital assets remain secure, fast, and reliable
                    so you can focus on growing your business.
                    \`\`\``}
            </p>
            <div className="testimonial-author">
              <strong>**Get your maintenance plan today**</strong>
              <br />
              <span className="author-title">
                `Email: hello@applylogics.com | Phone: 352-325-1006`
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
