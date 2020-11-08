const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        // body: ['Amatic SC'],
        playfair: ['Playfair Display SC']
        // jacues: ['Jacques Francois Shadow']
      },
      colors: {
        'royal-yellow': '#ab965d',
        'royal-sand': '#faffd0'
      },
      fill: theme => ({
        white: theme('colors.white')
      })
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          cursor: 'pointer'
        },
        '.btn-info': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          }
        },
        '.btn-error': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          }
        },
        '.btn-success': {
          backgroundColor: '#68D391',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#38A169'
          }
        },
        '.btn-primary': {
          backgroundColor: '#E2E8F0',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#A0AEC0'
          }
        }
      }

      addComponents(buttons)
    })
  ]
}
