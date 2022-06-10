const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    port: 8080,
  },
  performance: {
    hints: false,
  },
};
