/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope Variable', 'sans-serif'],
				glamour: ['Glamour', 'serif'],
				summerloving: ['Summer Loving', 'serif']
			},
			backgroundImage: {
				pricing: "url('lib/images/pricing-background.jpg')",
				hero: "url('lib/images/hero-background.jpg')"
			},
			boxShadow: {
				button:
					'0px -3px 10.3px 0px #138d3f inset, 0px 2px 2px 0px #8affb4 inset, 0px 0px 56.8px 0px rgba(140, 218, 173, 0.46)',
				hover:
					'0px -3px 10.3px 0px #138d3f inset, 0px 2px 2px 0px #8affb4 inset, 0px 0px 100px 0px rgba(140, 218, 173, 0.46)'
			}
		}
	},
	plugins: []
};