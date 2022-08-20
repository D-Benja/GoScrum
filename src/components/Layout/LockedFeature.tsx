const LockedFeature = (props: any) => {
	const { rounded } = props

	return (
		<div
			className={
				'absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center bg-slate-200/10 backdrop-blur-sm ' +
				(rounded && `rounded-${rounded}`)
			}
		>
			<i className="fi fi-rr-lock text-2xl"></i>
			<h1>Feature Coming soon!</h1>
		</div>
	)
}

export default LockedFeature
