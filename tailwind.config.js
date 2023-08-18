/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothamssm': ['Gotham', 'sans-serif']
      },
      backgroundImage: {
        primaryLinear: 'radial-gradient(54.97% 272.54% at 27.36% -134.72%,rgba(108,148,255,.92) 0,rgba(0,0,0,.92) 100%)',
      },

    },
  },
  plugins: [],
}

