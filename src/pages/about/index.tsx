import { FC, memo } from 'react'
import s from './index.module.css'

export interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}): JSX.Element => {
	return <div className={s.component}>About Page</div>
}

export default memo(AboutPage)
