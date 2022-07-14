// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import SocialMedia, { SocialMediaProps } from '@entities/social-media'

export default {
	title: 'Entities/SocialMedia',
	component: SocialMedia,
} as Meta

const Template: Story<SocialMediaProps> = (args) => <SocialMedia {...args} />

export const Default = Template.bind({})
