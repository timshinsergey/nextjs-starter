import { useEffect, useState } from 'react'

const useCurrencyFormat = (price): string => {
	const isBrowser = typeof window !== 'undefined'

	const [currency, setCurrency] = useState<string>('0')

	const formatCurrency = (number): void => {
		const value = isBrowser
			? new Intl.NumberFormat('ru-RU', {
					style: 'currency',
					currency: 'RUB',
					maximumFractionDigits: 0,
			  }).format(price)
			: price
		setCurrency(value)
	}

	useEffect(() => {
		formatCurrency(price)
	}, [])

	return currency
}

export default useCurrencyFormat
