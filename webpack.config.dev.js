import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const ExtractVendorCss = new ExtractTextPlugin('styles/vendor.css');
const paths = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};
const CircularDependencyPlugin = require('circular-dependency-plugin');

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.scss']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/webpack-public-path',
    'react',
    'react-dom',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      // load es6/jsx
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader'
      },

      // load fonts
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=./fonts/[name].[ext]'
      },

      // load images
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },

      // load favicon
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },

      // load styles
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap']
      },

      // load app styles - include only css from source
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap'],
        include: paths.src
      },

      // load vendor styles - exclude css from source
      {
        test: /\.css$/,
        use: ExtractVendorCss.extract(['css-loader?sourceMap']),
        exclude: paths.src
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ExtractVendorCss,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        },
        context: '/'
      }
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp 
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings 
      failOnError: true
    }),
    new webpack.ProvidePlugin({})
  ]
};