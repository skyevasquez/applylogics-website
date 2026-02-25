import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service - ApplyLogics' },
      {
        name: 'description',
        content:
          'Terms of Service for ApplyLogics - Guidelines and rules for using our digital services and website.',
      },
      { property: 'og:image', content: '/og-image.png' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
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
              Legal
            </div>
            <h1 className="hero-main-title">Terms of Service</h1>
            <h2 className="hero-subtitle">Last Updated: January 2026</h2>

            <div className="hero-description">
              <p>
                Please read these Terms of Service carefully before using our website or services. By accessing or
                using any part of the site, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="value-props">
        <div className="container">
          <div className="terms-content" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                1. Acceptance of Terms
              </h3>
              <p style={{ marginBottom: '16px' }}>
                By accessing and using this website and the services provided by ApplyLogics ("we," "us," or "our"),
                you accept and agree to be bound by the terms and provision of this agreement. In addition, when using
                these particular services, you shall be subject to any posted guidelines or rules applicable to such
                services.
              </p>
            </div>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                2. Services Provided
              </h3>
              <p style={{ marginBottom: '16px' }}>
                ApplyLogics provides technology consulting, web development, hosting, and automation services. We
                reserve the right to modify, suspend, or discontinue any aspect of our services at any time without
                notice.
              </p>
            </div>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                3. Intellectual Property
              </h3>
              <p style={{ marginBottom: '16px' }}>
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion and
                other matters related to the Site are protected under applicable copyrights, trademarks and other
                proprietary (including but not limited to intellectual property) rights. The copying, redistribution,
                use or publication by you of any such matters or any part of the Site is strictly prohibited.
              </p>
            </div>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                4. User Obligations
              </h3>
              <p style={{ marginBottom: '16px' }}>
                You agree to use our site and services only for lawful purposes. You are prohibited from violating or
                attempting to violate the security of the Site, including, without limitation, accessing data not
                intended for you or logging onto a server or an account which you are not authorized to access.
              </p>
            </div>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                5. Limitation of Liability
              </h3>
              <p style={{ marginBottom: '16px' }}>
                In no event shall ApplyLogics be liable for any direct, indirect, incidental, special, consequential
                damages, or damages for loss of profits, revenue, data or use, incurred by you or any third party,
                whether in an action in contract or tort, arising from your access to, or use of, the site or any
                services provided.
              </p>
            </div>

            <div className="terms-section" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
                6. Contact Information
              </h3>
              <p style={{ marginBottom: '16px' }}>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <a
                  href="mailto:legal@applylogics.com"
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
                >
                  legal@applylogics.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
