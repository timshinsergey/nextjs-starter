import type {
	KeenSliderHooks,
	KeenSliderInstance,
	KeenSliderOptions,
	SliderInstance,
} from 'keen-slider/react'

const autoSwitchInit = (
	slider: SliderInstance<
		KeenSliderOptions<{}, {}, KeenSliderHooks>,
		KeenSliderInstance<{}, {}, KeenSliderHooks>,
		KeenSliderHooks
	>,
	delay: number
) => {
	let timeout: ReturnType<typeof setTimeout>
	let mouseOver = false
	function clearNextTimeout() {
		clearTimeout(timeout)
	}
	function nextTimeout() {
		clearTimeout(timeout)
		if (mouseOver) return
		timeout = setTimeout(() => {
			slider.next()
		}, delay)
	}
	slider.on('created', () => {
		slider.container.addEventListener('mouseover', () => {
			mouseOver = true
			clearNextTimeout()
		})
		slider.container.addEventListener('mouseout', () => {
			mouseOver = false
			nextTimeout()
		})
		nextTimeout()
	})
	slider.on('dragStarted', clearNextTimeout)
	slider.on('animationEnded', nextTimeout)
	slider.on('updated', nextTimeout)
}

export default autoSwitchInit
