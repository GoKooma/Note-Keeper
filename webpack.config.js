const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "./client/src/index.jsx"), // where we want to transpile
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  mode: "development", // it tells that it will only transpile "production" changes
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/, // forward slash blahblah and forward slash tells us regex
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  resolve: { // for importing and exporting, if extensions are not attached it checks for those extensions
    extensions: ['.js', 'jsx']
  }
};