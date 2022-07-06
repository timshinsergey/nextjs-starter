import { FC, ComponentProps } from 'react'
import cn from 'classnames'

import Icon from '@shared/ui/icon'

export interface SliderButtonProps extends ComponentProps<'button'> {
	variant?: 'primary' | 'secondary'
	direction: 'left' | 'right'
	size?: 'small' | 'medium'
}

const SliderButton: FC<SliderButtonProps> = ({
	variant = 'primary',
	disabled,
	direction,
	className,
	size = 'medium',
	...props
}): JSX.Element => {
	return (
		<button
			disabled={disabled}
			tabIndex={disabled ? -1 : 0}
			className={cn(
				'w-6 h-6 p-0 inline-flex justify-center items-center rounded-full disabled:opacity-50',
				{
					['lg:w-8 lg:h-8']: size === 'medium',
					['bg-blue-50']: variant === 'primary',
					['bg-blue-100']: variant === 'secondary',
				},
				className
			)}
			type='button'
			{...props}
		>
			{direction === 'left' && <Icon className='h-6 w-6' name='chevron-left' />}
			{direction === 'right' && <Icon className='h-6 w-6' name='chevron-right' />}
		</button>
	)
}

export default SliderButton
