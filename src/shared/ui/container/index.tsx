import React, { ReactNode, FC, ComponentType, HTMLAttributes, memo } from 'react'
import cn from 'classnames'

export interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
	noPadding?: boolean
}

const Container: FC<ContainerProps> = ({
	children,
	el: Component = 'div',
	className,
	noPadding,
}): JSX.Element => {
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
