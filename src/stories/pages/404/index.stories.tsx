// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Custom404Page, { Custom404PageProps } from '@pages/404/index'

export default {
	title: 'Pages/Custom_404',
	component: Custom404Page,
} as Meta

const Template: Story<Custom404PageProps> = (args) => <Custom404Page {...args} />

export const Default = Template.bind({})
