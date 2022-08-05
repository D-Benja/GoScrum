import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const TaskModal = () => {
	const [values] = useState({
		title: '',
		description: '',
		priority: '',
		assignee: '',
		dueDate: '',
	})

	const validateValues = {
		title: Yup.string().required('Title is required'),
		description: Yup.string().required('Description is required'),
		priority: Yup.string().required('Priority is required'),
		assignee: Yup.string().required('Assignee is required'),
		dueDate: Yup.string().required('Due date is required'),
	}

	const formik = useFormik({
		initialValues: values,
		validationSchema: Yup.object(validateValues),
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<div className="absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white md:w-5/12 xl:w-3/12">
			<form
				onSubmit={formik.handleSubmit}
				className="flex h-full flex-col justify-around p-6 md:p-10"
			>
				<h1 className="mb-2 text-xl font-bold">Create a new Task</h1>
				<div className="mb-6 flex flex-col text-sm">
					<label className=" tracking-wide text-black/70">Task title</label>
					<input
						id="title"
						type="text"
						className={`border-b p-1 outline-none ${
							formik.errors.title ? 'border-red-500' : ''
						}`}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.title && formik.touched.title && (
						<div className="text-sm text-red-600">* {formik.errors.title}</div>
					)}
				</div>
				<div className="mb-6 flex flex-col gap-2 text-sm ">
					<label className="text-sm tracking-wide text-black/70">
						Task Priority
					</label>
					<div className="relative inline-block w-full">
						<select
							id="priority"
							className="w-full appearance-none rounded-xl border bg-orange-400 p-2 text-white outline-none"
							defaultValue={'Select a Priority'}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						>
							<option value="">Select a priority</option>
							<option className="tracking-wide" value="low">
								Low
							</option>
							<option className="tracking-wide" value="medium">
								Medium
							</option>
							<option className="tracking-wide" value="high">
								High
							</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg className="h-4 w-4 fill-white" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
					{formik.errors.priority && formik.touched.priority && (
						<div className="text-sm text-red-600">
							* {formik.errors.priority}
						</div>
					)}
				</div>

				<div className="mb-6 flex flex-col gap-2 text-sm">
					<label className="text-sm tracking-wide text-black/70">
						Estimated task end date
					</label>
					<input
						type="date"
						id="dueDate"
						className="rounded-xl bg-orange-400 p-2 text-white"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.dueDate && formik.touched.dueDate && (
						<div className="text-sm text-red-600">
							* {formik.errors.dueDate}
						</div>
					)}
				</div>
				<div className="mb-6 flex flex-col gap-2 text-sm">
					<label className="tracking-wide text-black/70">Description</label>
					<textarea
						name=""
						id="description"
						className="h-20 w-full rounded-lg border p-2 text-sm outline-none"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.description && formik.touched.description && (
						<div className="text-sm text-red-600">
							* {formik.errors.description}
						</div>
					)}
				</div>
				<div className="flex w-full items-center justify-center">
					<button
						type="submit"
						className="rounded-full bg-orange-400 px-6 py-2"
					>
						<span className="text-sm font-bold tracking-wide text-white">
							Create Task
						</span>
					</button>
				</div>
			</form>
		</div>
	)
}

export default TaskModal
