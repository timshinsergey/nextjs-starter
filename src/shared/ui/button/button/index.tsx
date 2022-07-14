import { ComponentProps, ReactNode, forwardRef } from 'react'
import cn from 'classnames'

import DefaultButton from '../default'
import Spinner from '@shared/ui/spinner'

export interface ButtonProps extends ComponentProps<'button'> {
	variant?: 'base' | 'primary' | 'secondary' | 'outlined'
	size?: 'small' | 'medium' | 'large' | 'custom'
	loading?: boolean
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ children, variant = 'primary', loading, disabled, className, rightIcon, leftIcon, ...props },
		ref
	): JSX.Element => {
		return (
			<DefaultButton
				ref={ref}
				variant={variant}
				disabled={loading || disabled}
				tabIndex={loading || disabled ? -1 : 0}
				className={cn(className, {
					['text-transparent']: loading,
				})}
				type='button'
				{...props}
			>
				{leftIcon && !loading && leftIcon}
				{children}
				{rightIcon && !loading && rightIcon}
				{loading && (
					<Spinner
						svgClassNames={cn('w-4 h-4', {
							['text-white']: variant === 'primary',
							['text-sort-100']: loading,
						})}
					/>
				)}
			</DefaultButton>
		)
	}
)

Button.displayName = 'Button'

export default Button
