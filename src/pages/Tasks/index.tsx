import { useEffect, useState } from 'react'
import TaskCardSkeleton from './components/Skeletons/TaskCardSkeleton'
import TaskColumn from './components/TaskColumn'
import { debounce } from 'lodash'
import { Task } from './models'
import { renderTasks } from './components/renderTasks'
import { getTasks } from '../../store/actions/tasksActions'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'

export const index = () => {
	const [data, setData] = useState<Task[]>([])
	const [selected, setSelected] = useState('team_task')
	const [searchTerm, setSearchTerm] = useState('')

	const dispatch = useAppDispatch()
	const { loading, tasks } = useAppSelector((state) => state.tasksReducer)

	// reafact this useEffects
	useEffect(() => {
		const path = selected === 'user_task' ? '/task/me' : '/task'

		dispatch(getTasks(path))
	}, [selected])

	useEffect(() => {
		if (tasks?.length) {
			setData(tasks)
		}
	}, [tasks])

	useEffect(() => {
		if (searchTerm) {
			setData(tasks.filter((task: Task) => task.title.startsWith(searchTerm)))
		} else {
			setData(tasks)
		}
	}, [searchTerm])

	const handleRadioFilterTasks = (e: any) => {
		setSelected(e.target.value)
	}

	const handleSelectFilterTasks = (e: any) => {
		if (e.target.value !== '') {
			setData(tasks.filter((task: Task) => task.importance === e.target.value))
		} else {
			setData(tasks)
		}
	}

	const handleSearch = debounce((e) => {
		setSearchTerm(e.target.value)
	}, 700)

	return (
		<div className="flex flex-col gap-8 px-4 pt-6 lg:gap-14 lg:px-12 lg:pt-8">
			<div className="flex items-center justify-between pr-8">
				<h1 className="text-2xl font-semibold text-deep_blue">
					Name of the assigned project
				</h1>
				<div className="flex items-center gap-14">
					<div className="flex items-center gap-4">
						<h2 className="text-lg font-medium">Filter tasks:</h2>
						<div className="flex items-center gap-2">
							<label>My tasks</label>
							<input
								name="filter"
								type="radio"
								value="user_task"
								onChange={handleRadioFilterTasks}
								checked={selected === 'user_task'}
								className="checked:bg-red-500"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label>Team tasks</label>
							<input
								name="filter"
								type="radio"
								value="team_task"
								onChange={handleRadioFilterTasks}
								checked={selected === 'team_task'}
							/>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<h2 className="text-lg font-medium">Priority</h2>
						<div>
							<select
								name="priority"
								className="rounded-md border border-gray-400 px-2 py-1"
								onChange={handleSelectFilterTasks}
								defaultValue=""
							>
								<option value="">All</option>
								<option value="LOW">Low</option>
								<option value="MEDIUM">Medium</option>
								<option value="HIGH">High</option>
							</select>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<input
							className="w-72 rounded-2xl border px-4 py-2"
							placeholder="Search tasks..."
							type="text"
							onChange={handleSearch}
						/>
						<img src="/icons/search-icon.svg" alt="" className="h-6 w-6" />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-8 lg:grid lg:min-h-full lg:grid-cols-4 lg:gap-x-10">
				<TaskColumn name="To-Do">
					{loading ? <TaskCardSkeleton /> : renderTasks(data, 'NEW')}
				</TaskColumn>
				<TaskColumn name="In Progress">
					{loading ? <TaskCardSkeleton /> : renderTasks(data, 'IN PROGRESS')}
				</TaskColumn>
				<TaskColumn name="Under Review">
					{loading ? <TaskCardSkeleton /> : renderTasks(data, 'IN PROGRESS')}
				</TaskColumn>
				<TaskColumn name="Finished">
					{loading ? <TaskCardSkeleton /> : renderTasks(data, 'FINISHED')}
				</TaskColumn>
			</div>
		</div>
	)
}
