import type { ReactNode } from 'react'
import { memo } from 'react'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

interface LayoutProps {
	children: ReactNode
}

const Layout = memo(({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
})

Layout.displayName = 'Layout'

export { Layout }
export type { LayoutProps }
