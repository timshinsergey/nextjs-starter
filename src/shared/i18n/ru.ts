import type { SiteLocale } from '.'

export const table: SiteLocale = {
	head: {
		title: 'Главная страница',
		description: 'Описание главной страницы',
	},
	home: {
		hero: {
			title: 'Добро пожаловать в',
			link: 'О нас',
			description: 'Начните с редактирования',
		},
		links: {
			one: {
				title: 'Документация',
				description: 'Найдите подробную информацию о возможностях Next.js и API.',
			},
			two: {
				title: 'Узнать',
				description: 'Узнайте о Next.js в интерактивном курсе с контрольными заданиями!',
			},
			three: {
				title: 'Примеры',
				description: 'Узнайте и разверните примеры проектов Next.js.',
			},
			four: {
				title: 'Развернуть',
				description:
					'Мгновенно разверните свой сайт Next.js на общедоступный URL с помощью Vercel.',
			},
		},
	},
	about: {
		head: {
			title: 'О нас',
			description: 'Описание страницы о нас',
		},
		hero: {
			title: 'Хиро заголовок страницы "О нас"',
		},
	},
	footer: {
		powered: 'При поддержке',
	},
	page404: {
		title: '404 - Страница не найдена',
	},
	page500: {
		title: '500 - Произошла ошибка на стороне сервера',
	},
}
