// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Footer, { FooterProps } from '@widgets/footer'

export default {
	title: 'Widgets/Footer',
	component: Footer,
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Default = Template.bind({})
