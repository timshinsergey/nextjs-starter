import { forwardRef, memo } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { DefaultButton } from '../default'

interface ButtonLinkProps extends ComponentProps<'a'> {
	variant?: 'base' | 'primary' | 'secondary' | 'outlined' | 'custom'
	size?: 'small' | 'medium' | 'large' | 'custom'
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const ButtonLink = memo(
	forwardRef<HTMLAnchorElement, ButtonLinkProps>(
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
)

ButtonLink.displayName = 'ButtonLink'

export { ButtonLink }
export type { ButtonLinkProps }
