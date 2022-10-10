import type { ReactElement } from 'react'
import type { GetStaticProps } from 'next'
import type { I18nProps } from 'next-rosetta'
import type { SiteLocale } from '@shared/i18n'
import type { NextPageWithLayout } from 'pages/_app'
import { useI18n } from 'next-rosetta'
import { NextSeo } from 'next-seo'
import { Layout } from '@widgets/layout'
import { HomePage } from '@pages/home'

const Home: NextPageWithLayout = () => {
	console.log('mounted')
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<>
			<NextSeo
				title={t('head.title')}
				description={t('head.description')}
				openGraph={{
					title: t('head.title'),
					description: t('head.description'),
				}}
			/>

			<HomePage />
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
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

export default Home
