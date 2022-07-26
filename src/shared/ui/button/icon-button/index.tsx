import { forwardRef } from 'react'
import type { ComponentProps } from 'react'
import cn from 'classnames'

export interface IconButtonProps extends ComponentProps<'button'> {
	variant?: 'primary' | 'secondary' | 'outlined' | 'custom'
	size?: 'small' | 'medium' | 'large' | 'custom'
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{ variant = 'primary', disabled, className, children, size = 'medium', ...props },
		ref
	): JSX.Element => {
		return (
			<button
				ref={ref}
				disabled={disabled}
				tabIndex={disabled ? -1 : 0}
				className={cn(
					'w-7 h-7 bg-white bg-opacity-80 p-0 inline-flex justify-center items-center rounded-full disabled:opacity-50 lg:w-14 lg:h-14',
					className
				)}
				type='button'
				{...props}
			>
				{children}
			</button>
		)
	}
)

IconButton.displayName = 'IconButton'

export default IconButton
