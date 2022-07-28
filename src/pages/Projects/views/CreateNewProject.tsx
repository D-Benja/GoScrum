import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

interface ProjectData {
	title: string
	project_manager: number
	description: string
	estimated_deadline: string
	assignees: Array<number>
}

export const CreateNewProject = () => {
	const [projectData, _setProjectData] = useState<ProjectData>({
		title: '',
		project_manager: 0,
		description: '',
		estimated_deadline: '',
		assignees: [],
	})
	const navigate = useNavigate()

	const handleRedirect = () => {
		navigate('/projects')
	}

	const validatedValues = {
		title: Yup.string().required(),
		project_manager: Yup.number().required('Project Manager is required'),
		description: Yup.string().required('Description is required'),
		estimated_deadline: Yup.date().required('Estimated deadline is required'),
		assignees: Yup.array()
			.of(Yup.number().required('Assignee is required'))
			.required(),
	}

	const formik = useFormik({
		initialValues: projectData,
		validationSchema: Yup.object(validatedValues),
		onSubmit: (values) => {
			console.log(values)
		},
	})

	const ProjectManagers = [
		{ id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 2, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 3, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 4, name: 'John Doe', email: 'jhondoe@gmail.com' },
	]
	const Developers = [
		{ id: 1, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 2, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 3, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 4, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 5, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 6, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 7, name: 'John Doe', email: 'jhondoe@gmail.com' },
		{ id: 8, name: 'John Doe', email: 'jhondoe@gmail.com' },
	]

	return (
		<div className="flex flex-col gap-10 px-12 pt-8">
			<h1 className="text-2xl font-bold">Create a new project</h1>

			<form
				onSubmit={formik.handleSubmit}
				className="mx-10 flex max-w-lg flex-col gap-10"
			>
				<div className="flex flex-col gap-4">
					<label>Project Title</label>
					<input
						id="title"
						onChange={formik.handleChange}
						type="text"
						className="rounded-2xl border p-2"
					/>
					{formik.errors.title && formik.touched.title && (
						<div className="text-sm text-red-600">* {formik.errors.title}</div>
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
					{formik.errors.project_manager && formik.touched.project_manager && (
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
				<div className="flex flex-col gap-4">
					<label>Assignees </label>
					<select className="rounded-2xl border p-2">
						{Developers.map((developer) => (
							<option key={developer.id} value={developer.id}>
								{developer.name}
							</option>
						))}
					</select>
					{formik.errors.assignees && formik.touched.assignees && (
						<div className="text-sm text-red-600">
							* {formik.errors.assignees}
						</div>
					)}
				</div>

				<div className="flex justify-around">
					<button
						type="submit"
						className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
					>
						Create
					</button>
					<button
						type="button"
						className="w-40 rounded-2xl bg-deep_orange py-2 px-8 font-medium tracking-wide text-white"
						onClick={handleRedirect}
					>
						Back
					</button>
				</div>
			</form>
		</div>
	)
}
