import type { ReactNode, ComponentType, HTMLAttributes } from 'react'
import { memo } from 'react'
import cn from 'classnames'

interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
	noPadding?: boolean
}

const Container = memo(
	({ children, el: Component = 'div', className, noPadding }: ContainerProps): JSX.Element => {
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
)

Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
