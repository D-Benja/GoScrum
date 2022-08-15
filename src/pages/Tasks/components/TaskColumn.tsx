import { useNavigate } from 'react-router-dom'
import { plusIcon } from '../../../assets'

const TaskColumn = ({ children }: any) => {
	const navigate = useNavigate()

	const handleNavigate = (path: string) => {
		navigate(`/tasks/${path}`)
	}

	return (
		<div className="flex w-80 flex-col gap-4 lg:col-span-1 lg:flex lg:w-full lg:flex-col lg:gap-6">
			<div className="flex items-center justify-between pr-5">
				<h2 className="text-lg font-semibold">To-Do</h2>
				<button
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5"
					onClick={() => handleNavigate('create')}
				>
					<img src={plusIcon} alt="" className="h-4 w-4" />
				</button>
			</div>
			<div className="flex gap-6 overflow-x-scroll lg:flex lg:h-[670px] lg:flex-col lg:gap-6 lg:overflow-y-scroll lg:pr-2">
				{children}
			</div>
		</div>
	)
}

export default TaskColumn
