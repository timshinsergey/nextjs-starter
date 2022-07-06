import { ReactNode, FC, ComponentType, HTMLAttributes } from 'react'
import cn from 'classnames'

export interface ContainerProps {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	className?: string
}

const Container: FC<ContainerProps> = ({
	children,
	el: Component = 'div',
	className,
}): JSX.Element => {
	return (
		<Component className={cn('px-4 mx-auto w-full max-w-screen-2xl sm:px-12', className)}>
			{children}
		</Component>
	)
}

export default Container
