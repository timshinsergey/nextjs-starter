// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Spinner, { SpinnerProps } from '@shared/ui/spinner'

export default {
	title: 'SharedUi/Spinner',
	component: Spinner,
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
