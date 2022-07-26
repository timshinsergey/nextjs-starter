import type { FC, HTMLAttributes } from 'react'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

export interface Custom404PageProps extends HTMLAttributes<HTMLDivElement> {}

const Custom404Page: FC<Custom404PageProps> = ({ className, ...props }): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<main className={cn(s.component, className)} {...props}>
			{t('page404.title')}
		</main>
	)
}

export default Custom404Page
