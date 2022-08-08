import { comment, linkIcon } from '../../../assets/index'
import { TaskCardProps } from '../models'

const TaskCard = ({
	taskTitle,
	taskDescription,
	taskPriority,
	taskAssignees,
}: TaskCardProps) => {
	return (
		<div className="h-48 rounded-2xl border px-4 py-3">
			<span className="rounded-2xl bg-red-500/90 px-4 py-1 text-sm text-white">
				{taskPriority}
			</span>
			<div className="mt-3 flex flex-col gap-2">
				<h3>{taskTitle}</h3>
				<p className="relative h-8 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, facere
					quasi nam placeat nostrum rem. Pariatur eius repellendus facilis
					repudiandae, eaque ab iste recusandae fugiat temporibus dolores
					cumque, odio accusamus?
				</p>
			</div>
			<div className="mt-6 flex justify-between">
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
