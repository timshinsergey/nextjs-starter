// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Custom500Page, { Custom500PageProps } from '@pages/500/index'

export default {
	title: 'Pages/Custom_500',
	component: Custom500Page,
} as Meta

const Template: Story<Custom500PageProps> = (args) => <Custom500Page {...args} />

export const Default = Template.bind({})
