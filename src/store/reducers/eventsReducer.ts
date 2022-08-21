import { AnyAction } from 'redux'
import { EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAILURE } from '../types'

const initialState = {
	loading: false,
	events: [],
	error: null,
}

export const eventsReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case EVENT_REQUEST:
			return {
				...state,
				loading: true,
			}
		case EVENT_SUCCESS:
			return {
				...state,
				loading: false,
				events: [...state.events, action?.payload],
			}
		case EVENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
