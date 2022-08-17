// import { AnyAction } from 'redux'
import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from '../types'

const initialState = {
	loading: false,
	tasks: [],
	error: null,
}

export const tasksReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TASKS_REQUEST:
			return {
				...state,
				loading: true,
			}
		case TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasks: action.payload,
			}
		case TASKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
