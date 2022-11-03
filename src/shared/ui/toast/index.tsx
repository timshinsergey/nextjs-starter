import { memo } from 'react'
import type { FC } from 'react'
import { Toaster, ToasterProps } from 'react-hot-toast'

export interface ToastProps extends ToasterProps {}

const Toast: FC<ToastProps> = ({ ...props }): JSX.Element => {
	return (
		<Toaster
			position='bottom-left'
			reverseOrder={false}
			gutter={8}
			toastOptions={{ duration: 6000 }}
			{...props}
		/>
	)
}

// If you leave memo, the i18n texts
// will not be displayed when switching languages
export default memo(Toast)
