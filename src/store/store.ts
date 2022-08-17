import { configureStore, Middleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware: Middleware[] = [thunk]

export const store = configureStore({
	reducer: rootReducer,
	middleware,
	// do not forget this
	devTools: import.meta.env.VITE_API_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
