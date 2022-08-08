import * as Yup from 'yup'

const validatedValues = {
	title: Yup.string()
		.min(6, 'At least 6 characters required')
		.required('Title is required'),
	description: Yup.string().required('Description is required'),
	importance: Yup.string().required('Priority is required'),
	status: Yup.string().required('Status is required'),
}

export const validationSchema = Yup.object(validatedValues)
