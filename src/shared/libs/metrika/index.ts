import ym from 'react-yandex-metrika'

const YMReachGoal = (key: string, data: { [key: string]: string }) => {
	ym('reachGoal', key, data)
}

export { YMReachGoal }
