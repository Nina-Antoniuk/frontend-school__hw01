const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './dist/main.js',
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    ],
  },
};
