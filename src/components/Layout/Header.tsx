const Header = () => {
	const usename = localStorage.getItem('user')

	return (
		<header className="mt-8 flex h-16 w-full items-center justify-between pl-12 pr-16 lg:justify-end">
			{/* <div className="flex h-10 w-8 cursor-pointer flex-col justify-center gap-2 lg:hidden">
				<div className="h-[2px] w-full rounded-full bg-[#121617]" />
				<div className="h-[2px] w-full rounded-full bg-[#121617]" />
				<div className="h-[2px] w-1/2 rounded-full bg-[#121617]" />
			</div> */}

			<div className="flex items-center justify-center gap-14">
				<div className="flex items-center justify-center gap-14">
					<img src="icons/messages-icon.svg" alt="" className="h-6 w-6" />
					<img src="icons/bell-icon.svg" alt="" className="h-6 w-6" />
				</div>
				<div className="flex items-center justify-center gap-4">
					<span className="text-lg font-medium">{usename}</span>
					<div className="cursor-pointer">
						<img
							src="/profile_picture.png"
							alt="profile picture"
							width={54}
							height={54}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
