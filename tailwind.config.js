module.exports = {
  theme: {
    screens: {
      // breakpoints from Bootstrap
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      // generate palettes at https://materialpalettes.com/
      primary: {
        '50': '#e7eaf7',
        '100': '#c2c9ea',
        '200': '#99a6dc',
        '300': '#6f84cf',
        '400': '#4e69c5',
        '500': '#264fbb',
        '600': '#1f47b1',
        '700': '#113da5',
        '800': '#003399',
        '900': '#002185',
        default: '#003399', // 800
      },
      secondary: {
        '50': '#e3f4ea',
        '100': '#bae4cc',
        '200': '#8cd2ac',
        '300': '#58c28b',
        '400': '#23b573',
        '500': '#00a85b',
        '600': '#009951',
        '700': '#008745',
        '800': '#007639',
        '900': '#005725',
        default: '#23b573', // 400
      },
      grey: {
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {},
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
