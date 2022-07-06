import { FC, ComponentProps } from 'react'
import cn from 'classnames'

import DefaultButton from '../default'
import Spinner from '@shared/ui/spinner'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'base' | 'primary' | 'secondary' | 'outlined'
  loading?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading,
  disabled,
  className,
  ...props
}): JSX.Element => {
  return (
    <DefaultButton
      variant={variant}
      disabled={loading || disabled}
      tabIndex={loading || disabled ? -1 : 0}
      className={cn(className, {
        ['text-transparent']: loading,
      })}
      type='button'
      {...props}
    >
      {children}
      {loading && (
        <Spinner
          wrapClassNames='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          spinnerClassNames={cn('w-4 h-4', {
            ['text-white']: variant === 'primary',
            ['text-primary']:
              variant === 'base' ||
              variant === 'secondary' ||
              variant === 'outlined',
          })}
        />
      )}
    </DefaultButton>
  )
}

export default Button
