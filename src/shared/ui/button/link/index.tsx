import { ComponentProps, ReactNode, forwardRef } from 'react'

import DefaultButton from '../default'

export interface ButtonLinkProps extends ComponentProps<'a'> {
	variant?: 'base' | 'primary' | 'secondary' | 'outlined' | 'custom'
	size?: 'small' | 'medium' | 'large' | 'custom'
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	({ children, rightIcon, leftIcon, variant = 'primary', ...props }, ref): JSX.Element => {
		return (
			<DefaultButton ref={ref} el='a' variant={variant} {...props}>
				{leftIcon && leftIcon}
				{children}
				{rightIcon && rightIcon}
			</DefaultButton>
		)
	}
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
