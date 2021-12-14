const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {

}, {
  theme: {
    extend: {
		colors: {
			themes: {
				default: '#8466c2',
				second: '#5a5c6b'
			}
		}
	},
  }
})
