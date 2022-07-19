import React, { useEffect, useState } from 'react'

let globalId = 0

const useId = (idName: string) => {
	const [id, setId] = useState('')

	useEffect(() => {
		globalId += 1

		setId(`${idName}_${globalId}`)
	}, [idName])

	return id
}

export default useId
