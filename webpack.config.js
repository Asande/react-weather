const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  devtool: isDev && 'eval',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].[name].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: [
                isDev && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      OPEN_WEATHER_API_KEY: JSON.stringify(openWeatherApiKey),
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public', to: './' },
      ],
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: !isDev ? {
    splitChunks: {
      chunks: 'all',
    },
  } : undefined,
}
