// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider, { SliderProps } from '@shared/ui/slider'

export default {
	title: 'SharedUi/Slider',
	component: Slider,
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Default = Template.bind({})
