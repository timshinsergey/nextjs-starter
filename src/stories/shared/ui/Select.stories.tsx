// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Select, SelectProps } from '@shared/ui/select'

export default {
	title: 'SharedUi/Select',
	component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
