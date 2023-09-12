const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: {
					100: '#2E2E3E',
					200: '#272733',
					300: '#1D1D27',
				},
				primary: '#EA5955',
				secondary: '#E4E5EC',
			},
		},
		fontFamily: {
			sans: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
