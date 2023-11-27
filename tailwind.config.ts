import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "max-md": {max: '767px'},
        "min-md": {min: '768px'},
        "max-lg": {max: '1023px'},
        "min-lg": {min: '1024px'},
        "max-xl": {max: '1279px'},
        "min-xl": {min: '1280px'},
        "max-2xl": {max: '1535px'},
        "min-2xl": {min: '1536px'},
        "max-sm": {max: '639px'},
        "min-sm": {min: '640px'},

      },
      colors:{
        primary: "white",
        darkprimary: "black",
        secondary:"rgb(96, 96, 96)",
        darksecondary:"rgb(200, 200, 200)",
        tertiary:"rgb(241 245 249 / 0.8)",
        darktertiary:"rgba(51, 51, 51, 0.8)",
        highlight:"white",
        darkhighlight:"black"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
})
