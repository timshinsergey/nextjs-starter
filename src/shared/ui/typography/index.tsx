import type { ReactNode, ComponentType, HTMLAttributes } from 'react'
import { memo } from 'react'
import cn from 'classnames'

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode | ReactNode[]
	el?: string | ComponentType<HTMLAttributes<HTMLElement>>
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'body' | 'subtitle' | 'custom'
	truncate?: boolean
}

const Typography = memo(
	({
		children,
		variant = 'p',
		el: Component = 'p',
		truncate,
		className,
		...props
	}: TypographyProps): JSX.Element => {
		return (
			<Component
				className={cn(
					{
						['text-4xl font-bold leading-7 mb-1 md:text-7xl md:leading-10 md:mb-2']:
							variant === 'h1',
						['text-4xl font-bold leading-7 md:text-6xl md:leading-8']: variant === 'h2',
						['text-xl font-bold leading-5 mt-4 mb-3 md:text-6xl md:leading-8 md:mt-8 md:mb-4']:
							variant === 'h3',
						['text-xl font-semibold leading-5 md:text-4xl md:leading-7']: variant === 'h4',
						['text-xl leading-5']: variant === 'h5',
						['text-lg leading-4']: variant === 'h6',
						['text-xl leading-5 md:text-4xl md:leading-7']:
							variant === 'body' || variant === 'subtitle',
						['text-base']: variant === 'p',
						['truncate']: truncate,
					},
					className
				)}
				{...props}
			>
				{children}
			</Component>
		)
	}
)

Typography.displayName = 'Typography'

export { Typography }
export type { TypographyProps }
