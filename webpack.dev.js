const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            exclude: /node_modules/,
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          },
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      inject: true,
      template: 'sample/index.html'
    }),
    new CaseSensitivePathsPlugin(),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['js', 'ts', 'jsx', 'tsx'],
      fix: true
    })
  ]
}
