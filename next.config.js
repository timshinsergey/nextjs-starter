/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
	},
}

module.exports = nextConfig
