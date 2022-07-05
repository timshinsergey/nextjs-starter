// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '@widgets/header'

export default {
	title: 'Widgets/Header',
	component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
