// declOfNum(2, ['дровосек', 'дровосека', 'дровосеков']})
// result: 'дровосека'

// declOfNum(6, ['дровосек', 'дровосека', 'дровосеков']})
// result: 'дровосеков'

const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[
		number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
	]
}

export default declOfNum
