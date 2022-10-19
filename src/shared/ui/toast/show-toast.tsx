import toast from 'react-hot-toast'
import Alert, { AlertProps } from '../alert'

const showToast = ({ ...props }: AlertProps) =>
	toast.custom((t) => (
		<Alert
			aria-live='assertive'
			aria-atomic='true'
			className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
			{...props}
		/>
	))

export default showToast
