module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    ['postcss-preset-env', { browsers: 'last 2 versions' }],
  ],
}
