// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Radio, RadioGroupProps } from '@shared/ui/radio-group'

export default {
	title: 'Shared/Ui/RadioGroup',
	component: Radio,
} as Meta

const Template: Story<RadioGroupProps> = (args) => <Radio {...args} />

export const Default = Template.bind({})
