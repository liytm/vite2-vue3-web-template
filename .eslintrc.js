module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  globals: {
      defineEmits: 'readonly',
      defineProps: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier' // 必须放最后，用于关闭和eslint冲突规则
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off']
  }
}
