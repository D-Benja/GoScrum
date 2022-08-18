export const handlePriorityColors = (importance: string) => {
	const priority = importance.toLowerCase()

	if (priority === 'low') {
		return 'bg-[#53da87]'
	} else if (priority === 'medium') {
		return 'bg-[#ff9800]'
	} else if (priority === 'high') {
		return 'bg-[#f44336]'
	}
}

export const parseDate = (date: string) => {
	const parsedDate = new Date(date).toLocaleString()

	return parsedDate
}
