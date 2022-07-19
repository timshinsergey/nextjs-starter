import { FC, ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import cn from 'classnames'
import s from './index.module.css'

export interface TabsRootProps extends Tabs.TabsProps {
	triggerChildren: ReactNode | ReactNode[]
	contentChildren: ReactNode | ReactNode[]
}

export interface TabsItemProps extends Tabs.TabsTriggerProps {}

export interface TabsContentProps extends Tabs.TabsContentProps {}

const TabsItem: FC<TabsItemProps> = ({ ...props }): JSX.Element => {
	return <Tabs.Trigger {...props} />
}

const TabsContent: FC<TabsContentProps> = ({ ...props }): JSX.Element => {
	return <Tabs.Content {...props} />
}

const TabsRoot: FC<TabsRootProps> = ({
	triggerChildren,
	contentChildren,
	...props
}): JSX.Element => {
	return (
		<Tabs.Root {...props}>
			<Tabs.List>{triggerChildren}</Tabs.List>
			{contentChildren}
		</Tabs.Root>
	)
}

export { TabsItem, TabsContent, TabsRoot }
