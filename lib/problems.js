const {es, ts} = require('./common.js')


exports.overrides = [
  {
    extends: [
      'plugin:@cspell/recommended',
      'plugin:import/recommended',
      'plugin:n/recommended'
    ],
    files: ['*']
  },
  {
    ...es,
    extends: [
      'plugin:promise/recommended'
    ],
    plugins: [
      'import'
    ],
    rules: {
      'consistent-return': ['error', {treatUndefinedAsUnspecified: true}],
      'import/extensions': [
        // ESM spec requires extensions for all `import` statements, but
        // Typescript forbids them for Typescript files, see ts(2691) error.
        'error', 'ignorePackages', {ts: 'never', tsx: 'never'}
      ],
      'import/no-named-as-default': 'warn',
      // Disabled since it doesn't have support for `exports` field and already
      // overlaps with `n/no-missing-import` rule
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {order: 'asc'},
          'newlines-between': 'always',
          warnOnUnassignedImports: true
        }
      ],
      'import/prefer-default-export': 'warn',
      'no-param-reassign': 'off',  // NOTE: Opinionated
      'no-useless-catch': 'error',
      'promise/no-multiple-resolved': 'error'
    }
  },
  {
    ...ts,
    extends: [
      // Use the recommended rules from the `@typescript-eslint/eslint-plugin`
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:etc/recommended',
      'plugin:import/typescript'
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': ['error', {
        minimumDescriptionLength: 8,
        'ts-ignore': 'allow-with-description'
      }],
      '@typescript-eslint/no-shadow': 'error',
      // '@typescript-eslint/no-unsafe-argument': 'warn',
      // '@typescript-eslint/no-unsafe-assignment': 'warn',
      // '@typescript-eslint/no-unsafe-call': 'warn',
      // '@typescript-eslint/no-unsafe-member-access': 'warn',
      // '@typescript-eslint/no-unsafe-return': 'warn',
      'etc/no-enum': 'error',
      'etc/no-t': 'error',
      'etc/prefer-interface': 'warn',
      'etc/prefer-less-than': 'error',
      'etc/throw-error': 'error',
      'no-shadow': 'off'  // Disabled for `@typescript-eslint/no-shadow`
    }
  }
]
