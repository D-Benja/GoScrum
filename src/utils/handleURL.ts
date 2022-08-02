export const handleURL = (url: string) => {
	const baseUrl = import.meta.env.VITE_API_BASE_URL
	const apiUrl = baseUrl + url

	return apiUrl
}
