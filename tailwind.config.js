/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        top: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-80px)',
          },
          '100%': {
            opacity: 1, 
            transform: 'translateX(0)',
          },
        },

        left: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-80px)',
          },
          '100%': {
            opacity: 1, 
            transform: 'translateX(0)',
          },
        },

        load: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1, 
            transform: 'scale(1)',
          },
        }

      },

      animation: {
        top: 'top .5s ease 0s 1 normal forwards',
        left: 'left .5s ease 0s 1 normal forwards',
        load: 'load .5s ease 0s 1 normal forwards',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
