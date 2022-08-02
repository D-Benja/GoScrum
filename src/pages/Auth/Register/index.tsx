import { useState } from 'react'
import { useFormik } from 'formik'
import { OptionData, User } from '../models'
import { handleSubmit, validationSchema } from './utils'
import { Link, useNavigate } from 'react-router-dom'
import { handleURL } from '../../../utils/handleURL'
import Input from '../Layout/Input'
import Select from '../Layout/Select'
import useFetch from '../../../hooks/useFetch'
import { logo } from '../../../assets'

export const index = () => {
	const [credentials] = useState<User>({
		userName: '',
		email: '',
		password: '',
		role: '',
		continent: '',
		region: '',
		teamId: '',
	})
	const url = handleURL('/auth/data')
	const navigate = useNavigate()

	const [isSwitched, setIsSwitch] = useState(false)
	const { data, isLoading } = useFetch(url)

	const optionData: OptionData = data
	const initialValues = credentials

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit(credentials, navigate),
	})

	const continentIsSelected = !formik.values.continent

	return (
		<>
			{isLoading ? (
				<div className="container flex h-screen w-full items-center justify-center">
					<h1 className="text-2xl font-medium">Loading...</h1>
				</div>
			) : (
				<div className="container mx-auto flex h-[100vh] flex-col items-center justify-center ">
					<div className="absolute top-4 left-8 mt-2 flex items-center justify-center gap-4">
						<img src={logo} alt="gs logo" className="h-16 w-10" />
						<div className="flex items-center justify-center text-2xl">
							<span className="text-deep_orange">Go</span>
							<span>Scrum</span>
						</div>
					</div>
					<form onSubmit={formik.handleSubmit}>
						<h1 className="mb-10 text-3xl">Register</h1>
						<div className="mb-6">
							<Input
								type="text"
								label="Username"
								inputId="userName"
								handler={formik.handleChange}
							/>
							{formik.errors.userName && formik.touched.userName && (
								<div className="text-sm text-red-600">
									* {formik.errors.userName}
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
							<div className="relative flex flex-col justify-center overflow-hidden">
								<div className="flex">
									<label className="relative mr-5 inline-flex cursor-pointer items-center">
										<input
											type="checkbox"
											className="peer sr-only"
											checked={isSwitched}
											readOnly
											onChange={() => setIsSwitch(!isSwitched)}
										/>
										<div className="peer h-6 w-11 rounded-full bg-gray-200  after:absolute  after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600/70 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-orange-300"></div>
										<span className="ml-2 text-gray-900"> I have Team ID</span>
									</label>
								</div>
							</div>
						</div>
						{isSwitched && (
							<div className="mb-6">
								<Input
									type="text"
									label="Team ID"
									inputId="teamId"
									handler={formik.handleChange}
								/>
								{formik.errors.teamId && formik.touched.teamId && (
									<div className="text-sm text-red-600">
										* {formik.errors.teamId}
									</div>
								)}
							</div>
						)}
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
							<Link to="/" className="text-orange-500">
								Log in
							</Link>
						</p>
					</div>
				</div>
			)}
		</>
	)
}
