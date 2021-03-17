const colors = require('./tailwind/colors')

module.exports = {
    purge: [
      'components/**/*.js',
      'pages/**/*.js',
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['"Open Sans"'],
            'display': ['Oswald'],
            'body': ['"Open Sans"']
        },
        colors: colors
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('tailwindcss-children'),
    ],
}