// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import AboutPage, { AboutPageProps } from 'pages/about/index'

export default {
	title: 'Pages/About',
	component: AboutPage,
} as Meta

const Template: Story<AboutPageProps> = (args) => <AboutPage {...args} />

export const Default = Template.bind({})
