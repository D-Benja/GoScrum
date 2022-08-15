import { Task } from '../models'
import TaskCard from './TaskCard'

export const renderTasks = (tasks: Task[], taskStatus: string) => {
	return tasks
		.filter((task: Task) => task.status === taskStatus)
		.map((task: Task) => <TaskCard key={task._id} {...task} />)
}
