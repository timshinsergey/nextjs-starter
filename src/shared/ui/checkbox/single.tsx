import { forwardRef, memo } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'

interface SingleCheckboxProps extends RadixCheckbox.CheckboxProps {
	text?: string
	onValueChange?: (
		value: string | number | readonly string[] | undefined,
		checked: RadixCheckbox.CheckedState
	) => void
	labelClassName?: string
	labelBottomLeft?: string
	labelBottomLeftClassName?: string
	error?: boolean
	variant?: 'primary' | 'custom'
}

const SingleCheckbox = memo(
	forwardRef<HTMLButtonElement, SingleCheckboxProps>(
		(
			{
				id,
				className,
				value,
				text,
				labelClassName,
				labelBottomLeft,
				labelBottomLeftClassName,
				error,
				variant = 'primary',
				...props
			},
			ref
		): JSX.Element => {
			return (
				<div>
					<div className='grid grid-flow-col items-center justify-start gap-2'>
						<RadixCheckbox.Root
							{...props}
							ref={ref}
							value={value}
							id={id}
							className={cn(
								className,
								'bg-transparent rounded h-4 w-4 inline-flex items-center justify-center border border-current [&:data-state="checked"]:translate-x-2'
							)}
						>
							<RadixCheckbox.Indicator>
								<svg width='9' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='m1 3.722 1.658 1.58c.442.42.663.63.911.696a1 1 0 0 0 .63-.04c.238-.095.43-.331.817-.804L8 1.5'
										stroke='#000'
										strokeWidth='1.5'
										strokeLinecap='round'
									/>
								</svg>
							</RadixCheckbox.Indicator>
						</RadixCheckbox.Root>
						{text && (
							<label
								htmlFor={id}
								className={cn(labelClassName, {
									['text-base']: variant === 'primary',
								})}
							>
								{text}
							</label>
						)}
					</div>
					{labelBottomLeft && (
						<span
							className={cn(labelBottomLeftClassName, 'text-xs', {
								['text-[#D6BA84]']: error,
							})}
						>
							{labelBottomLeft}
						</span>
					)}
				</div>
			)
		}
	)
)

SingleCheckbox.displayName = 'SingleCheckbox'

export { SingleCheckbox }
export type { SingleCheckboxProps }
