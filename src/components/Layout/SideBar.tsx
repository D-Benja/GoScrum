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
											<i className="fi fi-rr-home text-2xl" />
											<span>Home</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/projects">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-briefcase text-2xl"></i>
											<span>Projects</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/tasks">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-apps text-2xl"></i>
											<span>Tasks</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/schedule">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-calendar text-2xl"></i>
											<span>Schedule</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/chat">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-envelope text-2xl"></i>
											<span>Messages</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/chat">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-exchange text-2xl"></i>
											<span>Activities</span>
										</div>
									</NavLink>
								</div>
								<div className="w-full">
									<NavLink to="/donate">
										<div className="flex items-center gap-6">
											<i className="fi fi-rr-donate text-2xl"></i>
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
									<i className="fi fi-rr-sign-out-alt text-2xl"></i>
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
