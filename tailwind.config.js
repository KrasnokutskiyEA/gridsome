const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Amatic SC']
      },
      colors: {
        'royal-red': '#ad0000'
      }
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
