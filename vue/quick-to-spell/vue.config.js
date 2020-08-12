'use strict'

const name = process.env.npm_package_name // page title
const port = 4399 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-import')({}),
          //   require('postcss-write-svg')({ utf8: false }),
          require('postcss-px-to-viewport')({
            viewportWidth: 750, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines', 'van'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false // (Boolean) Allow px to be converted in media queries.
          }),
          require('autoprefixer')
          //   require('postcss-viewport-units')({}),
        ]
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name
  }
}
