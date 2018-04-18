// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // add your custom rules here
  'rules': {
    "semi": [2, "never"],
    "arrow-body-style": ["error", "always"],
    "operator-assignment": [0, "never"],
    "no-console": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "linebreak-style": 0,
    "no-undef": 0,
    "no-param-reassign": 0,
    "no-new": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
