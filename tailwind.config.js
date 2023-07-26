/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				expand: {
					'0%': { transform: 'scaleY(0)' },
					'70%': { transform: 'scaleY(1.1)' },
					'100%': { transform: 'scaleY(1)' },
				},
			},
			animation: {
				expand: 'expand 500ms ease-in-out',
			},
		},
	},
	plugins: [],
};
