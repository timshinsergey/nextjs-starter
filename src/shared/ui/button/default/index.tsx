import {
  ComponentProps,
  ElementType,
  forwardRef,
  ReactElement,
  Ref,
} from 'react'
import cn from 'classnames'

import s from './index.module.css'

export type DefaultButtonOwnProps<E extends ElementType = ElementType> = {
  el?: E
  variant?: 'link' | 'base' | 'primary' | 'secondary' | 'outlined'
  className?: string
}

export type DefaultButtonProps<E extends ElementType> =
  DefaultButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof DefaultButtonOwnProps>

const defaultElement = 'button'

const DefaultButton: <E extends ElementType = typeof defaultElement>(
  props: DefaultButtonProps<E>
) => ReactElement | null = forwardRef(function DefaultButton(
  { el, variant, className, ...props }: DefaultButtonOwnProps,
  ref: Ref<Element>
) {
  const Element = el || defaultElement
  return (
    <Element
      ref={ref}
      className={cn(
        s.button,
        'inline-flex relative justify-center items-center rounded-lg p-2 disabled:opacity-50',
        {
          ['text-xl md:text-3xl']:
            variant === 'primary' ||
            variant === 'secondary' ||
            variant === 'outlined',
          ['text-sm underline hover:bg-primary hover:bg-opacity-5 hover:no-underline md:text-lg']:
            variant === 'base',
          ['bg-primary text-white font-bold hover:bg-blue-300 disabled:hover:bg-primary']:
            variant === 'primary',
          ['bg-secondary text-primary font-semibold hover:bg-blue-100 hover:bg-opacity-50']:
            variant === 'secondary',
          ['bg-transparent font-bold text-primary border border-primary hover:bg-primary hover:bg-opacity-5']:
            variant === 'outlined',
        },
        className
      )}
      {...props}
    />
  )
})

export default DefaultButton
