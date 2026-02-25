import indexHtml from './pages/index.html?raw'
import aboutHtml from './pages/about.html?raw'
import aiBusinessAutomationHtml from './pages/ai-business-automation.html?raw'
import businessAutomationHtml from './pages/business-automation.html?raw'
import contactHtml from './pages/contact.html?raw'
import customDevelopmentHtml from './pages/custom-development.html?raw'
import digitalPresenceHtml from './pages/digital-presence.html?raw'
import hostingServerSetupHtml from './pages/hosting-server-setup.html?raw'
import maintenanceSupportHtml from './pages/maintenance-support.html?raw'
import ongoingPartnershipHtml from './pages/ongoing-partnership.html?raw'
import technicalInfrastructureHtml from './pages/technical-infrastructure.html?raw'
import technologyConsultingHtml from './pages/technology-consulting.html?raw'
import termsHtml from './pages/terms.html?raw'
import webDesignDevelopmentHtml from './pages/web-design-development.html?raw'

export type LegacyPage = {
  title: string
  description: string
  html: string
}

const defaultDescription =
  'ApplyLogics - Full-service technology company providing end-to-end digital solutions including web design, hosting, AI automation, and custom development for businesses.'

export const homePage: LegacyPage = {
  title: 'ApplyLogics - Agentic Systems for the Enterprise',
  description: defaultDescription,
  html: indexHtml,
}

const pages: Record<string, LegacyPage> = {
  'index.html': homePage,
  'about.html': {
    title: 'About Us - ApplyLogics',
    description: defaultDescription,
    html: aboutHtml,
  },
  'ai-business-automation.html': {
    title: 'AI Business Automation - ApplyLogics',
    description: defaultDescription,
    html: aiBusinessAutomationHtml,
  },
  'business-automation.html': {
    title: 'Business Automation - ApplyLogics',
    description: defaultDescription,
    html: businessAutomationHtml,
  },
  'contact.html': {
    title: 'Contact Us - ApplyLogics',
    description: defaultDescription,
    html: contactHtml,
  },
  'custom-development.html': {
    title: 'Custom Development - ApplyLogics',
    description: defaultDescription,
    html: customDevelopmentHtml,
  },
  'digital-presence.html': {
    title: 'Digital Presence - ApplyLogics',
    description: defaultDescription,
    html: digitalPresenceHtml,
  },
  'hosting-server-setup.html': {
    title: 'Hosting & Server Setup - ApplyLogics',
    description: defaultDescription,
    html: hostingServerSetupHtml,
  },
  'maintenance-support.html': {
    title: 'Maintenance & Support - ApplyLogics',
    description: defaultDescription,
    html: maintenanceSupportHtml,
  },
  'ongoing-partnership.html': {
    title: 'Ongoing Partnership - ApplyLogics',
    description: defaultDescription,
    html: ongoingPartnershipHtml,
  },
  'technical-infrastructure.html': {
    title: 'Technical Infrastructure - ApplyLogics',
    description: defaultDescription,
    html: technicalInfrastructureHtml,
  },
  'technology-consulting.html': {
    title: 'Technology Consulting - ApplyLogics',
    description: defaultDescription,
    html: technologyConsultingHtml,
  },
  'terms.html': {
    title: 'Terms of Service - ApplyLogics',
    description: defaultDescription,
    html: termsHtml,
  },
  'web-design-development.html': {
    title: 'Web Design & Development - ApplyLogics',
    description: defaultDescription,
    html: webDesignDevelopmentHtml,
  },
}

export function getLegacyPage(page: string): LegacyPage | undefined {
  return pages[page]
}

export { defaultDescription }
