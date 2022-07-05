import type { FC, ReactNode } from 'react'
import Header from '@widgets/header'
import Footer from '@widgets/footer'

export interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
