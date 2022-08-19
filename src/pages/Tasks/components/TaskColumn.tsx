import { useNavigate } from 'react-router-dom'

const TaskColumn = ({ children, name }: any) => {
	const navigate = useNavigate()

	const handleNavigate = (path: string) => {
		navigate(`/tasks/${path}`)
	}

	return (
		<div className="flex w-full flex-col gap-4 lg:col-span-1 lg:flex lg:flex-col lg:gap-6">
			<div className="flex items-center justify-between pr-5">
				<h2 className="text-lg font-semibold">{name}</h2>
				<button
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-deep_orange/70 bg-deep_orange/5"
					onClick={() => handleNavigate('create')}
				>
					<i className="fi fi-rr-plus flex items-center text-xl"></i>
				</button>
			</div>
			<div className="flex gap-6 overflow-x-scroll lg:flex lg:h-[650px] lg:flex-col lg:gap-6 lg:overflow-y-scroll lg:pr-2">
				{children}
			</div>
		</div>
	)
}

export default TaskColumn
