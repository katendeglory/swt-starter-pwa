module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-white": "#f2f2f2",
        "brand-orange": "#F4A261",
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
