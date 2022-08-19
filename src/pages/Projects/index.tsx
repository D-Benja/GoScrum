import { Link, useNavigate } from 'react-router-dom'

export const index = () => {
	const navigate = useNavigate()

	const handleRedirect = () => {
		navigate('/projects/create')
	}

	return (
		<div className="flex flex-col gap-10 px-12 pt-8">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Projects</h1>
				<button
					className="flex items-center gap-6 rounded-2xl bg-deep_orange/75 p-3 px-8 font-medium text-white"
					onClick={handleRedirect}
				>
					<i className="fi fi-rr-plus text-2xl"></i>
					<span>Create new Project</span>
				</button>
			</div>
			<div className="grid grid-cols-12">
				<div className="col-span-4 p-6">
					<div className="mb-10 flex justify-between">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-medium">In Progress</h2>
							<i className="fi fi-rr-bars-progress flex items-center text-2xl"></i>
						</div>
						<Link to="" className=" text-deep_orange">
							See all
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<div className="h-full w-full rounded-2xl border border-yellow-600 bg-yellow-300/5 p-6 shadow-sm shadow-yellow-500 backdrop-blur">
							<div className="mb-4 flex items-center justify-between">
								<h3>Some project name</h3>
								<div className="flex cursor-pointer gap-1">
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
								</div>
							</div>
							<div className="mb-2 flex items-center gap-4">
								<h4 className="text-sm">Assigned Project Manager: </h4>
								<div className="flex items-center gap-4">
									<div className="h-10 w-10 rounded-full bg-gray-600" />
									<span>Jhon Doe</span>
								</div>
							</div>
							<div className="mb-4">
								<h4 className="mb-2 text-sm">Description</h4>
								<p className="relative h-16 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Maecenas sed viverra libero. Sed imperdiet mauris in nibh
									dignissim, in maximus leo rhoncus. Donec ornare massa ante,
									suscipit scelerisque massa pellentesque non. Donec in
									elementum nunc, eu hendrerit quam. Nam fermentum ut risus ut
									pellentesque. Morbi velit augue, finibus vel enim vel,
									accumsan facilisis est. Sed mollis euismod urna, at auctor
									velit. Suspendisse sed consectetur leo, at pulvinar lorem.
									Maecenas ornare aliquam eros, nec fringilla urna pharetra ut.
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<h4>Estimated Deadline</h4>
								<span>2022-12-14</span>
							</div>
						</div>
						<div className="h-full w-full rounded-2xl border border-yellow-600 bg-yellow-300/5 p-6 shadow-sm shadow-yellow-500 backdrop-blur">
							<div className="mb-4 flex items-center justify-between">
								<h3>Some project name</h3>
								<div className="flex cursor-pointer gap-1">
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
								</div>
							</div>
							<div className="mb-2 flex items-center gap-4">
								<h4 className="text-sm">Assigned Project Manager: </h4>
								<div className="flex items-center gap-4">
									<div className="h-10 w-10 rounded-full bg-gray-600" />
									<span>Jhon Doe</span>
								</div>
							</div>
							<div className="mb-4">
								<h4 className="mb-2 text-sm">Description</h4>
								<p className="relative h-16 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Maecenas sed viverra libero. Sed imperdiet mauris in nibh
									dignissim, in maximus leo rhoncus. Donec ornare massa ante,
									suscipit scelerisque massa pellentesque non. Donec in
									elementum nunc, eu hendrerit quam. Nam fermentum ut risus ut
									pellentesque. Morbi velit augue, finibus vel enim vel,
									accumsan facilisis est. Sed mollis euismod urna, at auctor
									velit. Suspendisse sed consectetur leo, at pulvinar lorem.
									Maecenas ornare aliquam eros, nec fringilla urna pharetra ut.
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<h4>Estimated Deadline</h4>
								<span>2022-12-14</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-4 p-6">
					<div className="mb-10 flex justify-between">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-medium">Under Review</h2>
							<i className="fi fi-rr-search-alt text-2xl"></i>
						</div>
						<Link to="" className=" text-deep_orange">
							See all
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<div className="h-full w-full rounded-2xl border border-orange-600 bg-orange-300/5 p-6 shadow-sm shadow-yellow-500 backdrop-blur">
							<div className="mb-4 flex items-center justify-between">
								<h3>Some project name</h3>
								<div className="flex cursor-pointer gap-1">
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
								</div>
							</div>
							<div className="mb-2 flex items-center gap-4">
								<h4 className="text-sm">Assigned Project Manager: </h4>
								<div className="flex items-center gap-4">
									<div className="h-10 w-10 rounded-full bg-gray-600" />
									<span>Jhon Doe</span>
								</div>
							</div>
							<div className="mb-4">
								<h4 className="mb-2 text-sm">Description</h4>
								<p className="relative h-16 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Maecenas sed viverra libero. Sed imperdiet mauris in nibh
									dignissim, in maximus leo rhoncus. Donec ornare massa ante,
									suscipit scelerisque massa pellentesque non. Donec in
									elementum nunc, eu hendrerit quam. Nam fermentum ut risus ut
									pellentesque. Morbi velit augue, finibus vel enim vel,
									accumsan facilisis est. Sed mollis euismod urna, at auctor
									velit. Suspendisse sed consectetur leo, at pulvinar lorem.
									Maecenas ornare aliquam eros, nec fringilla urna pharetra ut.
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<h4>Estimated Deadline</h4>
								<span>2022-12-14</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-4 p-6">
					<div className="mb-10 flex justify-between">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-medium">Completed</h2>
							<i className="fi fi-rr-checkbox text-2xl"></i>
						</div>
						<Link to="" className=" text-deep_orange">
							See all
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<div className="h-full w-full rounded-2xl border border-green-600 bg-green-300/5 p-6 shadow-sm shadow-green-500 backdrop-blur">
							<div className="mb-4 flex items-center justify-between">
								<h3>Some project name</h3>
								<div className="flex cursor-pointer gap-1">
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
								</div>
							</div>
							<div className="mb-2 flex items-center gap-4">
								<h4 className="text-sm">Assigned Project Manager: </h4>
								<div className="flex items-center gap-4">
									<div className="h-10 w-10 rounded-full bg-gray-600" />
									<span>Jhon Doe</span>
								</div>
							</div>
							<div className="mb-4">
								<h4 className="mb-2 text-sm">Description</h4>
								<p className="relative h-16 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Maecenas sed viverra libero. Sed imperdiet mauris in nibh
									dignissim, in maximus leo rhoncus. Donec ornare massa ante,
									suscipit scelerisque massa pellentesque non. Donec in
									elementum nunc, eu hendrerit quam. Nam fermentum ut risus ut
									pellentesque. Morbi velit augue, finibus vel enim vel,
									accumsan facilisis est. Sed mollis euismod urna, at auctor
									velit. Suspendisse sed consectetur leo, at pulvinar lorem.
									Maecenas ornare aliquam eros, nec fringilla urna pharetra ut.
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<h4>Estimated Deadline</h4>
								<span>2022-12-14</span>
							</div>
						</div>
						<div className="h-full w-full rounded-2xl border border-green-600 bg-green-300/5 p-6 shadow-sm shadow-green-500 backdrop-blur">
							<div className="mb-4 flex items-center justify-between">
								<h3>Some project name</h3>
								<div className="flex cursor-pointer gap-1">
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
									<div className="h-1.5 w-1.5 rounded-full bg-gray-700" />
								</div>
							</div>
							<div className="mb-2 flex items-center gap-4">
								<h4 className="text-sm">Assigned Project Manager: </h4>
								<div className="flex items-center gap-4">
									<div className="h-10 w-10 rounded-full bg-gray-600" />
									<span>Jhon Doe</span>
								</div>
							</div>
							<div className="mb-4">
								<h4 className="mb-2 text-sm">Description</h4>
								<p className="relative h-16 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-4 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Maecenas sed viverra libero. Sed imperdiet mauris in nibh
									dignissim, in maximus leo rhoncus. Donec ornare massa ante,
									suscipit scelerisque massa pellentesque non. Donec in
									elementum nunc, eu hendrerit quam. Nam fermentum ut risus ut
									pellentesque. Morbi velit augue, finibus vel enim vel,
									accumsan facilisis est. Sed mollis euismod urna, at auctor
									velit. Suspendisse sed consectetur leo, at pulvinar lorem.
									Maecenas ornare aliquam eros, nec fringilla urna pharetra ut.
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<h4>Estimated Deadline</h4>
								<span>2022-12-14</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
