import { FC, ComponentProps, ReactNode } from 'react'

import DefaultButton from '../default'

export interface ButtonLinkProps extends ComponentProps<'a'> {
	variant?: 'base' | 'primary' | 'secondary' | 'outlined'
	size?: 'small' | 'medium' | 'large'
	rightIcon?: ReactNode
	leftIcon?: ReactNode
}

const ButtonLink: FC<ButtonLinkProps> = ({
	children,
	rightIcon,
	leftIcon,
	variant = 'primary',
	...props
}): JSX.Element => {
	return (
		<DefaultButton el='a' variant={variant} {...props}>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</DefaultButton>
	)
}

export default ButtonLink
