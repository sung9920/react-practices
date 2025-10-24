const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "assets/js/main.js",
    assetModuleFilename: "assets/images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i, // SCSS, SASS, CSS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|gif|jpe?g|svg|ico|tif?f|bmp)$/i, // 이미지 파일
        type: "asset/resource",
      },
      {
        test: /\.js/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    liveReload: true,
    compress: true,
    hot: false,
  },
};
