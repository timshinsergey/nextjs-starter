import { memo } from 'react'
import cn from 'classnames'
import s from './index.module.css'

interface SpinnerProps {
	rootClassNames?: string
	svgClassNames?: string
	ariaLabelledby?: string
}

const Spinner = memo(
	({
		rootClassNames,
		svgClassNames = 'w-4 h-4 text-white',
		ariaLabelledby,
	}: SpinnerProps): JSX.Element => {
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
)

Spinner.displayName = 'Spinner'

export { Spinner }
export type { SpinnerProps }
