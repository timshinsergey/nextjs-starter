import type { ReactElement } from 'react'
import type { GetStaticProps } from 'next'
import type { I18nProps } from 'next-rosetta'
import type { SiteLocale } from '@shared/i18n'
import type { NextPageWithLayout } from '@rootPages/_app'
import { Layout } from '@widgets/layout'
import { Custom500Page } from '@pages/500/index'

const Custom_500: NextPageWithLayout = () => <Custom500Page />

Custom_500.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

// Server-side code
export const getStaticProps: GetStaticProps<I18nProps<SiteLocale>> = async ({
	locale,
	defaultLocale,
}) => {
	const currentLocale = locale || defaultLocale
	const { table = {} } = await import(`@shared/i18n/${currentLocale}`)
	return { props: { table } } // Passed to `/pages/_app.tsx`
}

export default Custom_500
