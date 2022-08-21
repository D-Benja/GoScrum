import { handleURL } from '../../utils/handleURL'
import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from '../types'

export const tasksRequest = () => {
	return {
		type: TASKS_REQUEST,
	}
}
export const tasksSuccess = (data: Array<{}>) => {
	return {
		type: TASKS_SUCCESS,
		payload: data,
	}
}

export const tasksFailure = (error: Boolean) => {
	return {
		type: TASKS_FAILURE,
		payload: error,
	}
}

export const getTasks = (path: string) => (dispatch: any) => {
	dispatch(tasksRequest())

	const url = handleURL(path)
	const authToken = localStorage.getItem('token')

	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then((res) => {
			if (res.status === 200) {
				return res.json()
			} else {
				return Promise.reject(res.status)
			}
		})
		.then((data) => {
			dispatch(tasksSuccess(data.result))
		})
		.catch((error) => {
			dispatch(tasksFailure(error))
		})
}

export const deleteTasks = (id?: string) => (dispatch: any) => {
	dispatch(tasksRequest())

	const url = handleURL(`/task/${id}`)
	const authToken = localStorage.getItem('token')

	fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then((res) => {
			if (res.status === 200) {
				return res.json()
			} else {
				return Promise.reject(res.status)
			}
		})
		.then(() => {
			dispatch(getTasks('/tasks'))
		})
		.catch((error) => {
			dispatch(tasksFailure(error))
		})
}

export const updateTasks = (data: any) => (dispatch: any) => {
	dispatch(tasksRequest())

	const url = handleURL(`/task/${data.id}`)
	const authToken = localStorage.getItem('token')

	fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
		body: JSON.stringify({
			task: {
				title: data.title,
				status: data.status,
				importance: data.importance,
				description: data.description,
			},
		}),
	})
		.then((res) => {
			if (res.status === 200) {
				return res.json()
			} else {
				return Promise.reject(res.status)
			}
		})
		.then(() => {
			dispatch(getTasks('/task'))
		})
		.catch((error) => {
			dispatch(tasksFailure(error))
		})
}
