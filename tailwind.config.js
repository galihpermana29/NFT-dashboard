module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Poppins', 'system-ui'],
		},
		extend: {
			backgroundImage: {
				'card-1': "url('/public/img1.png')",
			},
			screens: {
				sm: { max: '768px' },
				// => @media (min-width: 640px) { ... }

				// => @media (min-width: 768px) { ... }

				lg: { max: '1024px' },
				// => @media (min-width: 1024px) { ... }

				xl: { max: '1280px' },
				// => @media (min-width: 1280px) { ... }

				'2xl': { max: '1536px' },
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
