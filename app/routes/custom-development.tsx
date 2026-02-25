import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/custom-development')({
  head: () => ({
    meta: [
      { title: 'Custom Development - ApplyLogics' },
      {
        name: 'description',
        content:
          'ApplyLogics provides custom development services including tailored software solutions, API integrations, and database design for specific business requirements.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: CustomDevelopmentPage,
})

function CustomDevelopmentPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section id="main-content" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-main-title"># Custom Development</h1>
            <h2 className="hero-subtitle">## Tailored Software Solutions</h2>
            <p className="hero-trusted">`Custom apps, API integrations, and database design`</p>

            <div className="hero-description">
              <p>
                {`\`\`\`
                        Build custom software solutions that perfectly
                        fit your unique business requirements. From
                        custom applications to complex integrations,
                        we develop solutions that grow with your business.
                        \`\`\``}
              </p>
              <p>
                {`\`\`\`
                        Our development team creates scalable, maintainable
                        software using modern technologies and best practices,
                        ensuring your custom solutions are robust, secure,
                        and future-ready for your business needs.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">## custom_solutions_we_build</h2>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">1.</div>
              <h3>### web_applications</h3>
              <h4>**Custom web-based business applications**</h4>
              <p>
                {`\`\`\`
                        Full-featured web applications tailored to
                        your business processes, with user management,
                        data processing, and reporting capabilities.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">2.</div>
              <h3>### api_development</h3>
              <h4>**RESTful APIs and system integrations**</h4>
              <p>
                {`\`\`\`
                        Custom APIs that connect different systems,
                        enable data exchange, and facilitate seamless
                        integration between applications.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">3.</div>
              <h3>### database_design</h3>
              <h4>**Optimized database architecture and management**</h4>
              <p>
                {`\`\`\`
                        Custom database solutions with optimized
                        structure, efficient queries, and scalable
                        architecture for your data management needs.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">4.</div>
              <h3>### mobile_applications</h3>
              <h4>**Native and cross-platform mobile apps**</h4>
              <p>
                {`\`\`\`
                        Custom mobile applications for iOS and Android
                        with native performance and user experience
                        tailored to your business requirements.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">5.</div>
              <h3>### system_integrations</h3>
              <h4>**Connecting disparate business systems**</h4>
              <p>
                {`\`\`\`
                        Custom integrations that connect CRM, ERP,
                        accounting, and other business systems for
                        seamless data flow and process automation.
                        \`\`\``}
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">6.</div>
              <h3>### legacy_modernization</h3>
              <h4>**Updating and modernizing existing systems**</h4>
              <p>
                {`\`\`\`
                        Modernizing legacy applications with new
                        technologies while preserving business logic
                        and ensuring smooth transition processes.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="focus-section">
        <div className="container">
          <h2>## our_development_methodology</h2>
          <p className="focus-subtitle">`Agile development process for optimal results`</p>

          <div className="focus-grid">
            <div className="focus-item">
              <h3>### requirements_analysis</h3>
              <p>
                {`\`\`\`
                        Thorough analysis of your business requirements,
                        technical constraints, and success criteria to
                        define project scope and deliverables.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### agile_development</h3>
              <p>
                {`\`\`\`
                        Iterative development approach with regular
                        feedback cycles, allowing for adjustments and
                        ensuring the final product meets your needs.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### quality_assurance</h3>
              <p>
                {`\`\`\`
                        Comprehensive testing including unit tests,
                        integration tests, and user acceptance testing
                        to ensure reliability and performance.
                        \`\`\``}
              </p>
            </div>

            <div className="focus-item">
              <h3>### deployment_support</h3>
              <p>
                {`\`\`\`
                        Smooth deployment process with documentation,
                        training, and ongoing support to ensure
                        successful adoption of your custom solution.
                        \`\`\``}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-section">
        <div className="container">
          <h2>## build_your_custom_solution</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              {`\`\`\`
                    Ready to build a custom solution that perfectly
                    fits your business needs? Our development team
                    specializes in creating tailored software that
                    drives efficiency and supports your growth.
                    \`\`\``}
            </p>
            <div className="testimonial-author">
              <strong>**Discuss your custom development project**</strong>
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
