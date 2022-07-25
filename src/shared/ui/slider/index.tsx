import { ButtonHTMLAttributes, FC, forwardRef, useState } from 'react'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import cn from 'classnames'

import Icon from '../icon'

import s from './index.module.css'
import autoSwitchInit from './auto-switch'

export interface SliderProps extends KeenSliderOptions {
	children: JSX.Element | JSX.Element[]
	className?: string
	btnPrevClassName?: string
	btnNextClassName?: string
	btnIconClassName?: string
	dotsClassName?: string
	arrows?: boolean
	dots?: boolean
	autoSwitch?: boolean
	autoSwitchDelay?: number
}

export interface SlideProps {
	children: JSX.Element | JSX.Element[]
	className?: string
}

interface SliderBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconName: string
	btnIconClassName?: string
}

const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>(
	({ iconName, className, btnIconClassName, ...props }, ref): JSX.Element => {
		return (
			<button
				ref={ref}
				className={cn(
					className,
					'absolute z-10 top-1/2 -translate-y-1/2 h-8 w-8 rounded inline-flex items-center justify-center bg-black dark:bg-blue-500 lg:h-11 lg:w-11 disabled:opacity-30'
				)}
				{...props}
			>
				<Icon
					name={iconName}
					className={cn(btnIconClassName, 'h-3 w-3 text-white lg:h-4 lg:w-4')}
				/>
			</button>
		)
	}
)

SliderBtn.displayName = 'SliderBtn'

const Slider: FC<SliderProps> = ({
	loop,
	arrows,
	dots,
	children,
	className,
	btnPrevClassName,
	btnNextClassName,
	btnIconClassName,
	dotsClassName,
	autoSwitch,
	autoSwitchDelay = 2000,
	...options
}): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel)
			},
			created() {
				setLoaded(true)
			},
			...options,
			loop,
		},
		[
			(slider) => {
				if (autoSwitch) {
					autoSwitchInit(slider, autoSwitchDelay)
				}
			},
		]
	)

	return (
		<div className={cn(s.root, 'relative')}>
			<div ref={sliderRef} className={cn(className, 'keen-slider')}>
				{children}
			</div>

			{loaded && arrows && instanceRef.current && (
				<>
					<SliderBtn
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={!loop && currentSlide === 0}
						aria-label='Предыдущий слайд'
						className={cn(btnPrevClassName, 'left-0')}
						iconName='arrow-left'
						btnIconClassName={btnIconClassName}
					/>
					<SliderBtn
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={!loop && currentSlide === instanceRef.current.track.details.maxIdx}
						aria-label='Следующий слайд'
						className={cn(btnNextClassName, 'right-0')}
						iconName='arrow-right'
						btnIconClassName={btnIconClassName}
					/>
				</>
			)}

			{loaded && dots && instanceRef.current && (
				<div className={cn(dotsClassName, 'grid grid-flow-col items-center justify-center gap-6')}>
					{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
						<button
							key={idx}
							onClick={() => {
								instanceRef.current?.moveToIdx(idx)
							}}
							className={cn('bg-zinc-400 h-1 rounded-full', {
								['bg-primary w-4']: currentSlide === idx,
								['w-1']: currentSlide !== idx,
							})}
						></button>
					))}
				</div>
			)}
		</div>
	)
}

const Slide: FC<SlideProps> = ({ children, className }): JSX.Element => {
	return <div className={cn(className, 'keen-slider__slide')}>{children}</div>
}

export { Slider, Slide }
