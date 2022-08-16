import type { FC, HTMLAttributes } from 'react'
import Link from 'next/link'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

export interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}

const AboutPage: FC<AboutPageProps> = ({ className, ...props }): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<div className={cn(s.component, className)} {...props}>
			{t('about.hero.title')}
			<Link href='/'>
				<a>about</a>
			</Link>
		</div>
	)
}

export default AboutPage
