import { FC, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import cn from 'classnames'
import s from './index.module.css'
import IconButton from '../button/icon-button'
import Icon from '../icon'

export interface SliderProps {
	children: JSX.Element[]
	loop?: boolean
}

const Slider: FC<SliderProps> = ({ loop = false, children }): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	return (
		<div className={cn(s.root, 'relative')}>
			<div ref={sliderRef} className='keen-slider'>
				{children.map((component, idx) => (
					<div className='keen-slider__slide' key={idx.toString()}>
						{component}
					</div>
				))}
			</div>

			{loaded && instanceRef.current && (
				<>
					<IconButton
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={!loop && currentSlide === 0}
						aria-label='Предыдущий слайд'
						className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
					>
						<Icon name='chevron-left' className='h-4 w-2 lg:h-5 lg:w-3' />
					</IconButton>

					<IconButton
						onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={!loop && currentSlide === instanceRef.current.track.details.slides.length - 1}
						aria-label='Следующий слайд'
						className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'
					>
						<Icon name='chevron-right' className='h-4 w-2 lg:h-5 lg:w-3' />
					</IconButton>
				</>
			)}
		</div>
	)
}

export default Slider
