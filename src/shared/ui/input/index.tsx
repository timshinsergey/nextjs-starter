import { forwardRef, memo } from 'react'
import type { InputHTMLAttributes } from 'react'
import cn from 'classnames'
import s from './index.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'primary' | 'secondary' | 'outlined' | 'custom'
}

const Input = memo(
	forwardRef<HTMLInputElement, InputProps>(
		({ className, variant = 'primary', ...props }, ref): JSX.Element => {
			return (
				<input
					ref={ref}
					className={cn(className, 'w-full', {
						['h-10 px-5 text-sm bg-transparent text-neutral-50 border-b border-b-neutral-50 lg:text-base']:
							variant === 'primary',
						['h-8 px-5 text-sm bg-transparent border rounded border-neutral-50 lg:text-base']:
							variant === 'outlined',
					})}
					{...props}
				/>
			)
		}
	)
)

Input.displayName = 'Input'

export { Input }
export type { InputProps }
