/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				deep_blue: '#243d52',
				deep_orange: '#FF452B',
			},
		},
	},
	plugins: [],
}
