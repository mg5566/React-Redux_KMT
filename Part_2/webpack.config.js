const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // dev server
  devServer: {
    compress: true,
    port: 9999,
  },

  // module
  module: {
    rules: [
      {
        test: /\.js$/, // file type
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // preset
          },
        },
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "2.3 setup webpack & babel",
      template: "index.html",
    }),
  ],
};
