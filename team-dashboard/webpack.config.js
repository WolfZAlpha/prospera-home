const { override, addWebpackAlias, adjustStyleLoaders, addBabelPlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
    css.options.sourceMap = true;
    postcss.options.sourceMap = true;
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.sourceMap = true;
    }
  }),
  addBabelPlugin([
    'babel-plugin-import',
    {
      libraryName: '@material-ui/core',
      libraryDirectory: 'esm',
      camel2DashComponentName: false
    },
    'core'
  ]),
  (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      name: false,
    };
    config.optimization.runtimeChunk = 'single';
    return config;
  }
);