import type { ReactElement } from 'react'
import type { NextPageWithLayout } from 'pages/_app'
import { NextSeo } from 'next-seo'
import Layout from '@widgets/layout'

const About: NextPageWithLayout = () => {
	return (
		<>
			<NextSeo
				title='about page'
				description='you are on the about page'
				openGraph={{
					title: 'about page',
					description: 'you are on the about page',
				}}
			/>
		</>
	)
}

About.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default About
