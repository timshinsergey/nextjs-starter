// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import RangeSlider, { RangeSliderProps } from '@shared/ui/range-slider'

export default {
	title: 'Shared/Ui/RangeSlider',
	component: RangeSlider,
} as Meta

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />

export const Default = Template.bind({})
