import { memo } from 'react'
import type { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	message: string
	variant?: 'default' | 'success' | 'error' | 'warning'
}

const Alert: FC<AlertProps> = ({
	className,
	message,
	variant = 'default',
	...props
}): JSX.Element => {
	return (
		<div
			role='alert'
			className={cn(
				className,
				'flex items-center bg space-x-2 rounded-md px-4 py-3 text-sm shadow',
				{
					['bg-white text-black-50 dark:bg-black-50 dark:text-white']: variant === 'default',
					['bg-lime-100 text-lime-900']: variant === 'success',
					['bg-red-100 text-red-900']: variant === 'error',
					['bg-amber-100 text-amber-900']: variant === 'warning',
				}
			)}
			{...props}
		>
			<p>{message}</p>
		</div>
	)
}

// If you leave memo, the i18n texts
// will not be displayed when switching languages
export default memo(Alert)
