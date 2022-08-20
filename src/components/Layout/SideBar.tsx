import { NavLink, useNavigate } from 'react-router-dom'
import useDisplay from '../../hooks/useResize'

const SideBar = () => {
	const navigate = useNavigate()
	const screenSize = useDisplay()

	const displayMobile = screenSize === 'sm' || screenSize === 'md'

	const handleLogout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')

		navigate('/', { replace: true })
	}

	return (
		<>
			{!displayMobile && (
				<>
					<div className="flex h-screen w-72 flex-col items-center p-6">
						<div className="flex h-full flex-col items-center justify-between">
							<div className="mt-2 flex w-full items-center justify-center gap-4">
								<img src="/logo_gs.png" alt="gs logo" className="h-16 w-10" />
								<div className="flex items-center justify-center text-2xl">
									<span className="text-deep_orange">Go</span>
									<span>Scrum</span>
								</div>
							</div>
							<div className="mt-20 flex h-full flex-col items-center gap-12 text-deep_blue">
								<div className="w-full">
									<NavLink to="/">
										<div className="flex w-full items-center gap-6">
											<img
												src="icons/house-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Home</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/projects">
										<div className="flex items-center gap-6">
											<img
												src="icons/briefcase-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Projects</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/tasks">
										<div className="flex items-center gap-6">
											<img
												src="icons/tasks-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Tasks</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/schedule">
										<div className="flex items-center gap-6">
											<img
												src="icons/calendar-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Schedule</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/chat">
										<div className="flex items-center gap-6">
											<img
												src="icons/comment-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Messages</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/chat">
										<div className="flex items-center gap-6">
											<img
												src="icons/activities-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Activities</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/donate">
										<div className="flex items-center gap-6">
											<img
												src="icons/donate-icon.svg"
												alt=""
												className="h-6 w-6"
											/>
											<span>Donate</span>
										</div>
									</NavLink>
								</div>
							</div>
							<div className="mb-12 flex w-full items-center justify-center">
								<button
									className="flex items-center gap-6"
									onClick={handleLogout}
								>
									<img src="icons/logout-icon.svg" alt="" className="h-6 w-6" />
									<span>Log out</span>
								</button>
							</div>
						</div>
					</div>
					<div className="w-[1px] bg-gradient-to-t from-transparent via-deep_blue/50 to-transparent" />
				</>
			)}
		</>
	)
}

export default SideBar
