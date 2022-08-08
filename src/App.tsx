import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition } from './utils/pageTransition'

import RequireAuth from './components/auth/RequireAuth'
import Main from './pages/Home/components/Main'

import { index as Login } from './pages/Auth/Login/index'
import { index as Register } from './pages/Auth/Register/index'
import { index as Home } from './pages/Home/index'
import { index as Projects } from './pages/Projects/index'
import { index as Tasks } from './pages/Tasks/index'
import { index as Schedule } from './pages/Schedule/index'
import { CreateNewProject } from './pages/Projects/views/CreateNewProject'
import { index as CreateNewTask } from './pages/Tasks/views/CreateNewTaks'

const Error404 = lazy(() => import('./pages/Error404/index'))

const App = () => {
	const location = useLocation()
	const { pathname } = location

	const isDisconnected = () => {
		const token = localStorage.getItem('token')

		return !token
	}

	return (
		<AnimatePresence>
			{isDisconnected() ? (
				<Routes>
					<Route
						path="/"
						element={
							<motion.div
								className="h-full"
								initial="out"
								animate="in"
								exit="out"
								variants={pageTransition}
							>
								<Login />
							</motion.div>
						}
					/>
					<Route
						path="/register"
						element={
							<motion.div
								className="h-full"
								initial="out"
								animate="in"
								exit="out"
								variants={pageTransition}
							>
								<Register />
							</motion.div>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<motion.div
									className="page"
									initial="out"
									animate="in"
									exit="out"
									variants={pageTransition}
								>
									<Error404 />
								</motion.div>
							</Suspense>
						}
					/>
				</Routes>
			) : (
				<Home>
					<Routes location={location} key={pathname}>
						<Route element={<RequireAuth />}>
							<Route
								path="/"
								element={
									<motion.div
										className="page"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<Main />
									</motion.div>
								}
							/>
							<Route
								path="/tasks"
								element={
									<motion.div
										className="h-full"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<Tasks />
									</motion.div>
								}
							/>
							<Route
								path="/tasks/create"
								element={
									<motion.div
										className="h-full"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<CreateNewTask />
									</motion.div>
								}
							/>
							<Route
								path="/schedule"
								element={
									<motion.div
										className="h-full"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<Schedule />
									</motion.div>
								}
							/>
							<Route
								path="/projects"
								element={
									<motion.div
										className="page"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<Projects />
									</motion.div>
								}
							/>
							<Route
								path="/projects/create"
								element={
									<motion.div
										className="h-full"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<CreateNewProject />
									</motion.div>
								}
							/>
						</Route>

						<Route
							path="*"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<motion.div
										className="h-full"
										initial="out"
										animate="in"
										exit="exit"
										variants={pageTransition}
									>
										<Error404 />
									</motion.div>
								</Suspense>
							}
						/>
					</Routes>
				</Home>
			)}
		</AnimatePresence>
	)
}

export default App
