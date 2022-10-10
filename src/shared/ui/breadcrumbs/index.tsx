import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './index.module.css'

export interface BreadcrumbsProps {
	list: { text: string; url?: string }[]
}

const Separator = ({ className }: { className?: string }): JSX.Element => (
	<svg
		width='5'
		height='5'
		viewBox='0 0 5 5'
		aria-hidden='true'
		focusable='false'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path
			d='M4.859 2.707a.222.222 0 0 0 0-.314L3.447.98a.222.222 0 0 0-.314.314L4.388 2.55 3.133 3.805a.222.222 0 1 0 .314.313L4.86 2.707Zm-4.594.065h4.437v-.444H.265v.444Z'
			fill='currentColor'
		/>
	</svg>
)

const Breadcrumbs = ({ list }: BreadcrumbsProps): JSX.Element => {
	return (
		<ol
			className='my-2 grid grid-flow-col justify-start text-sm lg:text-lg'
			itemScope
			itemType='https://schema.org/BreadcrumbList'
			aria-label='Строка навигации'
		>
			{list.map((item, idx, arr) => (
				<li
					className='grid grid-flow-col items-center justify-start'
					itemProp='itemListElement'
					itemScope
					itemType='https://schema.org/ListItem'
					key={idx}
				>
					{item.url ? (
						<Link href={`${process.env.NEXT_PUBLIC_DOMAIN}${item.url}`}>
							<a className='underline' itemProp='item'>
								<span itemProp='name'>{item.text}</span>
							</a>
						</Link>
					) : (
						<span className='text-black dark:text-white' itemProp='name'>
							{item.text}
						</span>
					)}
					{arr.length - 1 !== idx && <Separator className='h-4 w-4 px-1 lg:h-7 lg:w-7 lg:px-2' />}
					<meta itemProp='position' content={`${idx + 1}`} />
				</li>
			))}
		</ol>
	)
}

export default memo(Breadcrumbs)
