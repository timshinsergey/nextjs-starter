import type { ReactNode } from 'react'
import Header from '@widgets/header'
import Footer from '@widgets/footer'

export interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
