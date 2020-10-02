module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'standard',
    'plugin:vue/recommended'
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'vue/html-quotes': ['error', 'single'],
    'vue/singleline-html-element-content-newline': 'off',
    semi: [
      'error',
      'never'
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state'
        ]
      }
    ]
  }
}
