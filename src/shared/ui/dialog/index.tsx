import type { ReactNode } from 'react'
import { forwardRef, memo } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'classnames'
import { Icon } from '../icon'
import s from './index.module.css'

interface DialogProps extends DialogPrimitive.DialogContentProps {
	children: ReactNode
	className?: string
	contentInnerClassName?: string
	overlayClassName?: string
	triggerClassName?: string
	open: boolean
	onOpenChange: (open: boolean) => void
}

const Dialog = memo(
	forwardRef<HTMLDivElement, DialogProps>(
		(
			{
				children,
				className,
				contentInnerClassName,
				overlayClassName,
				triggerClassName,
				open,
				onOpenChange,
				...props
			},
			ref
		): JSX.Element => {
			return (
				<DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
					<DialogPrimitive.Portal>
						<DialogPrimitive.Overlay className={cn(overlayClassName, 'fixed inset-0 z-50')} />
						<DialogPrimitive.Content
							{...props}
							ref={ref}
							className={cn(className, 'fixed inset-0 z-50')}
						>
							<div className={contentInnerClassName}>
								{children}
								<DialogPrimitive.Close aria-label='Закрыть' asChild>
									<button
										className={cn(triggerClassName, 'inline-flex items-center justify-center')}
									>
										<Icon name='close' className='h-6 w-6' />
									</button>
								</DialogPrimitive.Close>
							</div>
						</DialogPrimitive.Content>
					</DialogPrimitive.Portal>
				</DialogPrimitive.Root>
			)
		}
	)
)

Dialog.displayName = 'Dialog'

export { Dialog }
export type { DialogProps }
