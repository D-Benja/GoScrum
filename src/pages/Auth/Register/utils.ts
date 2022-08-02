import * as Yup from 'yup'
import { handleURL } from '../../../utils/handleURL'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../models'
import { FormikHelpers } from 'formik'
import { NavigateFunction } from 'react-router-dom'

const validateValues = {
	userName: Yup.string().required('Username is required'),
	email: Yup.string().email('Invalid Email').required('Email is required'),
	password: Yup.string().required('Password is required'),
	role: Yup.string().required('Role is required'),
	continent: Yup.string().required('Continent is required'),
	region: Yup.string().required('Region is required'),
	teamId: Yup.string().required('TeamId is required'),
}

export const validationSchema = Yup.object(validateValues)

export const handleSubmit = (
	_values: User,
	navigate: NavigateFunction
): ((
	values: User,
	formikHelpers: FormikHelpers<User>
) => void | Promise<any>) => {
	return async (values, formikHelpers) => {
		const { userName, email, password, role, continent, region, teamId } =
			values
		const teamID = !teamId ? uuidv4() : teamId
		const url = handleURL('/auth/register')

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: {
					userName,
					email,
					password,
					role,
					continent,
					region,
					teamID,
				},
			}),
		})

		if (response.status === 201) {
			formikHelpers.resetForm()
			formikHelpers.setSubmitting(false)

			navigate('/', { replace: true })
		}
	}
}
