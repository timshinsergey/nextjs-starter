import React, { FC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import s from './index.module.css'

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}): JSX.Element => {
	return (
		<div className='container mx-auto px-8'>
			<main className='flex min-h-screen flex-1 flex-col items-center justify-center py-16'>
				<h1 className={cn(s.title, 'm-0 text-6xl leading-tight text-center')}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>{' '}
					<Link href='/about'>
						<a>About</a>
					</Link>
				</h1>

				<p className={cn(s.description, 'text-center my-16 text-2xl leading-normal')}>
					Get started by editing{' '}
					<code className={cn(s.code, ' rounded p-3 text-lg')}>pages/index.tsx</code>
				</p>

				<div className='flex max-w-3xl flex-wrap items-center justify-center'>
					<a href='https://nextjs.org/docs' className={s.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href='https://nextjs.org/learn' className={s.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href='https://github.com/vercel/next.js/tree/canary/examples' className={s.card}>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={s.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer className={cn(s.footer, 'flex justify-center items-center flex-1 py-8')}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
					className='flex grow items-center justify-center'
				>
					Powered by{' '}
					<span className={cn(s.logo, 'h-4 ml-2')}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default memo(HomePage)