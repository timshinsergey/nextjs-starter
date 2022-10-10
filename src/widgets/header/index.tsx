import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import s from './index.module.css'
import { memo } from 'react'

interface HeaderProps {}

const Header = memo(({}: HeaderProps): JSX.Element => {
	const router = useRouter()

	return (
		<header className={s.component}>
			{router.locales?.map((loc) => (
				<li key={loc}>
					<Link href={router.asPath} locale={loc}>
						<a className={loc === router.locale ? 'bg-slate-300' : ''}>{loc}</a>
					</Link>
				</li>
			))}
		</header>
	)
})

Header.displayName = 'Header'

export { Header }
export type { HeaderProps }
