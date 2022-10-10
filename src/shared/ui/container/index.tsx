import { memo } from 'react'
import type { ReactNode, ComponentType, HTMLAttributes } from 'react'
import cn from 'classnames'

export interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
	noPadding?: boolean
}

const Container = ({
	children,
	el: Component = 'div',
	className,
	noPadding,
}: ContainerProps): JSX.Element => {
	return (
		<Component
			className={cn(className, 'container', {
				['px-0']: noPadding,
			})}
		>
			{children}
		</Component>
	)
}

export default memo(Container)
