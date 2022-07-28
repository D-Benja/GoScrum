import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import RequireAuth from './setup/auth/RequireAuth'
import { pageTransition } from './setup/pageTransition'

import { index as Login } from './pages/Auth/Login/index'
import { index as Register } from './pages/Auth/Register/index'
import { index as Home } from './pages/Home/index'
import { index as Projects } from './pages/Projects/index'
import { index as Tasks } from './pages/Tasks/index'
import { index as Schedule } from './pages/Schedule/index'
import Main from './pages/Home/components/Main'
import { CreateNewProject } from './pages/Projects/views/CreateNewProject'

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
						path="/login"
						element={
							<motion.div
								className="page"
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
								className="page"
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
										exit="out"
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
										className="page"
										initial="out"
										animate="in"
										exit="out"
										variants={pageTransition}
									>
										<Tasks />
									</motion.div>
								}
							/>
							<Route
								path="/schedule"
								element={
									<motion.div
										className="page"
										initial="out"
										animate="in"
										exit="out"
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
										exit="out"
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
										className="page"
										initial="out"
										animate="in"
										exit="out"
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
				</Home>
			)}
		</AnimatePresence>
	)
}

export default App
