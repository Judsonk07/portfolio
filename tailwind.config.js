/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	// Safelist dynamic classes that may be generated at runtime or via template strings
	safelist: [
		// scaling classes used in Home.jsx and other components
		'scale-100', 'scale-105', 'scale-110',
		'scale-120', 'scale-140', 'scale-145', 'scale-150', 'scale-155', 'scale-160', 'scale-175', 'scale-180',
		// width utilities used
		'w-full', 'max-w-[700px]'
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2.5rem',
			},
		},
		extend: {
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}
