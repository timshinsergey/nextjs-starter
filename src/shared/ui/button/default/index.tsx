import React, { forwardRef } from 'react'
import type { ComponentProps, ElementType, ReactElement, Ref } from 'react'
import cn from 'classnames'

import s from './index.module.css'

export type DefaultButtonOwnProps<E extends ElementType = ElementType> = {
	el?: E
	variant?: 'link' | 'base' | 'primary' | 'secondary' | 'outlined' | 'custom'
	size?: 'small' | 'medium' | 'large' | 'custom'
	className?: string
}

export type DefaultButtonProps<E extends ElementType> = DefaultButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof DefaultButtonOwnProps>

const defaultElement = 'button'

const DefaultButton: <E extends ElementType = typeof defaultElement>(
	props: DefaultButtonProps<E>
) => ReactElement | null = forwardRef(function DefaultButton(
	{ el, variant, className, size = 'small', ...props }: DefaultButtonOwnProps,
	ref: Ref<Element>
) {
	const Element = el || defaultElement
	return (
		<Element
			ref={ref}
			className={cn(
				s.root,
				'grid grid-flow-col relative justify-center items-center font-bold gap-2',
				{
					['bg-primary text-white hover:bg-primary-hover active:bg-primary-active focus:bg-primary-active disabled:bg-sort-50 disabled:text-sort-100']:
						variant === 'primary',
					['bg-sort-300 text-black-400 disabled:bg-sort-50 disabled:text-sort-100']:
						variant === 'secondary',
					['bg-white border-sort-50 border text-black disabled:bg-sort-50 disabled:text-sort-100']:
						variant === 'outlined',
					['text-xs h-8 px-2 rounded lg:text-sm lg:h-11 lg:px-3 lg:rounded-md']: size === 'small',
					['text-sm h-11 px-5 rounded-md']: size === 'medium',
					['text-md h-14 px-9 rounded-md']: size === 'large',
				},
				className
			)}
			{...props}
		/>
	)
})

export default DefaultButton
