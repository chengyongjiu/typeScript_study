module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',
  ],
  parserOptions:{"parser":"@typescript-eslint/parser"},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript'
  ],
  rules:{
    "import/no-unresolved": [2, {commonjs: true, amd: true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2
  }
};