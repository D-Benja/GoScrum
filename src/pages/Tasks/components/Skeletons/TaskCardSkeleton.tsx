import ContentLoader from 'react-content-loader'

const TaskCardSkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={342}
		height={200}
		viewBox="0 0 400 200"
		backgroundColor="#f5bcbc"
		foregroundColor="#d3531d"
		{...props}
	>
		<rect x="22" y="2" rx="11" ry="11" width="65" height="30" />
		<rect x="245" y="6" rx="5" ry="5" width="137" height="20" />
		<rect x="21" y="55" rx="5" ry="5" width="161" height="10" />
		<rect x="22" y="86" rx="5" ry="5" width="220" height="10" />
		<circle cx="45" cy="160" r="25" />
		<circle cx="100" cy="160" r="25" />
		<circle cx="155" cy="160" r="25" />
		<rect x="345" y="150" rx="11" ry="11" width="38" height="25" />
	</ContentLoader>
)

export default TaskCardSkeleton
