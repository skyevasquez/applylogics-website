import type { LegacyPage } from '../content/pages'

type LegacyPageProps = {
  page: LegacyPage
}

export function LegacyPageView({ page }: LegacyPageProps) {
  return (
    <div
      className="legacy-page-root"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
  )
}
