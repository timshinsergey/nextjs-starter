// transform [1, 2, 3, 4, 5, 6, 7]
// to [[1, 2, 3], [4, 5, 6], [7]]

const sliceIntoChunks = (arr: any[], chunkSize: number) => {
	const res: any[] = []
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize)
		res.push(chunk)
	}
	return res
}

export default sliceIntoChunks
