import { Link } from 'react-router-dom'
import LockedFeature from '../../../components/Layout/LockedFeature'
import useResize from '../../../hooks/useResize'
import { useCircleProgressBar } from '../hooks/useCircleProgressBar'
import CircleProgressBar from './ShowProgress/CircleProgressBar'
import { TeamWorkCard } from './TeamsWorkCards/TeamWorkCard'

const Main = () => {
	const screenSize = useResize()

	const displayMobile = screenSize === 'sm' || screenSize === 'md'

	const progressBarValues = useCircleProgressBar(screenSize)

	return (
		<div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:grid-rows-2 lg:gap-y-10 lg:px-12 lg:pt-8">
			<div className="mt-4 px-4 lg:col-span-7 lg:m-0 lg:flex lg:flex-col lg:gap-4">
				<h1 className="mb-4 text-2xl font-bold">Teams Work</h1>
				<TeamWorkCard />
			</div>
			<div className="px-4 lg:col-span-5 lg:col-start-8 lg:flex lg:flex-col lg:gap-4">
				<h1 className="mb-4 text-2xl font-bold">Overall Progress</h1>
				<div className="flex h-full rounded-2xl border bg-white py-4 shadow-md lg:p-8">
					<div className="mt-2 ml-8 flex flex-1 flex-col justify-between">
						<div className="flex flex-col gap-8">
							<div className="flex items-center justify-start gap-10">
								<i className="fi fi-rr-chart-histogram text-2xl"></i>
								<span>14 Task In Progress</span>
							</div>
							<div className="flex items-center justify-start gap-10">
								<i className="fi fi-rr-time-past text-2xl"></i>
								<span>11 Task Upcoming</span>
							</div>
							<div className="flex items-center justify-start gap-10">
								<i className="fi fi-rr-briefcase text-2xl"></i>
								<span>3 Ongoing Projects</span>
							</div>
						</div>
						{!displayMobile && (
							<Link
								to="/analytics"
								className="text-sm tracking-wide text-deep_orange"
							>
								View analytics
							</Link>
						)}
					</div>
					{!displayMobile && (
						<div className="flex h-full w-full flex-1 items-center justify-center">
							<CircleProgressBar display={progressBarValues} />
						</div>
					)}
				</div>
			</div>
			<div className="px-4 lg:col-span-7 lg:flex lg:flex-col lg:gap-4 lg:pr-10">
				<h1 className="mb-4 text-2xl font-bold">OnGoing Tasks</h1>
				<div className="grid h-full grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-3">
					<div className="flex w-full flex-col rounded-2xl border bg-white py-3 px-2 shadow-md lg:p-4">
						<div className="flex flex-col lg:mb-1 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
							<h3 className="text-sm lg:font-medium">Some Task Title</h3>
							<p className="mb-2 text-xs lg:text-sm">2022-09-12</p>
						</div>
						<span className="mb-2 text-xs lg:mb-4">
							Created by <b>Jhon Doe</b>
						</span>
						{!displayMobile && (
							<p className="relative h-8 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-[''] lg:w-5/6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								at velit quam. Morbi id tincidunt libero, a tristique velit.
								Cras non ante aliquam, cursus erat et, molestie sapien.{' '}
							</p>
						)}
					</div>
					<div className="relative flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
				</div>
			</div>
			<div className="px-4 lg:col-span-5 lg:col-start-8 lg:flex lg:gap-x-10">
				<div className="flex flex-1 flex-col gap-4 overflow-y-scroll">
					<h1 className="mb-4 text-2xl font-bold">Upcoming Tasks</h1>
					<div className="grid h-full grid-rows-2 gap-4">
						<div className="flex w-full flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div>
								<div className="flex w-full justify-between text-sm">
									<h3 className="font-medium">Some Task Title</h3>
									<p>2022-16-10</p>
								</div>
								<span className="mb-2 text-xs">
									Created by <b>Jhon Doe</b>
								</span>
							</div>

							<div className="flex max-w-fit gap-4 text-sm">
								<span>Priority: </span>
								<span className="rounded-xl bg-red-400 px-2 py-[1px] tracking-wide text-white">
									High
								</span>
							</div>
						</div>
						<div className="relative flex w-full rounded-2xl border bg-white p-4 shadow-md">
							<LockedFeature rounded="2xl" />
						</div>
					</div>
				</div>
				<div className="lg:flex lg:flex-1 lg:flex-col lg:gap-4">
					<h1 className="mb-4 text-2xl font-bold">Recent Activity</h1>
					<div className="flex h-64 flex-col gap-4 overflow-y-scroll lg:h-72">
						<div className="flex w-full shrink-0 flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div className="flex w-full justify-between text-sm">
								<h3 className="font-medium">Jhon Doe</h3>
								<p className="text-sm">5min ago</p>
							</div>
							<p className="text-sm">Completed some important task</p>
						</div>
						<div className="flex w-full shrink-0 flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div className="flex w-full justify-between text-sm">
								<h3 className="font-medium">Jhon Doe</h3>
								<p className="text-sm">5min ago</p>
							</div>
							<p className="text-sm">Completed some important task</p>
						</div>
						<div className="flex w-full shrink-0 flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div className="flex w-full justify-between text-sm">
								<h3 className="font-medium">Jhon Doe</h3>
								<p className="text-sm">5min ago</p>
							</div>
							<p className="text-sm">Completed some important task</p>
						</div>
						<div className="flex w-full shrink-0 flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div className="flex w-full justify-between text-sm">
								<h3 className="font-medium">Jhon Doe</h3>
								<p className="text-sm">5min ago</p>
							</div>
							<p className="text-sm">Completed some important task</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
