import { profilePicture } from '../../assets'

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
					<i className="fi fi-rr-comments cursor-pointer text-2xl"></i>
					<i className="fi fi-rr-bell cursor-pointer text-2xl"></i>
				</div>
				<div className="flex items-center justify-center gap-4">
					<span className="text-lg font-medium">{usename}</span>
					<div className="w-14 cursor-pointer">
						<img src={profilePicture} alt="" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
