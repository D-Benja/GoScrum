import { Link } from 'react-router-dom'
import { chartIcon, projectIcon, timeIcon } from '../../../assets'
import { useResize } from '../../../hooks/useResize'
import { useCircleProgressBar } from '../hooks/useCircleProgressBar'
import CircleProgressBar from './ShowProgress/CircleProgressBar'

const Main = () => {
	const display = useResize()
	const progressBarValues = useCircleProgressBar(display)

	return (
		<div className="grid grid-cols-12 grid-rows-2 gap-y-10 px-12 pt-8">
			<div className="col-span-6 flex flex-col gap-4">
				<h1 className="mb-4 text-2xl font-bold">Teams Work</h1>
				<div className="flex w-full gap-10">
					<div className="w-64 rounded-2xl border bg-white px-6 py-8 shadow-md">
						<div className="flex items-center justify-center gap-4">
							<div className="h-10 w-10 rounded-full border bg-blue-400" />
							<h2>UX/UI Desing Team</h2>
						</div>
						<div className="mt-6 h-20">
							<p className="mb-2">Team Members</p>
							<div className="relative flex">
								<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-blue-100" />
								<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-blue-200" />
								<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-blue-300" />
								<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-blue-400" />
								<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-blue-500" />
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center justify-between text-sm">
								<h3 className="mb-2 ">Progress</h3>
								<p className="">75%</p>
							</div>
							<div className="relative h-1 w-full rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-blue-400" />
							</div>
						</div>
					</div>
					<div className="w-64 rounded-2xl border bg-white px-6 py-8 shadow-md">
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 rounded-full border bg-green-400" />
							<h2>Front-end Team</h2>
						</div>
						<div className="mt-6 h-20">
							<p className="mb-2">Team Members</p>
							<div className="relative flex">
								<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-green-100" />
								<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-green-200" />
								<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-green-300" />
								<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-green-400" />
								<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-green-500" />
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center justify-between text-sm">
								<h3 className="mb-2 ">Progress</h3>
								<p className="">75%</p>
							</div>
							<div className="relative h-1 w-full rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-green-400" />
							</div>
						</div>
					</div>
					<div className="w-64 rounded-2xl border bg-white px-6 py-8 shadow-md">
						<div className="flex items-center gap-4">
							<div className="h-10 w-10 rounded-full border bg-yellow-400" />
							<h2>Back-end Team</h2>
						</div>
						<div className="mt-6 h-20">
							<p className="mb-2">Team Members</p>
							<div className="relative flex">
								<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-yellow-100" />
								<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-yellow-200" />
								<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-yellow-300" />
								<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-yellow-400" />
								<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-yellow-500" />
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center justify-between text-sm">
								<h3 className="mb-2 ">Progress</h3>
								<p className="">75%</p>
							</div>
							<div className="relative h-1 w-full rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-yellow-400" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-5 col-start-8 flex flex-col gap-4">
				<h1 className="mb-4 text-2xl font-bold">Overall Progress</h1>
				<div className="flex h-full rounded-2xl border bg-white p-8 shadow-md">
					<div className="mt-2 ml-8 flex flex-1 flex-col justify-between">
						<div className="flex flex-col gap-8">
							<div className="flex items-center justify-start gap-10">
								<img src={chartIcon} alt="" className="h-6 w-6" />
								<span>14 Task In Progress</span>
							</div>
							<div className="flex items-center justify-start gap-10">
								<img src={timeIcon} alt="" className="h-6 w-6" />
								<span>11 Task Upcoming</span>
							</div>
							<div className="flex items-center justify-start gap-10">
								<img src={projectIcon} alt="" className="h-6 w-6" />
								<span>3 Ongoing Projects</span>
							</div>
						</div>
						<Link
							to="/analytics"
							className="text-sm tracking-wide text-deep_orange"
						>
							View analytics
						</Link>
					</div>
					<div className="flex h-full w-full flex-1 items-center justify-center">
						<CircleProgressBar display={progressBarValues} />
					</div>
				</div>
			</div>
			<div className="col-span-6 flex flex-col gap-4">
				<h1 className="mb-4 text-2xl font-bold">OnGoing Tasks</h1>
				<div className="grid h-full grid-cols-2 grid-rows-2 gap-5">
					<div className="flex w-full flex-col rounded-2xl border bg-white p-4 shadow-md">
						<div className=" flex w-full items-center justify-between">
							<h3 className=" font-medium">Some Task Title</h3>
							<p className="text-sm">2022-09-12</p>
						</div>
						<span className="mb-2 text-xs">
							Created by <b>Jhon Doe</b>
						</span>
						<p className="relative h-8 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							at velit quam. Morbi id tincidunt libero, a tristique velit. Cras
							non ante aliquam, cursus erat et, molestie sapien.{' '}
						</p>
					</div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
				</div>
			</div>
			<div className="col-span-5 col-start-8 flex gap-x-10">
				<div className="flex flex-1 flex-col gap-4">
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
						<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					</div>
				</div>
				<div className="flex flex-1 flex-col gap-4">
					<h1 className="mb-4 text-2xl font-bold">Recent Activity</h1>
					<div className="grid h-full grid-rows-3 gap-4">
						<div className="flex w-full flex-col justify-between rounded-2xl border bg-white p-4 shadow-md">
							<div className="flex w-full justify-between text-sm">
								<h3 className="font-medium">Jhon Doe</h3>
								<p className="text-sm">5min ago</p>
							</div>
							<p className="text-sm">Completed some important task</p>
						</div>
						<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
						<div className="flex w-full rounded-2xl border bg-white p-4 shadow-md"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
