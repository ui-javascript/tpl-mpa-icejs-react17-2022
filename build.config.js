// import getEntry from './mpa.utils'
// const CONFIG = require('./mpa.config')

// const mpaConfig = getEntry(CONFIG.entry);
// console.log(mpaConfig)

module.exports = {
  define: {
    env: process.env.NODE_ENV,
  },
  minify: 'esbuild',
  entry: {
    demo: '_demo/index',
  },
  outputDir: 'docs',
  plugins: [
    [
      'build-plugin-ignore-style',
      {
        libraryName: 'antd',
      },
    ],
  ],
};
