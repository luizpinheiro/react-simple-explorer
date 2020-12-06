const path = require('path')
const fs = require('fs')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const packageJson = JSON.parse(fs.readFileSync('package.json'))

module.exports = {
  entry: path.resolve(__dirname, 'src/lib/main.js'),
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'react-simple-explorer.js',
    library: 'reactSimpleExplorer',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject:  'this'
  },
  optimization: {
    runtimeChunk: false,
  },
  externals: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies)
  ],
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
              name: 'static/media/[name].[hash:8].[ext]',
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
  ]
}
