import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document'
import { GTM_ID } from '@shared/libs/gtag'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render(): JSX.Element {
		return (
			<Html lang='ru'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<link href='https://www.googletagmanager.com' rel='preconnect' />
				</Head>

				<body>
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height='0'
							width='0'
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
