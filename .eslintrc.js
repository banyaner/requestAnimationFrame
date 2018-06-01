module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  "env": {
    "node": true,
    "browser": true
  },
  // add your custom rules here
  'rules': {
    "import/newline-after-import": 1,
    "object-curly-spacing": 0,
    "no-alert": 0,
    "no-plusplus": 0,
    "no-param-reassign": 0,
    "max-len": 0,
    "new-cap": 0,
    "no-console": 0,
    "func-names": 0,
    "global-require": 0,
    "no-dynamic-require": 0, // 待删除
    "indent": [2, 4, {"SwitchCase": 1}],
    "no-underscore-dangle": 0,
    "no-mixed-operators":0,
    "no-unused-expressions": 0,
    'semi': [2, 'never'], //不加分号
    "prefer-template": 0,
    "no-trailing-spaces": 0,
    "no-restricted-syntax": 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
}
