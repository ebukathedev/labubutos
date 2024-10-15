/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				brand: "var(--color-brand)",
				secondary: "var(--color-secondary)",
			},
			fontFamily: {
				brand: ["American Purpose", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				"hero-pattern":
					"url('/src/assets/images/image-removebg-preview.png')",
			},
		},
	},
	plugins: [],
};
