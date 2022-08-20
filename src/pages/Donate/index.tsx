import LockedFeature from '../../components/Layout/LockedFeature'

export const index = () => {
	return (
		<div className="relative flex h-full flex-col gap-8 px-4 pt-6 lg:gap-14 lg:px-12 lg:pt-8">
			<LockedFeature />
			<h1 className="text-5xl">Donate page</h1>
		</div>
	)
}
