import { useNavigate } from 'react-router-dom'
import { plusIcon } from '../../assets'
import useFetch from '../../hooks/useFetch'
import TaskCardSkeleton from './components/Skeletons/TaskCardSkeleton'
import TaskCard from './components/TaskCard'
import { Task } from './models'

export const index = () => {
	const navigate = useNavigate()

	const handleNavigate = (path: string) => {
		navigate(`/tasks/${path}`)
	}

	const url = 'https://goscrum-api.alkemy.org/task'
	const authToken = localStorage.getItem('token')

	const { data, isLoading } = useFetch({
		url,
		authToken,
	})

	const RenderNewTasks = () => {
		const newTasks = data
			.filter((task: Task) => task.status === 'NEW')
			.map((task: Task) => <TaskCard key={task._id} {...task} />)

		return newTasks
	}

	const RenderInProgressTasks = () => {
		return data
			.filter((task: Task) => task.status === 'IN PROGRESS')
			.map((task: Task) => <TaskCard key={task._id} {...task} />)
	}

	const RenderFinishedTasks = () => {
		return data
			.filter((task: Task) => task.status === 'FINISHED')
			.map((task: Task) => <TaskCard key={task._id} {...task} />)
	}

	return (
		<div className="flex flex-col gap-10 px-12 pt-8">
			<div className="">
				<h1 className="text-2xl font-semibold text-deep_blue">
					Name of the assigned project
				</h1>
			</div>
			<div className="grid min-h-full grid-cols-4 gap-x-10">
				<div className="col-span-1 flex flex-col gap-6">
					<div className="flex items-center justify-between pr-5">
						<h2 className="text-lg font-semibold">To-Do</h2>
						<button
							className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5"
							onClick={() => handleNavigate('create')}
						>
							<img src={plusIcon} alt="" className="h-4 w-4" />
						</button>
					</div>
					<div className="flex h-[670px] flex-col gap-6 overflow-y-scroll pr-2">
						{isLoading ? <TaskCardSkeleton /> : <RenderNewTasks />}
					</div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="flex items-center justify-between pr-5">
						<h2 className="text-lg font-semibold">Work In Progress</h2>
						<div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5">
							<img src={plusIcon} alt="" className="h-4 w-4" />
						</div>
					</div>
					<div className="flex h-[670px] flex-col gap-6 overflow-y-scroll pr-2">
						{isLoading ? <TaskCardSkeleton /> : <RenderInProgressTasks />}
					</div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="flex items-center justify-between pr-5">
						<h2 className="text-lg font-semibold">Under review</h2>
						<div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5">
							<img src={plusIcon} alt="" className="h-4 w-4" />
						</div>
					</div>
					<div className="flex h-[670px] flex-col gap-6 overflow-y-scroll pr-2">
						{isLoading ? <TaskCardSkeleton /> : <RenderInProgressTasks />}
					</div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="flex items-center justify-between pr-5">
						<h2 className="text-lg font-semibold">Completed</h2>
						<div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5">
							<img src={plusIcon} alt="" className="h-4 w-4" />
						</div>
					</div>
					<div className="flex h-[670px] flex-col gap-6 overflow-y-scroll pr-2">
						{isLoading ? <TaskCardSkeleton /> : <RenderFinishedTasks />}
					</div>
				</div>
			</div>
		</div>
	)
}
