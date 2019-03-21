const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const commonStyleLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      // ident: 'postcss',
      plugins: [
        require('autoprefixer')({
          browsers: [
            '> 1%',
            'last 2 versions',
            'ie 9-10'
          ]
        })
      ]
    }
  }
]

module.exports = {
  entry: {
    'index': path.resolve(__dirname, 'index.js'),
    'preview-edit': path.resolve(__dirname, 'preview-edit.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          ...commonStyleLoaders,
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: commonStyleLoaders
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  }
}
