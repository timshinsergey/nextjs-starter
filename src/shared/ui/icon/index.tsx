
export interface IconProps {
	name: string
	className?: string
	section?: string
}

const Icon = ({ name, className, section = 'common' }: IconProps): JSX.Element => {
	return (
		<svg className={className}>
			<use xlinkHref={`/sprites/${section}.svg#${name.toLocaleLowerCase()}`} />
		</svg>
	)
}

export default Icon
