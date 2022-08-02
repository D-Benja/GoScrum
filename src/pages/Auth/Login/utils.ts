import { FormikHelpers } from 'formik'
import { NavigateFunction } from 'react-router-dom'
import * as Yup from 'yup'
import { handleURL } from '../../../utils/handleURL'

const validateValues = {
	userName: Yup.string().required('Username is required'),
	password: Yup.string().required('Password is required'),
}
export const validationSchema = Yup.object(validateValues)

export const handleSubmit = (
	_values: any,
	navigate: NavigateFunction
): ((
	values: any,
	formikHelpers: FormikHelpers<any>
) => void | Promise<any>) => {
	return async (values, formikHelpers) => {
		const { userName, password } = values
		const url = handleURL('/auth/login')

		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status_code === 200) {
					formikHelpers.resetForm()
					formikHelpers.setSubmitting(false)

					localStorage.setItem('token', data?.result?.token)

					navigate('/', { replace: true })
				}
			})
	}
}
