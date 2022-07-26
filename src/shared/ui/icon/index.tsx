import type { FC } from 'react'

export interface IconProps {
	name: string
	className?: string
	section?: string
}

const Icon: FC<IconProps> = ({ name, className, section = 'common' }): JSX.Element => {
	return (
		<svg className={className}>
			<use xlinkHref={`/sprites/${section}.svg#${name.toLocaleLowerCase()}`} />
		</svg>
	)
}

export default Icon
