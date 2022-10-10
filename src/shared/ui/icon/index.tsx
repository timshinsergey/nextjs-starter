import { memo } from 'react'

interface IconProps {
	name: string
	className?: string
	section?: string
}

const Icon = memo(({ name, className, section = 'common' }: IconProps): JSX.Element => {
	return (
		<svg className={className}>
			<use xlinkHref={`/sprites/${section}.svg#${name.toLocaleLowerCase()}`} />
		</svg>
	)
})

Icon.displayName = 'Icon'

export { Icon }
export type { IconProps }
