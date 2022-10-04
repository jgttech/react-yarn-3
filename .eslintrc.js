module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  ignorePatterns: [
    '**/node_modules',
    '**/_dist',
    '**/*.json',
    '**/*.config.json',
    '**/*.js'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './apps/*/tsconfig.json',
      './packages/*/tsconfig.json',
      './plugins/*/tsconfig.json'
    ],
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript'
  ],
  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': [2, 'as-needed'],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/ban-types': [2, {
      extendDefaults: true,
      types: {
        '{}': false
      }
    }]
  }
}
