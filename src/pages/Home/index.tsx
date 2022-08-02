// import { useResize } from '../../hooks/useResize'
import Header from '../../components/Layout/Header'
import SideBar from '../../components/Layout/SideBar'

export const index = ({ children }: any) => {
	// const display = useResize()

	return (
		<>
			<div className="flex">
				<SideBar />
				<div className="w-full">
					<Header />
					<div className="h-[calc(100vh-6rem)] overflow-x-hidden">
						{children}
					</div>
				</div>
			</div>
		</>
	)
}
