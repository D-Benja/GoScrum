import { useNavigate } from 'react-router-dom'
import { comment, linkIcon } from '../../../assets/index'
import useResize from '../../../hooks/useResize'
import { capitalizeString } from '../../../utils/capitalizeString'
import { Task } from '../models'
import { handlePriorityColors } from '../utils'

const TaskCard = ({ ...props }: Task) => {
	const { title, description, createdAt, importance, _id } = props
	const screenSize = useResize()
	const navigate = useNavigate()

	const displayMobile = screenSize === 'sm' || screenSize === 'md'

	const importanceCapitalized = capitalizeString(importance)
	const createdAtParsed = new Date(createdAt).toLocaleString()

	const handleRedirect = () => {
		navigate(`/tasks/${_id}`)
	}

	return (
		<div
			className="w-60 shrink-0 cursor-pointer rounded-2xl border px-4 py-3 lg:h-48 lg:w-full"
			onClick={handleRedirect}
		>
			<div className="flex items-center justify-between">
				<span
					className={
						'rounded-2xl px-4 py-1 text-sm text-white ' +
						handlePriorityColors(importanceCapitalized)
					}
				>
					{importanceCapitalized}
				</span>
				{!displayMobile && <span className="text-sm">{createdAtParsed}</span>}
			</div>
			<div className="mt-3 flex flex-col gap-2">
				<h3>{title}</h3>
				<p className="relative h-8 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
					{description}
				</p>
			</div>
			<div className="my-4 flex justify-between">
				<div className="relative flex">
					<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-blue-100" />
					<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-blue-200" />
					<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-blue-300" />
				</div>
				<div className="flex items-center gap-4 pt-2">
					<img src={comment} alt="comment task icon" className="h-6 w-6" />
					<img src={linkIcon} alt="link chain icon" className="h-6 w-6" />
				</div>
			</div>
		</div>
	)
}

export default TaskCard
