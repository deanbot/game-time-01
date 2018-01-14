import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export const getWebpackProdConfig = (nodeEnv, outputDir) => {
  nodeEnv = JSON.stringify(nodeEnv || 'production'),
    outputDir = outputDir || '/dist';

  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
  };

  const ExtractVendorCss = new ExtractTextPlugin('styles/vendor.css');
  const ExtractAppCss = new ExtractTextPlugin('styles/main.css');
  const paths = {
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist')
  };

  return {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.scss']
    },
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index'),
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
          use: 'file-loader?name=fonts/[name].[ext]'
        },

        // load images
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: 'file-loader?name=images/[name].[ext]'
        },

        // load favicon
        { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },

        // load app sass styles
        {
          test: /\.(sass|scss)$/,
          use: ExtractAppCss.extract({
            use: ['css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'],
            publicPath: outputDir + '/'
          }),
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
      new webpack.DefinePlugin(GLOBALS),

      ExtractAppCss,
      ExtractVendorCss,

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        inject: true
      }),

      // Minify JS
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: false,
        noInfo: true, // set to false to see a list of every file being bundled.
        options: {
          sassLoader: {
            includePaths: [path.resolve(__dirname, 'src', 'scss')]
          },
          context: '/'
        }
      }),

      new webpack.ProvidePlugin({})
    ]
  };
};

export default getWebpackProdConfig(); 