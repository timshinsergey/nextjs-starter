// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Breadcrumbs, { BreadcrumbsProps } from '@shared/ui/breadcrumbs'

export default {
	title: 'SharedUi/Breadcrumbs',
	component: Breadcrumbs,
} as Meta

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({})
