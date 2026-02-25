import { createFileRoute } from '@tanstack/react-router'
import { LegacyPageView } from '../components/legacy-page'
import { homePage } from '../content/pages'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: homePage.title,
      },
      {
        name: 'description',
        content: homePage.description,
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
  }),
  component: App,
})

function App() {
  return <LegacyPageView page={homePage} />
}
