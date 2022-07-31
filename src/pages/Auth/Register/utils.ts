import { SelectOptions } from '../models'
import * as Yup from 'yup'

const validateValues = {
	username: Yup.string().required('Username is required'),
	email: Yup.string().email('Invalid Email').required('Email is required'),
	password: Yup.string().required('Password is required'),
	role: Yup.string().required('Role is required'),
	continent: Yup.string().required('Continent is required'),
	region: Yup.string().required('Region is required'),
}

export const validationSchema = Yup.object(validateValues)

export const handleOptions = (selectType: string): Array<SelectOptions> => {
	if (selectType === 'role') {
		const options = [
			{ value: 'Team Member', label: 'Team Member' },
			{ value: 'Team Leader', label: 'Team Leader' },
		]

		return options
	}

	if (selectType === 'continent') {
		return [
			{ value: 'Africa', label: 'Africa' },
			{ value: 'Asia', label: 'Asia' },
			{ value: 'Europe', label: 'Europe' },
			{ value: 'North America', label: 'North America' },
			{ value: 'Oceania', label: 'Oceania' },
			{ value: 'South America', label: 'South America' },
		]
	}

	if (selectType === 'region') {
		return [
			{ value: 'United States', label: 'United States' },
			{ value: 'Latam', label: 'Latam' },
			{ value: 'Brasil', label: 'Brasil' },
			{ value: 'Australia', label: 'Australia' },
			{ value: 'Japan', label: 'Japan' },
			{ value: 'Others', label: 'Others' },
		]
	}

	return []
}
