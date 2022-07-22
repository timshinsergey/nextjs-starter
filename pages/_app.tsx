import '@app/app.css'
import type { ReactElement, ReactNode } from 'react'
import { I18nProvider } from 'next-rosetta'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '@app/next-seo.config.json'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<I18nProvider table={pageProps.table /* From getStaticProps */}>
			<DefaultSeo {...SEO} />
			{getLayout(<Component {...pageProps} />)}
		</I18nProvider>
	)
}

export default MyApp
