import { FC } from 'react'
import cn from 'classnames'
import s from './index.module.css'

export interface SpinnerProps {
	rootClassNames?: string
	svgClassNames?: string
	ariaLabelledby?: string
}

const Spinner: FC<SpinnerProps> = ({
	rootClassNames,
	svgClassNames = 'w-4 h-4 text-white',
	ariaLabelledby,
}): JSX.Element => {
	return (
		<span
			role='progressbar'
			aria-labelledby={ariaLabelledby}
			className={cn(s.root, 'inline-flex', rootClassNames)}
		>
			<svg viewBox='22 22 44 44' className={cn(s.svg, 'inline-flex', svgClassNames)}>
				<circle cx='44' cy='44' r='20.2' fill='none' />
			</svg>
		</span>
	)
}

export default Spinner
