const {es, ts} = require('./common.js')


exports.overrides = [
  {
    extends: [
      'plugin:editorconfig/all'
    ],
    files: ['*'],
    plugins: [
      'editorconfig'
    ],
    rules: {
      'editorconfig/indent': ['error', {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral'],
        offsetTernaryExpressions: true
      }],
      'editorconfig/max-len': ['warn', {
        // Ignore comment lines that pass the max length limit that have just
        // only an URL, or an `import` statement without comments nor named
        // exports. See https://github.com/eslint/eslint/issues/15928
        ignorePattern: '^\\s*((//|/\\*|\\*)?\\s*\\S*[^:/?#]://[^?#]\\S*\\s*$|' +
          '^import\\s([^\\{]|//|/\\*)+)'
      }],
      'no-tabs': 'error'
    }
  },
  {
    ...es,
    extends: [
      'plugin:@mafalda-sfu/layout'
    ],
    plugins: [
      'sort-destructure-keys',
      'sort-keys'
    ],
    rules: {
      '@mafalda-sfu/brace-style': [
        'error', 'allman-multiline', {allowSingleLine: true}
      ],
      'array-bracket-spacing': 'error',
      'arrow-body-style': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'comma-dangle': 'error',
      curly: ['error', 'multi'],
      'function-paren-newline': ['error', 'consistent'],
      'max-classes-per-file': 'error',
      'newline-per-chained-call': 'warn',
      'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 1, maxEOF: 0}],
      'object-curly-newline': ['error', {consistent: true, multiline: true}],
      'object-curly-spacing': 'error',
      'one-var': ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single', {avoidEscape: true}],
      semi: ['error', 'never'],
      'semi-spacing': 'error',
      'semi-style': 'error',
      'sort-destructure-keys/sort-destructure-keys': 'error',
      'sort-keys': 'off',  // Disabled for `sort-keys-fix`
      'sort-keys/sort-keys-fix': ['error', 'asc', {natural: true}]
    }
  },
  {
    ...ts,
    extends: [
      'plugin:jsdoc/recommended-typescript',
      'plugin:typescript-sort-keys/recommended'
    ],
    rules: {
      '@typescript-eslint/object-curly-spacing': 'error',
      // Disabled for `@typescript-eslint/object-curly-spacing`
      'object-curly-spacing': 'off'
    }
  },
  {
    extends: [
      'plugin:json/recommended'
    ],
    files: ['*.json']
  },
  {
    extends: [
      'plugin:package-json/recommended'
    ],
    files: ['package.json'],
    plugins: [
      'package-json'
    ],
    rules: {
      'package-json/order-properties': ['error', [
        'name',
        'version',
        'private',
        'workspaces',
        'publishConfig',
        'description',
        'type',
        'main',
        'exports',
        'browser',
        'files',
        'bin',
        'man',
        'directories',
        'scripts',
        'repository',
        'keywords',
        'author',
        'contributors',
        'funding',
        'license',
        'bugs',
        'homepage',
        'config',
        'dependencies',
        'devDependencies',
        'peerDependencies',
        'optionalDependencies',
        'bundledDependencies',
        'overrides',
        'engineStrict',
        'engines',
        'os',
        'cpu'
      ]]
    }
  }
]
