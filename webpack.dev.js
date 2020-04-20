const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const WebpackMessages = require('webpack-messages');
const APP_ID = process.env.npm_package_name;
const VERSION = process.npm_package_version;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: `${APP_ID}.js`
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src']
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    overlay: {
      errors: true,
    },
    open: true,
    inline: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    publicPath: `/`,
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.tsx$/, loader: 'source-map-loader' },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify('DEV'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html.ejs'),
      title: APP_ID,
      __ENV__: 'DEV',
    }),
    new ErrorOverlayPlugin(),
    new WebpackMessages({
      name: APP_ID,
      // tslint:disable-next-line
      logger: str => console.error(`>> ${str}`),
    }),
  ]
};
