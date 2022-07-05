import type { ReactElement } from 'react'
import { NextSeo } from 'next-seo'
import cn from 'classnames'
import type { NextPageWithLayout } from '@pages/_app'
import Layout from '@widgets/layout'
import s from './index.module.css'

export interface AboutPageProps {

}

const AboutPage: NextPageWithLayout<AboutPageProps> = () => {
	return (
    <>
      <NextSeo
        title='about page'
        description='you are on the about page'
        openGraph={{
          title: 'about page' ,
          description: 'you are on the about page',
        }}
      />

      <div className={s.component}>
        About Page
      </div>
    </>
	)
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default AboutPage
