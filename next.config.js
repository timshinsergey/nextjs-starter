const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default

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
	webpack(config, { isServer }) {
		// analyze client and server the bundle in ANALYZE mode.
		if (process.env.ANALYZE === 'true') {
			config.plugins.push(
				new StatoscopeWebpackPlugin({
					saveReportTo: `.next/analyze/report-${isServer ? 'server' : 'client'}.html`,
					saveStatsTo: `.next/analyze/stats-${isServer ? 'server' : 'client'}.json`,
				})
			)
		}

		return config
	},
}

module.exports = nextConfig
