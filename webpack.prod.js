const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackMessages = require('webpack-messages');
const APP_ID = process.env.npm_package_name;
const VERSION = process.npm_package_version;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: `${APP_ID}.js`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify('PROD'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html.ejs'),
      title: APP_ID,
      __ENV__: 'PROD',
    }),
    new WebpackMessages({
      name: APP_ID,
      // tslint:disable-next-line
      logger: str => console.error(`>> ${str}`),
    }),
  ],
};
