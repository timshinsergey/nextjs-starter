import type { HTMLAttributes } from 'react'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

interface Custom404PageProps extends HTMLAttributes<HTMLDivElement> {}

const Custom404Page = ({ className, ...props }: Custom404PageProps): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<main className={cn(s.component, className)} {...props}>
			{t('page404.title')}
		</main>
	)
}

export { Custom404Page }
export type { Custom404PageProps }
