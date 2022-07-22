/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				screens: {
					'2xl': '1440px',
					'3xl': '1920px',
				},
				center: true,
				// with bugs
				// not all breakpoints work
				// padding: {
				// 	DEFAULT: '1rem',
				// 	sm: '3rem',
				// 	sm: '3rem',
				// 	lg: '3rem',
				// 	xl: '4rem',
				// 	'2xl': '4rem',
				// },
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
