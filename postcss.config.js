module.exports = {
  plugins: {
    tailwindcss: {},
    // 移动端适配方案
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    // "cnjm-postcss-px-to-viewport": {
    // unitToConvert: 'px', // 要转化的单位
    //   viewportWidth: 375, // 根据设计稿设定
    //   minPixelValue: 1, // 最小的转换数值
    //   unitPrecision: 2 // 转化精度，转换后保留位数
    // },
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
    },
  },
};
