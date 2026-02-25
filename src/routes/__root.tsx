import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { defaultDescription } from '../content/pages'
import '../query-client'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ApplyLogics - Agentic Systems for the Enterprise',
      },
      {
        name: 'description',
        content: defaultDescription,
      },
      {
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        property: 'twitter:image',
        content: '/og-image.png',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo-binary.svg',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
      {
        rel: 'stylesheet',
        href: '/styles.css',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
        <script src="/script.js"></script>
        <Scripts />
      </body>
    </html>
  )
}
