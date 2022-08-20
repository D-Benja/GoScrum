import { useState } from 'react'
import { Credentials } from '../models'
import { useFormik } from 'formik'
import Input from '../Layout/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { handleSubmit, validationSchema } from './utils'

export const index = () => {
	const [credentials] = useState<Credentials>({
		userName: '',
		password: '',
	})

	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: credentials,
		validationSchema,
		onSubmit: handleSubmit(credentials, navigate),
	})

	return (
		<>
			<div className="absolute top-4 left-8 mt-2 flex items-center justify-center gap-4">
				<img src="/logo_gs.png" alt="gs logo" className="h-16 w-10" />
				<div className="flex items-center justify-center text-2xl">
					<span className="text-deep_orange">Go</span>
					<span>Scrum</span>
				</div>
			</div>
			<div className="container mx-auto flex h-screen flex-col items-center justify-center">
				<form onSubmit={formik.handleSubmit}>
					<h1 className="mb-10 text-3xl">Log in</h1>
					<div className="mb-6 flex flex-col">
						<Input
							inputId="userName"
							label="Username"
							handler={formik.handleChange}
							type="userName"
							onBlurHandler={formik.handleBlur}
						/>
						{formik.errors.userName && formik.touched.userName && (
							<div className="text-sm text-red-600">
								* {formik.errors.userName}
							</div>
						)}
					</div>

					<div className="mb-6 flex flex-col">
						<Input
							inputId="password"
							label="Password"
							handler={formik.handleChange}
							type="password"
							onBlurHandler={formik.handleBlur}
						/>
						{formik.errors.password && formik.touched.password && (
							<div className="text-sm text-red-600">
								* {formik.errors.password}
							</div>
						)}
					</div>

					<button
						type="submit"
						className="w-full rounded-lg border bg-deep_orange p-1 text-white"
					>
						Log in
					</button>
				</form>
				<div className="mt-8 flex flex-col items-center">
					<p className="text-center text-gray-500">
						Don&apos;t have an account?{' '}
						<Link to="/register" className="text-orange-500">
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}
