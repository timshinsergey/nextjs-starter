export interface SiteLocale {
	head: {
		title: string
		description: string
	}
	home: {
		hero: {
			title: string
			link: string
			description: string
		}
		links: {
			one: {
				title: string
				description: string
			}
			two: {
				title: string
				description: string
			}
			three: {
				title: string
				description: string
			}
			four: {
				title: string
				description: string
			}
		}
	}
	about: {
		head: {
			title: string
			description: string
		}
		hero: {
			title: string
		}
	}
	footer: {
		powered: string
	}
}
