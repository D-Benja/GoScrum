import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Developers, ProjectManagers } from './data'
import { ProjectData } from './models'
import { validationSchema } from './utils'

export const CreateNewProject = () => {
	const [projectData] = useState<ProjectData>({
		title: '',
		project_manager: 0,
		description: '',
		estimated_deadline: '',
		assignees: [],
	})

	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: projectData,
		validationSchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	console.log(formik.values.assignees)
	console.log(formik.errors.assignees)

	return (
		<div className="flex h-full flex-col gap-10 px-12 pt-8">
			<h1 className="text-2xl font-bold">Create a new project</h1>

			<form onSubmit={formik.handleSubmit} className="mx-10 flex h-full gap-10">
				<div className="mr-40 flex h-full max-w-lg flex-1 flex-col gap-10">
					<div className="flex flex-col gap-4">
						<label>Project Title</label>
						<input
							id="title"
							onChange={formik.handleChange}
							type="text"
							className="rounded-2xl border p-2"
						/>
						{formik.errors.title && formik.touched.title && (
							<div className="text-sm text-red-600">
								* {formik.errors.title}
							</div>
						)}
					</div>
					<div className="flex flex-col gap-4">
						<label>Assign Project Manager</label>
						<select
							id="project_manager"
							onChange={formik.handleChange}
							className="rounded-2xl border p-2"
						>
							{ProjectManagers.map((manager) => (
								<option key={manager.id} value={manager.id}>
									{manager.name}
								</option>
							))}
						</select>
						{formik.errors.project_manager &&
							formik.touched.project_manager && (
								<div className="text-sm text-red-600">
									* {formik.errors.project_manager}
								</div>
							)}
					</div>
					<div className="flex flex-col gap-4">
						<label>Project Description</label>
						<textarea
							id="description"
							onChange={formik.handleChange}
							className="rounded-2xl border p-2"
						/>
						{formik.errors.description && formik.touched.description && (
							<div className="text-sm text-red-600">
								* {formik.errors.description}
							</div>
						)}
					</div>
					<div className="flex flex-col gap-4">
						<label>Estimated deadline</label>
						<input
							id="estimated_deadline"
							onChange={formik.handleChange}
							type="date"
							className="rounded-2xl border p-2"
						/>
						{formik.errors.estimated_deadline &&
							formik.touched.estimated_deadline && (
								<div className="text-sm text-red-600">
									* {formik.errors.estimated_deadline}
								</div>
							)}
					</div>
					<div className="mt-8 flex justify-around">
						<button
							type="submit"
							className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
						>
							Create
						</button>
						<button
							type="button"
							className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
							onClick={() => navigate('/projects')}
						>
							Back
						</button>
					</div>
				</div>
				<div className="flex-1">
					<div className="flex flex-col gap-4">
						<label>Assignees</label>
						<div className="flex flex-wrap">
							{Developers.map((developer: any) => (
								<div className="w-1/2 py-2 px-8" key={developer.id}>
									<label className="flex gap-4">
										<input
											type="checkbox"
											id="assignees"
											value={developer.value}
											onChange={formik.handleChange}
										/>
										{developer.label}
									</label>
								</div>
							))}
						</div>
						{formik.errors.assignees && formik.touched.assignees && (
							<div className="text-sm text-red-600">
								* {formik.errors.assignees}
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	)
}
