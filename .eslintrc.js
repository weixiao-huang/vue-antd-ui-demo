module.exports = {
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
