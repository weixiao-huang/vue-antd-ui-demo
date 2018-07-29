module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    'transform-vue-jsx',
    '@babel/transform-runtime',
    ['import', { libraryName: 'vue-antd-ui', libraryDirectory: 'es', style: 'css' }]
  ] 
};
