import React, { FC } from 'react'
import Link from 'next/link'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<div className='container mx-auto px-8'>
			<main className='flex min-h-screen flex-1 flex-col items-center justify-center py-16'>
				<h1 className={cn(s.title, 'm-0 text-6xl leading-tight text-center')}>
					{t('home.hero.title')} <a href='https://nextjs.org'>Next.js!</a>{' '}
					<Link href='/about'>
						<a>{t('home.hero.link')}</a>
					</Link>
				</h1>

				<p className={cn(s.description, 'text-center my-16 text-2xl leading-normal')}>
					{t('home.hero.description')}{' '}
					<code className={cn(s.code, ' rounded p-3 text-lg')}>pages/index.tsx</code>
				</p>

				<div className='flex max-w-3xl flex-wrap items-center justify-center'>
					<a href='https://nextjs.org/docs' className={s.card}>
						<h2>{t('home.links.one.title')} &rarr;</h2>
						<p>{t('home.links.one.description')}</p>
					</a>

					<a href='https://nextjs.org/learn' className={s.card}>
						<h2>{t('home.links.two.title')} &rarr;</h2>
						<p>{t('home.links.two.description')}</p>
					</a>

					<a href='https://github.com/vercel/next.js/tree/canary/examples' className={s.card}>
						<h2>{t('home.links.three.title')} &rarr;</h2>
						<p>{t('home.links.three.description')}</p>
					</a>

					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={s.card}
					>
						<h2>{t('home.links.four.title')} &rarr;</h2>
						<p>{t('home.links.four.description')}</p>
					</a>
				</div>
			</main>
		</div>
	)
}

export default HomePage
