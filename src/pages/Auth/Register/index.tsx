import { useState } from 'react'
import { useFormik } from 'formik'
import { User } from '../models'
import Input from '../Layout/Input'
import Select from '../Layout/Select'
import { validationSchema } from './utils'
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { apiRequest } from '../../../setup/apiUrl'

interface OptionData {
	Rol: []
	Continente: []
	Region: []
}

export const index = () => {
	const [credentials] = useState<User>({
		uuid: '',
		username: '',
		email: '',
		password: '',
		role: '',
		continent: '',
		region: '',
	})

	const url = apiRequest('/auth/data')

	const { data, isLoading } = useFetch(url)

	const optionData: OptionData = data

	const formik = useFormik({
		initialValues: credentials,
		validationSchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	const continentIsSelected = !formik.values.continent

	console.log(!continentIsSelected)

	return (
		<>
			{isLoading ? (
				<div className="container flex h-screen w-full items-center justify-center">
					<h1 className="text-2xl font-medium">Loading...</h1>
				</div>
			) : (
				<div className="container mx-auto flex h-[100vh] flex-col items-center justify-center ">
					<div className="absolute left-10 top-10 flex text-lg font-bold">
						<p className="text-orange-500">Go</p>
						<p className=" opacity-70">Scrum</p>
					</div>
					<form onSubmit={formik.handleSubmit}>
						<h1 className="mb-10 text-3xl">Register</h1>
						<div className="mb-6">
							<Input
								type="text"
								label="Username"
								inputId="username"
								handler={formik.handleChange}
							/>
							{formik.errors.username && formik.touched.username && (
								<div className="text-sm text-red-600">
									* {formik.errors.username}
								</div>
							)}
						</div>
						<div className="mb-6">
							<Input
								type="email"
								label="Email"
								inputId="email"
								handler={formik.handleChange}
							/>
							{formik.errors.email && formik.touched.email && (
								<div className="text-sm text-red-600">
									* {formik.errors.email}
								</div>
							)}
						</div>
						<div className="mb-6">
							<Input
								type="password"
								label="Password"
								inputId="password"
								handler={formik.handleChange}
							/>
							{formik.errors.password && formik.touched.password && (
								<div className="text-sm text-red-600">
									* {formik.errors.password}
								</div>
							)}
						</div>
						<div className="mb-6">
							<Select
								label="Role"
								inputId="role"
								handler={formik.handleChange}
								options={optionData.Rol}
								defaultValue={'Select a Role'}
							/>
							{formik.errors.role && formik.touched.role && (
								<div className="text-sm text-red-600">
									* {formik.errors.role}
								</div>
							)}
						</div>
						<div className="mb-6">
							<Select
								label="Continent"
								inputId="continent"
								handler={formik.handleChange}
								options={data.continente}
								defaultValue={'Select a continent'}
							/>
							{formik.errors.continent && formik.touched.continent && (
								<div className="text-sm text-red-600">
									* {formik.errors.continent}
								</div>
							)}
						</div>
						{!continentIsSelected && (
							<div className="mb-6">
								<Select
									label="Region"
									inputId="region"
									handler={formik.handleChange}
									options={data.region}
									defaultValue={'Select a region'}
								/>
								{formik.errors.region && formik.touched.region && (
									<div className="text-sm text-red-600">
										* {formik.errors.region}
									</div>
								)}
							</div>
						)}
						<button
							type="submit"
							className="flex w-full justify-center rounded-lg border bg-orange-400/95 p-1 text-white"
						>
							Sign In
						</button>
					</form>
					<div className="mt-8 flex flex-col items-center">
						<p className="text-center text-gray-500">
							If you have a account, please{' '}
							<Link to="/login" className="text-orange-500">
								Log in
							</Link>
						</p>
					</div>
				</div>
			)}
		</>
	)
}
