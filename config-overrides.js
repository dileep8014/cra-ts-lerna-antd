const {
  override,
  fixBabelImports,
  addBundleVisualizer,
} = require("customize-cra");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const addCompression = () => config => {
  if (isProd) {
    config.devtool = false;
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        test: /\.(css|js|html)$/,
        // 只处理比1kb大的资源
        threshold: 10240,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9,
      })
    );
  }
  return config;
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }),
    addCompression(),
    addBundleVisualizer(),
  ),
};
