module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Type the name of the component...',
	},
	{
		type: 'input',
		name: 'path',
		message: 'Type path to the component (like "/users/admins/index")...',
		initial: '/',
		validate: (value) => {
			if (!String(value).startsWith('/')) {
				return 'The path must start with a slash.'
			}
			if (String(value).endsWith('/')) {
				return "The path mustn't end with a slash."
			}

			return true
		},
	},
]
