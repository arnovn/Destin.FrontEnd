const config = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-bg': '#F1EFE7',
        'color-brown': '#8B4513',
        'color-pink': '#D96C75',
        'color-pink-hover': '#A05C55',
        'color-blue': '#B0C4C8',
        'color-broken-white': '#F5F5F5',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'], // Custom font
      },
      spacing: {
        large: '6rem',
        medium: '4rem',
      },
    },
  },
  plugins: [],
};

export default config;
