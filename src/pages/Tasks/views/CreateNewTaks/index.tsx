// import axios from 'axios'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleURL } from '../../../../utils/handleURL'
import { validationSchema } from './utils'

export const index = () => {
	const [values] = useState({
		title: '',
		description: '',
		importance: '',
		status: '',
	})

	const navigate = useNavigate()
	const url = handleURL('/task')

	const formik = useFormik({
		initialValues: values,
		validationSchema,
		onSubmit: async () => {
			const values = formik.values
			const response = await axios.post(url, JSON.stringify({ task: values }), {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})

			const data = await response.data.json()

			if (data.status_code === 200) {
				formik.resetForm()
			}
			console.log(response)
		},
	})

	return (
		<div className="flex h-full flex-col gap-10 px-12 pt-8">
			<div className="">
				<h1 className="text-2xl font-semibold text-deep_blue">
					Create new task here
				</h1>
			</div>
			<div className="h-full">
				<form
					className="grid h-full grid-cols-3 gap-20"
					onSubmit={formik.handleSubmit}
				>
					<div className="flex h-full flex-col gap-10">
						<div className="flex flex-col">
							<label>Task title</label>
							<input
								id="title"
								type="text"
								className="rounded-2xl border p-2"
								placeholder=""
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.title}
							/>
							{formik.errors.title && formik.touched.title && (
								<div className="text-sm text-red-600">
									* {formik.errors.title}
								</div>
							)}
						</div>

						<div className="flex flex-col">
							<label>Task Priority</label>
							<select
								name=""
								id="importance"
								className="rounded-2xl border p-2"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.importance}
							>
								<option value="">Select priority</option>
								<option value="HIGH">High</option>
								<option value="MEDIUM">Medium</option>
								<option value="LOW">Low</option>
							</select>
							{formik.errors.importance && formik.touched.importance && (
								<div className="text-sm text-red-600">
									* {formik.errors.importance}
								</div>
							)}
						</div>
						<div className="flex flex-col">
							<label>Task Status</label>
							<select
								name=""
								id="status"
								className="rounded-2xl border p-2 "
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.status}
							>
								<option value="">Select Status</option>
								<option value="NEW">New</option>
								<option value="IN PROGRESS">In Progress</option>
								<option value="FINISHED">Finished</option>
							</select>
							{formik.errors.status && formik.touched.status && (
								<div className="text-sm text-red-600">
									* {formik.errors.status}
								</div>
							)}
						</div>
						<div className="mt-40 flex justify-around">
							<button
								type="submit"
								className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
							>
								Create
							</button>
							<button
								type="button"
								className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
								onClick={() => navigate('/tasks')}
							>
								Back
							</button>
						</div>
					</div>
					<div>
						<div className="flex flex-col">
							<label>Task description</label>
							<textarea
								id="description"
								className="rounded-2xl border p-2"
								placeholder=""
								rows={10}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.description}
							/>
							{formik.errors.description && formik.touched.description && (
								<div className="text-sm text-red-600">
									* {formik.errors.description}
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
