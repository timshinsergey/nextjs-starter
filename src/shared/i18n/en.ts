import type { SiteLocale } from '.'

export const table: SiteLocale = {
	head: {
		title: 'Home page',
		description: 'Home page description',
	},
	home: {
		hero: {
			title: 'Welcome to',
			link: 'About',
			description: 'Get started by editing',
		},
		links: {
			one: {
				title: 'Documentation',
				description: 'Find in-depth information about Next.js features and API.',
			},
			two: {
				title: 'Learn',
				description: 'Learn about Next.js in an interactive course with quizzes!',
			},
			three: {
				title: 'Examples',
				description: 'Discover and deploy boilerplate example Next.js projects.',
			},
			four: {
				title: 'Deploy',
				description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
			},
		},
	},
	about: {
		head: {
			title: 'About page',
			description: 'Description about page',
		},
		hero: {
			title: 'hero title about page',
		},
	},
	footer: {
		powered: 'Powered by',
	},
	page404: {
		title: '404 - Page Not Found',
	},
	page500: {
		title: '500 - Server-side error occurred',
	},
}
