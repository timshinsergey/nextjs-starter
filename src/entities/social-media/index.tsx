import { FC, memo } from 'react'
import cn from 'classnames'
import s from './index.module.css'
import data from './data.json'
import Icon from '@shared/ui/icon'

export interface SocialMediaProps {
	className?: string
	size?: 'small' | 'medium' | 'large' | 'custom'
}

const SocialMedia: FC<SocialMediaProps> = ({ className, size = 'small' }): JSX.Element => {
	return (
		<div className={cn(className, 'grid grid-flow-col gap-2')}>
			{data.map((item) => (
				<a
					href={item.link}
					title={item.text}
					key={item.icon}
					rel='nofollow noopener noreferrer'
					target='_blank'
				>
					<Icon
						name={item.icon}
						className={cn('h-7 w-7', {
							['lg:h-11 lg:w-11']: size === 'medium',
						})}
					/>
				</a>
			))}
		</div>
	)
}

export default memo(SocialMedia)
