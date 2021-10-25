module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'no-param-reassign': 'off',
    // 'no-void': 'off',
    // 'no-nested-ternary': 'off',
    // 'max-classes-per-file': 'off',
    // 'import/first': 'off',
    // 'import/named': 'error',
    // 'import/namespace': 'error',
    // 'import/default': 'error',
    // 'import/export': 'error',
    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/prefer-default-export': 'off',
    // 'prefer-promise-reject-errors': 'off',
    'no-console': 'off',
  },
};
