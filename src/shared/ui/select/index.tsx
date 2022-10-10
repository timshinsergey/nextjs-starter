import type { ReactNode } from 'react'
import { forwardRef, memo } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

type SelectProps = SelectPrimitive.SelectProps & {
	triggerIcon?: ReactNode
	triggerClassName?: string
	contentClassName?: string
}

type SelectItemProps = SelectPrimitive.SelectItemProps & {
	triggerIcon?: ReactNode
	TextClassName?: string
}

const Select = memo(
	forwardRef<HTMLButtonElement, SelectProps>(
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
)

const SelectItem = memo(
	forwardRef<HTMLDivElement, SelectItemProps>(
		({ children, TextClassName, ...props }, forwardedRef) => {
			return (
				<SelectPrimitive.Item {...props} ref={forwardedRef}>
					<SelectPrimitive.ItemText className={TextClassName}>{children}</SelectPrimitive.ItemText>
				</SelectPrimitive.Item>
			)
		}
	)
)

Select.displayName = 'Select'
SelectItem.displayName = 'SelectItem'

export { Select, SelectItem }
export type { SelectProps, SelectItemProps }
