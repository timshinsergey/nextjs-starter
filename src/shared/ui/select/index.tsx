import { forwardRef, ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectProps = SelectPrimitive.SelectProps & {
	triggerIcon?: ReactNode
	triggerClassName?: string
	contentClassName?: string
}

export type SelectItemProps = SelectPrimitive.SelectItemProps & {
	triggerIcon?: ReactNode
	TextClassName?: string
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
	({ children, triggerIcon, triggerClassName, contentClassName, ...props }, forwardedRef) => {
		return (
			<SelectPrimitive.Root {...props}>
				<SelectPrimitive.Trigger ref={forwardedRef} className={triggerClassName}>
					<SelectPrimitive.Value />
					{triggerIcon && triggerIcon}
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Content className={contentClassName}>
					<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Root>
		)
	}
)

Select.displayName = 'Select'

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
	({ children, TextClassName, ...props }, forwardedRef) => {
		return (
			<SelectPrimitive.Item {...props} ref={forwardedRef}>
				<SelectPrimitive.ItemText className={TextClassName}>{children}</SelectPrimitive.ItemText>
			</SelectPrimitive.Item>
		)
	}
)

SelectItem.displayName = 'SelectItem'

export { Select, SelectItem }
