const path = require('path');

module.exports = [
  {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'client_bundle.js'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /mode_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /mode_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typesript']
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /mode_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|ttf)$/i,
          type: 'asset/resource'
        }
      ]
    }
  }
];
