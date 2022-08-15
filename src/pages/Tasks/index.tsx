import { useEffect, useState } from 'react'
import { searchIcon } from '../../assets'
import useFetch from '../../hooks/useFetch'
import TaskCardSkeleton from './components/Skeletons/TaskCardSkeleton'
import TaskColumn from './components/TaskColumn'
import { debounce } from 'lodash'
import { Task } from './models'
import { renderTasks } from './components/renderTasks'

export const index = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [selected, setSelected] = useState('team_task')
	const [searchTerm, setSearchTerm] = useState('')

	const url = `https://goscrum-api.alkemy.org/task${
		selected === 'user_task' ? '/me' : ''
	}`
	const authToken = localStorage.getItem('token')

	const { data, isLoading } = useFetch({
		url,
		authToken,
	})

	// reafact this
	useEffect(() => {
		if (data) {
			setTasks(data)
		}
	}, [data])

	// reafact this
	useEffect(() => {
		if (searchTerm) {
			setTasks(data.filter((task: Task) => task.title.startsWith(searchTerm)))
		} else {
			setTasks(data)
		}
	}, [searchTerm])

	const handleRadioFilterTasks = (e: any) => {
		setSelected(e.target.value)
	}

	const handleSelectFilterTasks = (e: any) => {
		if (e.target.value !== '') {
			setTasks(data.filter((task: Task) => task.importance === e.target.value))
		} else {
			setTasks(data)
		}
	}

	const handleSearch = debounce((e) => {
		setSearchTerm(e.target.value)
	}, 700)

	return (
		<div className="flex flex-col gap-8 px-4 pt-6 lg:gap-16 lg:px-12 lg:pt-8">
			<div className="flex items-center justify-between pr-8">
				<h1 className="text-2xl font-semibold text-deep_blue">
					Name of the assigned project
				</h1>
				<div className="flex items-center gap-6">
					<h2 className="text-lg font-medium">Filter tasks:</h2>
					<div className="flex items-center gap-4">
						<label>My tasks</label>
						<input
							name="filter"
							type="radio"
							value="user_task"
							onChange={handleRadioFilterTasks}
							checked={selected === 'user_task'}
						/>
					</div>
					<div className="flex items-center gap-4">
						<label>Team tasks</label>
						<input
							name="filter"
							type="radio"
							value="team_task"
							onChange={handleRadioFilterTasks}
							checked={selected === 'team_task'}
						/>
					</div>
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
					<div className="flex items-center justify-center gap-4">
						<input
							className="w-72 rounded-2xl border px-4 py-2"
							placeholder="Search tasks..."
							type="text"
							onChange={handleSearch}
						/>
						<img src={searchIcon} alt="" className="h-6 w-6" />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-8 lg:grid lg:min-h-full lg:grid-cols-4 lg:gap-x-10">
				<TaskColumn>
					{isLoading ? <TaskCardSkeleton /> : renderTasks(tasks, 'NEW')}
				</TaskColumn>
				<TaskColumn>
					{isLoading ? <TaskCardSkeleton /> : renderTasks(tasks, 'IN PROGRESS')}
				</TaskColumn>
				<TaskColumn>
					{isLoading ? <TaskCardSkeleton /> : renderTasks(tasks, 'IN PROGRESS')}
				</TaskColumn>
				<TaskColumn>
					{isLoading ? <TaskCardSkeleton /> : renderTasks(tasks, 'FINISHED')}
				</TaskColumn>
			</div>
		</div>
	)
}
