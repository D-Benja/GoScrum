import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

interface fetchData {
	data: any
	isLoading: boolean
	error: boolean
}

interface fetchProps {
	url: string
	authToken?: string | null
}

const useFetch = ({ url, authToken }: fetchProps): fetchData => {
	const [fetchedData, setFetchedData] = useState({
		data: [],
		isLoading: true,
		error: false,
	})

	// controller for abort request

	// const controller = new AbortController()

	const fetchData = useCallback(async () => {
		try {
			// Request with AbortController, may be used to cancel the request

			// const response = await axios.get(url, {
			// 	signal: controller.signal,
			// })

			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			})

			const data = await response.data

			if (response) {
				setFetchedData({
					data: data.result ? data.result : data,
					isLoading: false,
					error: false,
				})
			}
		} catch (error) {
			if (axios.isCancel(error)) {
				console.log('cancelled', error)
			} else {
				console.log('error ocurred', error)
			}

			setFetchedData({
				data: [],
				isLoading: false,
				error: true,
			})
		}
	}, [url])

	useEffect(() => {
		fetchData()

		// Cleanup function, may be used to cancel the request

		// return () => {
		// 	controller.abort()
		// }
	}, [url, fetchData])

	const { data, isLoading, error } = fetchedData

	return { data, isLoading, error }
}

export default useFetch
