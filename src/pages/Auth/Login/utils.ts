import { Credentials } from '../models'

export const validateValues = (values: Credentials) => {
	const errors: any = {}
	if (!values.email) {
		errors.email = 'Email is required'
	}
	if (!values.password) {
		errors.password = 'Password is required'
	}
	return errors
}
