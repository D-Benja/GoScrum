import { combineReducers } from 'redux'

import { tasksReducer } from './tasksReducer'
import { eventsReducer } from './eventsReducer'

const rootReducer = combineReducers({
	tasksReducer,
	eventsReducer,
})

export default rootReducer
