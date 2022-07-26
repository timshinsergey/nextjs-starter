import { useCallback } from 'react'
import type { FC } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'
import s from './index.module.css'

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {
	text?: string
	onValueChange?: (
		value: string | number | readonly string[] | undefined,
		checked: RadixCheckbox.CheckedState
	) => void
}

const Checkbox: FC<CheckboxProps> = ({
	id,
	className,
	value,
	text,
	onValueChange,
	...props
}): JSX.Element => {
	const handleValueChange = useCallback(
		(checked: RadixCheckbox.CheckedState) => {
			if (onValueChange) {
				onValueChange(value, checked)
			}
		},
		[onValueChange, value]
	)

	return (
		<div className='grid grid-flow-col justify-start gap-1.5'>
			<RadixCheckbox.Root
				{...props}
				value={value}
				id={id}
				className={cn(className, 'bg-transparent rounded h-4 w-4 border border-current mt-1')}
				onCheckedChange={handleValueChange}
			>
				<RadixCheckbox.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-sm after:bg-current after:content-[""]' />
			</RadixCheckbox.Root>
			{text && (
				<label htmlFor={id} className='text-base'>
					{text}
				</label>
			)}
		</div>
	)
}

export default Checkbox
