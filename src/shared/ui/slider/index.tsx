import { FC, useState } from 'react'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import cn from 'classnames'

import IconButton from '../button/icon-button'
import Icon from '../icon'
import s from './index.module.css'

export interface SliderProps extends KeenSliderOptions {
	children: JSX.Element | JSX.Element[]
	className?: string
	btnPrevClassName?: string
	btnNextClassName?: string
}

export interface SlideProps {
	children: JSX.Element | JSX.Element[]
	className?: string
}

const Slider: FC<SliderProps> = ({
	loop,
	children,
	className,
	btnPrevClassName,
	btnNextClassName,
	...options
}): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
		...options,
	})

	return (
		<div className={cn(s.root, 'relative')}>
			<div ref={sliderRef} className={cn(className, 'keen-slider')}>
				{children}
			</div>

			{loaded && instanceRef.current && (
				<>
					<IconButton
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={!loop && currentSlide === 0}
						aria-label='Предыдущий слайд'
						className={cn(
							btnPrevClassName,
							'absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
						)}
					>
						<Icon name='chevron-left' className='h-4 w-2 lg:h-5 lg:w-3' />
					</IconButton>

					<IconButton
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={!loop && currentSlide === instanceRef.current.track.details.slides.length - 1}
						aria-label='Следующий слайд'
						className={cn(
							btnNextClassName,
							'absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'
						)}
					>
						<Icon name='chevron-right' className='h-4 w-2 lg:h-5 lg:w-3' />
					</IconButton>
				</>
			)}
		</div>
	)
}

const Slide: FC<SlideProps> = ({ children, className }): JSX.Element => {
	return <div className={cn(className, 'keen-slider__slide')}>{children}</div>
}

export { Slider, Slide }
