const path = require('path');

module.exports = {
  mode: "production",
  entry: "./lib/main.js",
  devtool: "source-map",
  output: {
    filename: 'did-web-resolver.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'DIDWebResolver',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false
  }
};