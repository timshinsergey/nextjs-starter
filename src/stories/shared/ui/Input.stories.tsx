// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { FormInputProps } from '@shared/ui/input'

export default {
	title: 'Shared/Ui/Input',
	component: Input,
} as Meta

const Template: Story<FormInputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
