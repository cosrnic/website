const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			mono: ['"MapleMono"', ...defaultTheme.fontFamily.mono],
		},
		extend: {
			colors: {
				'ctp-rosewater': 'rgba(var(--ctp-rosewater), <alpha-value>)',
				'ctp-flamingo': 'rgba(var(--ctp-flamingo), <alpha-value>)',
				'ctp-pink': 'rgba(var(--ctp-pink), <alpha-value>)',
				'ctp-mauve': 'rgba(var(--ctp-mauve), <alpha-value>)',
				'ctp-red': 'rgba(var(--ctp-red), <alpha-value>)',
				'ctp-maroon': 'rgba(var(--ctp-maroon), <alpha-value>)',
				'ctp-peach': 'rgba(var(--ctp-peach), <alpha-value>)',
				'ctp-yellow': 'rgba(var(--ctp-yellow), <alpha-value>)',
				'ctp-green': 'rgba(var(--ctp-green), <alpha-value>)',
				'ctp-teal': 'rgba(var(--ctp-teal), <alpha-value>)',
				'ctp-sky': 'rgba(var(--ctp-sky), <alpha-value>)',
				'ctp-sapphire': 'rgba(var(--ctp-sapphire), <alpha-value>)',
				'ctp-blue': 'rgba(var(--ctp-blue), <alpha-value>)',
				'ctp-lavender': 'rgba(var(--ctp-lavender), <alpha-value>)',
			},
		},
	},
	safelist: [
		{
			pattern: /(bg|text|to|from|border)-ctp-[a-zA-Z0-9/-]+/,
			variants: ['hover'],
		},
	],
};
