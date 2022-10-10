import type { ReactNode } from 'react'
import { forwardRef, memo } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import cn from 'classnames'
import s from './index.module.css'
import useId from '@shared/hooks/use-id'

interface RadioGroupProps extends RadioGroup.RadioGroupProps {
	children: ReactNode
}

interface RadioGroupItemProps extends RadioGroup.RadioGroupItemProps {
	className?: string
	idName: string
	text?: string
}

const RadioItem = memo(
	forwardRef<HTMLInputElement, RadioGroupItemProps>(
		({ idName, className, text, ...props }): JSX.Element => {
			const id = useId(idName)

			return (
				<div className='grid grid-flow-col justify-start gap-1.5'>
					<RadioGroup.Item
						{...props}
						className={cn(
							className,
							'bg-transparent rounded-full h-4 w-4 border border-current mt-1'
						)}
						id={id}
					>
						<RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-current after:content-[""]' />
					</RadioGroup.Item>
					{text && (
						<label htmlFor={id} className='text-base'>
							{text}
						</label>
					)}
				</div>
			)
		}
	)
)

const Radio = memo(({ children, ...props }: RadioGroupProps): JSX.Element => {
	return <RadioGroup.Root {...props}>{children}</RadioGroup.Root>
})

RadioItem.displayName = 'RadioItem'
Radio.displayName = 'Radio'

export { Radio, RadioItem }
export type { RadioGroupProps, RadioGroupItemProps }
