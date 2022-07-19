// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Typography, { TypographyProps } from '@shared/ui/typography'

export default {
	title: 'Shared/Ui/Typography',
	component: Typography,
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Default = Template.bind({})
