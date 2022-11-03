import '@app/app.css'
import type { ReactElement, ReactNode } from 'react'
import Router from 'next/router'
import Script from 'next/script'
import { I18nProvider } from 'next-rosetta'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { DefaultSeo } from 'next-seo'
import NProgress from 'nprogress'
import SEO from '@app/next-seo.config.json'
import { GTM_ID } from '@shared/libs/gtag'
const Toast = dynamic(() => import('@shared/ui/toast'), {
	ssr: false,
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

declare global {
	interface Window {
		dataLayer: Record<string, any>[]
	}
}

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<Script
				id='gtag-base'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${GTM_ID}');
          `,
				}}
			/>
			<I18nProvider table={pageProps.table /* From getStaticProps */}>
				<DefaultSeo {...SEO} />
				{getLayout(<Component {...pageProps} />)}
				<Toast />
			</I18nProvider>
		</>
	)
}

export default MyApp
