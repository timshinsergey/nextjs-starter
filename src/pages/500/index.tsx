import type { HTMLAttributes } from 'react'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

interface Custom500PageProps extends HTMLAttributes<HTMLDivElement> {}

const Custom500Page = ({ className, ...props }: Custom500PageProps): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<main className={cn(s.component, className)} {...props}>
			{t('page500.title')}
		</main>
	)
}

export { Custom500Page }
export type { Custom500PageProps }
