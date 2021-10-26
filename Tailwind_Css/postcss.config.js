//postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  //Specify the paths to all of template files in your project
  content: [
    './src/*.html'
    // etc.
  ],

  // Includes any special characters you're using in this regular expressions
  defaultExtractor: content => content.match(/[\w-/:]+(?:<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    purgecss,
    require('cssnano'),
    require('autoprefixer')
  ]
}
