// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  devServer: {
    static: {
      // eslint-disable-next-line no-undef
      directory: path.join(__dirname, './build') // Specify the directory to serve content from
    },
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      // eslint-disable-next-line no-undef
      template: path.resolve(__dirname, 'public', 'index.html') // Path to your HTML template
    })
    // ... other plugins ...
  ]
};
