import { comment, linkIcon } from '../../assets'

export const index = () => {
	return (
		<div className="flex flex-col gap-10 px-12 pt-8">
			<div className="flex justify-between">
				<h1>Name of the assigned project</h1>
				<div>Team members assigned to this project</div>
			</div>
			<div className="grid min-h-full grid-cols-5 gap-x-10">
				<div className="col-span-1 flex flex-col gap-6">
					<h2>To-Do</h2>
					<div className="h-44 rounded-2xl border px-4 py-3">
						<span className="rounded-2xl bg-red-500/90 px-4 py-1 text-sm text-white">
							High
						</span>
						<div className="mt-3 flex flex-col gap-1">
							<h3>Descriptive task name</h3>
							<p className="relative h-8 w-4/5 overflow-hidden text-xs after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:content-['']">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
								facere quasi nam placeat nostrum rem. Pariatur eius repellendus
								facilis repudiandae, eaque ab iste recusandae fugiat temporibus
								dolores cumque, odio accusamus?
							</p>
						</div>
						<div className="mt-4 flex justify-between">
							<div className="relative flex">
								<div className="absolute top-0 left-0 h-10 w-10 rounded-full border bg-blue-100" />
								<div className="absolute top-0 left-8 h-10 w-10 rounded-full border bg-blue-200" />
								<div className="absolute top-0 left-16 h-10 w-10 rounded-full border bg-blue-300" />
							</div>
							<div className="flex items-center gap-4 pt-2">
								<img src={comment} alt="" className="h-6 w-6" />
								<img src={linkIcon} alt="" className="h-6 w-6" />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-span-1 flex flex-col gap-6">
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
				</div>
				<div className="col-span-1 flex flex-col gap-6">
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
					<div className="h-40 bg-red-400"></div>
				</div> */}
			</div>
		</div>
	)
}
