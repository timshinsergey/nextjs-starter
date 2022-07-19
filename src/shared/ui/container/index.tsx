import React, { ReactNode, FC, ComponentType, HTMLAttributes, memo } from 'react'
import cn from 'classnames'

export interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
	fluid?: boolean
	noPadding?: boolean
}

const Container: FC<ContainerProps> = ({
	children,
	el: Component = 'div',
	className,
	fluid,
	noPadding,
}): JSX.Element => {
	return (
		<Component
			className={cn(className, 'mx-auto w-full', {
				['px-4 sm:px-12 xl:px-36']: !noPadding,
				['max-w-screen-3xl']: !fluid,
			})}
		>
			{children}
		</Component>
	)
}

export default memo(Container)
