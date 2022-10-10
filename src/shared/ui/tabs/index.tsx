import type { ReactNode } from 'react'
import { memo } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import cn from 'classnames'
import s from './index.module.css'

interface TabsRootProps extends Tabs.TabsProps {
	triggerChildren: ReactNode | ReactNode[]
	contentChildren: ReactNode | ReactNode[]
}

interface TabsItemProps extends Tabs.TabsTriggerProps {}

interface TabsContentProps extends Tabs.TabsContentProps {}

const TabsItem = memo(({ ...props }: TabsItemProps): JSX.Element => {
	return <Tabs.Trigger {...props} />
})

const TabsContent = memo(({ ...props }: TabsContentProps): JSX.Element => {
	return <Tabs.Content {...props} />
})

const TabsRoot = memo(
	({ triggerChildren, contentChildren, ...props }: TabsRootProps): JSX.Element => {
		return (
			<Tabs.Root {...props}>
				<Tabs.List>{triggerChildren}</Tabs.List>
				{contentChildren}
			</Tabs.Root>
		)
	}
)

TabsItem.displayName = 'TabsItem'
TabsContent.displayName = 'TabsContent'
TabsRoot.displayName = 'TabsRoot'

export { TabsItem, TabsContent, TabsRoot }
export type { TabsRootProps, TabsItemProps, TabsContentProps }
