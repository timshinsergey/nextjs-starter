import React, { forwardRef, memo } from 'react'
import * as Slider from '@radix-ui/react-slider'
import cn from 'classnames'
import s from './index.module.css'

export interface RangeSliderProps extends Slider.SliderProps {}

const RangeSlider = forwardRef<HTMLSpanElement, RangeSliderProps>(
	({ defaultValue, ...props }, ref): JSX.Element => {
		return (
			<Slider.Root
				ref={ref}
				defaultValue={defaultValue}
				className={cn(s.root, 'my-4 relative flex items-center select-none touch-none w-full')}
				{...props}
			>
				<Slider.Track className={cn(s.track, 'relative bg-neutral-50 grow rounded-full')}>
					<Slider.Range className='absolute h-full rounded-full bg-current' />
				</Slider.Track>
				{defaultValue?.map((item, idx) => (
					<Slider.Thumb
						key={idx}
						className='block h-4 w-4 rounded-full border-2 border-current bg-white after:absolute after:inset-0 after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-current after:content-[""]  dark:bg-black-50'
					/>
				))}
			</Slider.Root>
		)
	}
)

RangeSlider.displayName = 'RangeSlider'

export default memo(RangeSlider)
