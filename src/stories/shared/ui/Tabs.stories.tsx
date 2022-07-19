// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { TabsRoot, TabsRootProps } from '@shared/ui/tabs'

export default {
	title: 'Shared/Ui/Tabs',
	component: TabsRoot,
} as Meta

const Template: Story<TabsRootProps> = (args) => <TabsRoot {...args} />

export const Default = Template.bind({})
