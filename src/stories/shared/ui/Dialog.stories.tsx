// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Dialog, { DialogProps } from '@shared/ui/dialog'

export default {
	title: 'Shared/Ui/Dialog',
	component: Dialog,
} as Meta

const Template: Story<DialogProps> = (args) => <Dialog {...args} />

export const Default = Template.bind({})
