interface TeamCardProps {
	teamName: string
	teamImage: string
	teamMembers: string[]
	teamProgression: string
}

export const TeamCard = (props: TeamCardProps) => {
	const { teamName, teamImage, teamMembers, teamProgression } = props

	return (
		<div className="w-64 rounded-2xl border bg-white px-6 py-8 shadow-md">
			<div className="flex items-center justify-center gap-4">
				<div className="h-10 w-10 rounded-full border bg-blue-400" />
				<h2>{teamName}</h2>
			</div>
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
			<div className="mt-6">
				<div className="flex items-center justify-between text-sm">
					<h3 className="mb-2 ">Progress</h3>
					<p className="">{teamProgression}</p>
				</div>
				<div className="relative h-1 w-full rounded-full bg-gray-200">
					<div className="absolute top-0 left-0 h-1 w-3/4 rounded-full bg-blue-400" />
				</div>
			</div>
		</div>
	)
}
