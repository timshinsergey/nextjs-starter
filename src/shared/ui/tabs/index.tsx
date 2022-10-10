import type { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import cn from 'classnames'
import s from './index.module.css'

export interface TabsRootProps extends Tabs.TabsProps {
	triggerChildren: ReactNode | ReactNode[]
	contentChildren: ReactNode | ReactNode[]
}

export interface TabsItemProps extends Tabs.TabsTriggerProps {}

export interface TabsContentProps extends Tabs.TabsContentProps {}

const TabsItem = ({ ...props }: TabsItemProps): JSX.Element => {
	return <Tabs.Trigger {...props} />
}

const TabsContent = ({ ...props }: TabsContentProps): JSX.Element => {
	return <Tabs.Content {...props} />
}

const TabsRoot = ({
	triggerChildren,
	contentChildren,
	...props
}: TabsRootProps): JSX.Element => {
	return (
		<Tabs.Root {...props}>
			<Tabs.List>{triggerChildren}</Tabs.List>
			{contentChildren}
		</Tabs.Root>
	)
}

export { TabsItem, TabsContent, TabsRoot }
