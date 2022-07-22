import { FC } from 'react'
import Image from 'next/image'
import { useI18n } from 'next-rosetta'
import cn from 'classnames'
import type { SiteLocale } from '@shared/i18n'
import s from './index.module.css'

export interface FooterProps {}

const Footer: FC<FooterProps> = ({}): JSX.Element => {
	const i18n = useI18n<SiteLocale>()
	const { t } = i18n

	return (
		<div className='container mx-auto px-8'>
			<footer className={cn(s.footer, 'flex justify-center items-center flex-1 py-8')}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
					className='flex grow items-center justify-center'
				>
					{t('footer.powered')}{' '}
					<span className={cn(s.logo, 'h-4 ml-2')}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default Footer
