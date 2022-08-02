import {
	bellIcon,
	commentsIcon,
	profilePicture,
	searchIcon,
} from '../../assets'

const Header = () => {
	return (
		<header className="mt-8 flex h-16 w-full items-center justify-between px-12 lg:justify-end">
			<div className="flex h-10 w-8 cursor-pointer flex-col justify-center gap-2 lg:hidden">
				<div className="h-[2px] w-full rounded-full bg-[#121617]" />
				<div className="h-[2px] w-full rounded-full bg-[#121617]" />
				<div className="h-[2px] w-1/2 rounded-full bg-[#121617]" />
			</div>

			<div className="flex items-center justify-center gap-14">
				<div className="flex items-center justify-center gap-14">
					<div className="flex items-center justify-center gap-14">
						<input
							type="text"
							className="h-10 w-80 rounded-full border border-deep_blue/40 px-4"
							placeholder="Search"
						/>
						<img src={searchIcon} alt="" className="h-6 w-6 cursor-pointer" />
					</div>
					<img src={commentsIcon} alt="" className="h-6 w-6 cursor-pointer" />
					<img src={bellIcon} alt="" className="h-6 w-6 cursor-pointer" />
				</div>
				<div className="flex items-center justify-center gap-6">
					<div className="w-14 cursor-pointer">
						<img src={profilePicture} alt="" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
