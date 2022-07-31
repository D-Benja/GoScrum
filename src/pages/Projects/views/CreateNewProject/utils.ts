import * as Yup from 'yup'

const validatedValues = {
	title: Yup.string().required(),
	project_manager: Yup.number().required('Project Manager is required'),
	description: Yup.string().required('Description is required'),
	estimated_deadline: Yup.date().required('Estimated deadline is required'),
	assignees: Yup.array()
		.of(Yup.string())
		.required('Assignee is required')
		.required('Assignee is required'),
}

export const validationSchema = Yup.object(validatedValues)
