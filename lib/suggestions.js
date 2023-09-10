const {es, ts} = require('./common.js')


exports.overrides = [
  {
    ...es,
    extends: [
      'plugin:@mafalda-sfu/suggestions',
      'plugin:jsdoc/recommended',
      'plugin:markdown/recommended'
    ],
    plugins: [
      'n',
      // See https://github.com/LukaPrebil/eslint-plugin-require-duplicate/issues/11
      // 'require-duplicate',
      'unused-imports'
    ],
    rules: {
      // Disabled for `unused-imports/no-unused-imports`
      '@typescript-eslint/no-unused-vars': 'off',
      'class-methods-use-this': 'error',
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'no-console': 'error',
      'no-extra-boolean-cast': 'error',
      'no-nested-ternary': 'warn',
      'no-new': 'warn',
      'no-plusplus': 'warn',
      'no-shadow': 'warn',
      'no-undef-init': 'error',
      'no-unused-private-class-members': 'error',
      // Disabled for `unused-imports/no-unused-imports`
      'no-unused-vars': 'off',
      'no-useless-escape': 'error',
      'no-void': ['error', {allowAsStatement: true}],
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true
        },
        {
          enforceForRenamedProperties: true
        }
      ],
      // See https://github.com/LukaPrebil/eslint-plugin-require-duplicate/issues/11
      // 'require-duplicate/no-duplicate': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    ...ts,
    extends: [
      'plugin:@mafalda-sfu/suggestions-typescript',
      'plugin:jsdoc/recommended-typescript'
    ]
  }
]
