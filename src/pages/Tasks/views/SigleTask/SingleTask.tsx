import { useReducer, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import {
	deleteTasks,
	updateTasks,
} from '../../../../store/actions/tasksActions'
import { useAppDispatch } from '../../../../store/hooks/hooks'
import { handleURL } from '../../../../utils/handleURL'
import { parseDate, handlePriorityColors } from '../../utils'

const SingleTask = () => {
	const [modifiable, setModifiable] = useState(false)
	const taskID = useParams().id
	const [updatedData, setUpdatedData] = useState({
		id: taskID,
		title: '',
		description: '',
		importance: '',
		status: '',
	})

	const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const url = handleURL('/task/' + taskID)
	const authToken = localStorage.getItem('token')

	const { data, isLoading } = useFetch({
		url,
		authToken,
		externalDependency: reducerValue,
	})

	const handleChange = (event: any) => {
		const { name, value } = event.target
		setUpdatedData({ ...updatedData, [name]: value })
	}

	const handleDeleteCard = () => {
		dispatch(deleteTasks(taskID))

		navigate('/tasks')
	}

	const handleModify = () => {
		setModifiable(!modifiable)
	}

	const handleSaveChanges = () => {
		dispatch(updateTasks(updatedData))
		setModifiable(false)

		toast.success('Task updated successfully!')

		forceUpdate()
	}

	const handleGoBack = () => {
		navigate('/tasks')
	}

	return (
		<>
			<div>
				<Toaster />
			</div>
			{isLoading ? (
				<div className="grid h-full place-content-center text-3xl font-bold">
					Loading...
				</div>
			) : (
				<div className="flex h-full flex-col gap-8 px-4 pt-6 lg:gap-14 lg:px-12 lg:pt-8">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6">
							<button onClick={handleGoBack}>
								<i className="fi fi-rr-arrow-small-left flex items-center text-4xl"></i>
							</button>
							<h1 className="text-2xl font-bold">Task title: </h1>
							{modifiable ? (
								<div className="flex items-center gap-4">
									<input
										name="title"
										className="rounded-xl border border-deep_orange px-4 py-2 text-lg"
										defaultValue={data.title}
										onChange={handleChange}
									/>
									<i className="fi fi-rr-pencil flex items-center text-2xl"></i>
								</div>
							) : (
								<span className="text-2xl">{data.title}</span>
							)}
						</div>
						<div className="flex items-center gap-10">
							{modifiable ? (
								<>
									<button
										className="flex w-56 items-center gap-6 rounded-2xl bg-deep_orange p-3 px-8 font-medium text-white"
										onClick={handleSaveChanges}
									>
										<i className="fi fi-rr-pencil flex items-center text-2xl"></i>
										<span>Save changes</span>
									</button>
									<button
										className="flex w-64 items-center gap-6 rounded-2xl bg-deep_orange p-3 px-8 font-medium text-white"
										onClick={handleModify}
									>
										<i className="fi fi-rr-cross flex items-center text-2xl"></i>
										<span>Discard changes</span>
									</button>
								</>
							) : (
								<button
									className="flex w-56 items-center gap-6 rounded-2xl bg-deep_orange p-3 px-8 font-medium text-white"
									onClick={handleModify}
								>
									<i className="fi fi-rr-pencil flex items-center text-2xl"></i>
									<span>Modify Task</span>
								</button>
							)}

							<button
								className="flex items-center gap-6 rounded-2xl bg-deep_orange p-3 px-8 font-medium text-white"
								onClick={handleDeleteCard}
							>
								<i className="fi fi-rr-trash flex items-center text-2xl"></i>
								<span>Delete Task</span>
							</button>
						</div>
					</div>
					<div className="mb-20 grid h-full grid-cols-12 gap-x-10">
						<div className="col-span-4 flex flex-col gap-10 rounded-2xl border px-10 py-6">
							<h2 className="text-xl font-medium">Task Information</h2>
							<div className="flex flex-col gap-8">
								<div className="flex items-center gap-4">
									<h3 className="text-lg">Priority:</h3>
									{modifiable ? (
										<div className="flex items-center gap-4">
											<select
												name="importance"
												id=""
												className="rounded-xl border border-deep_orange px-4 py-2"
												defaultValue={data.importance}
												onChange={handleChange}
											>
												<option value="">Select priority</option>
												<option value="LOW">Low</option>
												<option value="MEDIUM">Medium</option>
												<option value="HIGH">High</option>
											</select>
											<i className="fi fi-rr-pencil text-2xl"></i>
										</div>
									) : (
										<span
											className={
												'rounded-2xl px-4 py-1 text-sm font-medium tracking-wide text-white ' +
												handlePriorityColors(data.importance)
											}
										>
											{data.importance}
										</span>
									)}
								</div>
								<div className="flex items-center gap-4">
									<h3 className="text-lg">Status:</h3>
									{modifiable ? (
										<div className="flex items-center gap-4">
											<select
												name="status"
												id=""
												className="rounded-xl border border-deep_orange px-4 py-2"
												defaultValue={data.status}
												onChange={handleChange}
											>
												<option value="">Select priority</option>
												<option value="NEW">New</option>
												<option value="IN PROGRESS">In Progress</option>
												<option value="FINISHED">Finished</option>
											</select>
											<i className="fi fi-rr-pencil text-2xl"></i>
										</div>
									) : (
										<span className="rounded-2xl bg-slate-600 px-4 py-1 text-sm font-medium tracking-wide text-white">
											{data.status}
										</span>
									)}
								</div>
								<div className="flex flex-col gap-4">
									<div className="mb-4 flex items-center justify-between">
										<h3 className="text-lg">Assignees</h3>
										<div className="flex gap-10">
											<i className="fi fi-rr-plus cursor-pointer text-xl"></i>
											<i className="fi fi-rr-minus cursor-pointer text-xl"></i>
										</div>
									</div>
									<div className="flex flex-col gap-4">
										<div className="flex items-center gap-6 rounded-xl border py-2 px-4">
											<div className="h-10 w-10 rounded-full bg-slate-600" />
											<span>{data.user?.userName}</span>
										</div>
										<div className="flex items-center gap-6 rounded-xl border py-2 px-4">
											<div className="h-10 w-10 rounded-full bg-slate-600" />
											<span>Jhon Doe</span>
										</div>
										<div className="flex items-center gap-6 rounded-xl border py-2 px-4">
											<div className="h-10 w-10 rounded-full bg-slate-600" />
											<span>Jhon Doe</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h3 className="text-lg">Project Linked</h3>
									<select name="" id="" className="rounded-xl border px-4 py-2">
										<option value="">Project 1</option>
										<option value="">Project 2</option>
										<option value="">Project 3</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-span-8 flex flex-col gap-10">
							<div className="flex h-36 w-full items-center gap-20 rounded-2xl border px-16">
								<div className="flex h-full flex-col justify-center gap-2">
									<div className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-deep_orange " />
										<h2>Date created</h2>
									</div>
									<span>{parseDate(data.createdAt)}</span>
								</div>
								<div className="flex h-full flex-col justify-center gap-2">
									<div className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-deep_blue/70 " />
										<h2>Last Update</h2>
									</div>
									<span>{parseDate(data.modifiedAt)}</span>
								</div>
								<div className="flex h-full flex-col justify-center gap-2">
									<div className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-green-500 " />
										<h2>Progress</h2>
									</div>
									<span>75% Completed</span>
								</div>
								<div className="h-3/4 w-0.5 rounded-full bg-deep_blue/50" />
								<div className="flex h-full flex-col justify-center gap-2">
									<div className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-red-500 " />
										<h2>Deadline</h2>
									</div>
									<span>{parseDate(data.createdAt)}</span>
								</div>
							</div>
							<div className="flex h-full flex-col gap-4 rounded-2xl border px-10 py-6">
								<div className="flex items-center gap-4">
									<h3 className="text-xl font-medium">Description</h3>
									{modifiable && <i className="fi fi-rr-pencil text-2xl"></i>}
								</div>
								<div className="h-full">
									{modifiable ? (
										<textarea
											name="description"
											id=""
											className="h-3/4 w-full rounded-xl border border-deep_orange bg-slate-100/20 p-4"
											onChange={handleChange}
											defaultValue={data.description}
										/>
									) : (
										<p className="h-3/4">{data.description}</p>
									)}
									<div className="flex h-32 items-center justify-between">
										<div className="flex items-center gap-8 font-medium">
											<span>0 attachments</span>
											<button>
												<span className="text-deep_orange">See all {'>'}</span>
											</button>
										</div>
										<div className="flex items-center gap-8">
											<button>
												<i className="fi fi-rr-comment-alt text-2xl"></i>
											</button>
											<button>
												<i className="fi fi-rr-link text-2xl"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SingleTask
