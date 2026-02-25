import { createFileRoute } from '@tanstack/react-router'
import { LegacyPageView } from '../components/legacy-page'
import { getLegacyPage } from '../content/pages'

export const Route = createFileRoute('/$page')({
  head: ({ params }) => {
    const page = getLegacyPage(params.page)

    if (!page) {
      return {
        meta: [
          {
            title: 'Not Found - ApplyLogics',
          },
        ],
      }
    }

    return {
      meta: [
        {
          title: page.title,
        },
        {
          name: 'description',
          content: page.description,
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
    }
  },
  component: StaticLegacyPage,
})

function StaticLegacyPage() {
  const { page: pageParam } = Route.useParams()
  const page = getLegacyPage(pageParam)

  if (!page) {
    return (
      <main
        className="container"
        style={{ paddingTop: '160px', paddingBottom: '160px' }}
      >
        <h1>Page Not Found</h1>
        <p>The requested page does not exist in the migrated route set.</p>
        <p>
          <a href="/">Return to home</a>
        </p>
      </main>
    )
  }

  return <LegacyPageView page={page} />
}
