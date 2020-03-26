module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'no-console': 'error',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'no-dupe-class-members': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', require('./.prettierrc.json'), { "usePrettierrc": false }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  globals: {
    process: true,
    module: true,
    app: true,
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },
}
