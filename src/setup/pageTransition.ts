export const pageTransition = {
	in: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
	out: {
		opacity: 0,
		x: -100,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
}
