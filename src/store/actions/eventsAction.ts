import { EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAILURE } from '../types'

export const eventRequest = () => {
	return {
		type: EVENT_REQUEST,
	}
}
export const eventSuccess = (data: object) => {
	return {
		type: EVENT_SUCCESS,
		payload: data,
	}
}

export const eventFailure = (error: Boolean) => {
	return {
		type: EVENT_FAILURE,
		payload: error,
	}
}

export const getEvents = () => (dispatch: any) => {
	const storage = localStorage.getItem('events')

	dispatch(eventRequest())

	if (storage) {
		const events = JSON.parse(storage)

		events.forEach((event: any) => {
			dispatch(eventSuccess(event))
		})
	} else {
		localStorage.setItem('events', JSON.stringify([]))
	}
}

export const addEvents = (event: any) => (dispatch: any) => {
	const storage = localStorage.getItem('events') as string

	const events = JSON.parse(storage)

	events.push(event)

	localStorage.setItem('events', JSON.stringify(events))

	dispatch(eventSuccess(event))
}
