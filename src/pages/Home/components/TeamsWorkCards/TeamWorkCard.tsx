import useResize from '../../../../hooks/useResize'

export const TeamWorkCard = () => {
	const screenSize = useResize()

	const displayMobile = screenSize === 'sm' || screenSize === 'md'

	return (
		<div className="flex w-full flex-col gap-4 lg:flex lg:flex-row lg:gap-10">
			<div className="rounded-2xl border bg-white py-4 px-6 shadow-md lg:w-64 lg:py-8">
				<div className="flex items-center gap-4">
					<div className="h-10 w-10 rounded-full border bg-blue-400" />
					<h2>UX/UI Desing Team</h2>
				</div>
				{!displayMobile && (
					<div className="mt-6 h-20">
						<p className="mb-2">Team Members</p>
						<div className="relative flex">
							<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-blue-100" />
							<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-blue-200" />
							<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-blue-300" />
							<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-blue-400" />
							<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-blue-500" />
						</div>
					</div>
				)}

				<div className="mt-6">
					<div className="flex items-center justify-between text-sm">
						<h3 className="mb-2 ">Progress</h3>
						<p className="">75%</p>
					</div>
					<div className="relative h-1 w-full rounded-full bg-gray-200">
						<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-blue-400" />
					</div>
				</div>
			</div>
			<div className="rounded-2xl border bg-white py-4 px-6 shadow-md lg:w-64 lg:py-8">
				<div className="flex items-center gap-4">
					<div className="h-10 w-10 rounded-full border bg-green-400" />
					<h2>Front-end Team</h2>
				</div>
				{!displayMobile && (
					<div className="mt-6 h-20">
						<p className="mb-2">Team Members</p>
						<div className="relative flex">
							<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-green-100" />
							<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-green-200" />
							<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-green-300" />
							<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-green-400" />
							<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-green-500" />
						</div>
					</div>
				)}

				<div className="mt-6">
					<div className="flex items-center justify-between text-sm">
						<h3 className="mb-2 ">Progress</h3>
						<p className="">75%</p>
					</div>
					<div className="relative h-1 w-full rounded-full bg-gray-200">
						<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-green-400" />
					</div>
				</div>
			</div>
			<div className="rounded-2xl border bg-white py-4 px-6 shadow-md lg:w-64 lg:py-8">
				<div className="flex items-center gap-4">
					<div className="h-10 w-10 rounded-full border bg-yellow-400" />
					<h2>Back-end Team</h2>
				</div>
				{!displayMobile && (
					<div className="mt-6 h-20">
						<p className="mb-2">Team Members</p>
						<div className="relative flex">
							<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-yellow-100" />
							<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-yellow-200" />
							<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-yellow-300" />
							<div className="absolute top-0 left-24 h-10 w-10 rounded-full border bg-yellow-400" />
							<div className="absolute top-0 left-32 h-10 w-10 rounded-full border bg-yellow-500" />
						</div>
					</div>
				)}

				<div className="mt-6">
					<div className="flex items-center justify-between text-sm">
						<h3 className="mb-2 ">Progress</h3>
						<p className="">75%</p>
					</div>
					<div className="relative h-1 w-full rounded-full bg-gray-200">
						<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-yellow-400" />
					</div>
				</div>
			</div>
		</div>
	)
}
