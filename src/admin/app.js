import favicon from './extensions/favicon.ico';

export default {
  config: {
      head: {
          favicon: favicon,
      },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f3eddf",
          primary200: "#e0c1f4",
          primary500: "#f55926",
          primary600: "#f55926",
          primary700: "#F55926",
          danger700: "#b72b1a",
            buttonPrimary500:"#f55926",
            buttonPrimary600: "#f55926",
        },
      },

      // overwrite dark theme properties
      dark: {
        colors: {
          primary100: '#FF5400',
          primary200: '#FF5400',
          primary500: '#FF5400',
          primary600: '#60bdb2',
          primary700: '#0a7a7f',
          danger700: "#b72b1a",
        },
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: {releases: false},
  },
  bootstrap() {
  },
};
