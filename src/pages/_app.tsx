import '@app/app.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

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
		<>
			<DefaultSeo
				title={'Starter nextjs projects'}
				description={'This is awesome starter nextjs projects'}
				openGraph={{
					locale: 'ru_RU',
					title: 'Starter nextjs projects',
					description: 'This is awesome starter nextjs projects',
					site_name: 'starter next',
					type: 'website',
					url: 'example.com',
				}}
			/>
			{getLayout(<Component {...pageProps} />)}
		</>
	)
}

export default MyApp
