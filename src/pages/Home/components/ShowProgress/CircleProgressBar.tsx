import { motion } from 'framer-motion'
import { useCircleProgressBar } from '../../hooks/useCircleProgressBar'
import { circleProgressBarAnimation } from '../../utils'

const CircleProgressBar = (props: any) => {
	const { radius, strokeWidth } = useCircleProgressBar(props.display)

	return (
		<div className="relative">
			<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-xl">
				% 75
			</span>
			<motion.svg
				initial="hidden"
				animate="visible"
				className="h-40 w-40 -rotate-90 "
			>
				<motion.circle
					cx="80"
					cy="80"
					r={radius}
					fill="none"
					strokeWidth={strokeWidth}
					className="stroke-white"
				/>
				<motion.circle
					cx="80"
					cy="80"
					r={radius}
					fill="none"
					strokeWidth={strokeWidth}
					className="stroke-deep_orange"
					variants={circleProgressBarAnimation}
				/>
			</motion.svg>
		</div>
	)
}

export default CircleProgressBar
