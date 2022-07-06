import { FC, ComponentProps } from 'react'

import DefaultButton from '../default'

export interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'base' | 'primary' | 'secondary' | 'outlined'
}

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  variant = 'primary',
  ...props
}): JSX.Element => {
  return (
    <DefaultButton el='a' variant={variant} {...props}>
      {children}
    </DefaultButton>
  )
}

export default ButtonLink
