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
      // See
      // https://github.com/LukaPrebil/eslint-plugin-require-duplicate/issues/11
      // 'require-duplicate',
      'unused-imports'
    ],
    rules: {
      // Disabled for `unused-imports/no-unused-imports`
      '@typescript-eslint/no-unused-vars': 'off',
      'class-methods-use-this': 'error',
      'jsdoc/no-blank-block-descriptions': 'error',
      'jsdoc/no-blank-blocks': 'error',
      'jsdoc/require-asterisk-prefix': 'error',
      'jsdoc/sort-tags': ['warn', {
        tagSequence: [
          {
            // Brief descriptions
            tags: [
              'summary',
              'typeSummary'
            ]
          },
          {
            // Module/file-level
            tags: [
              'module',
              'exports',
              'file',
              'fileoverview',
              'overview'
            ]
          },
          {
            // Identifying (name, type)
            tags: [
              'typedef',
              'interface',
              'record',
              'template',
              'name',
              'kind',
              'type',
              'alias',
              'external',
              'host',
              'callback',
              'func',
              'function',
              'method',
              'class',
              'constructor'
            ]
          },
          {
            // Relationships
            tags: [
              'modifies',
              'mixes',
              'mixin',
              'mixinClass',
              'mixinFunction',
              'namespace',
              'borrows',
              'constructs',
              'lends',
              'implements',
              'requires'
            ]
          },
          {
            // Long descriptions
            tags: [
              'desc',
              'description',
              'classdesc',
              'tutorial',
              'copyright',
              'license'
            ]
          },
          {
            // Simple annotations
            tags: [
              'const',
              'constant',
              'final',
              'global',
              'readonly',
              'abstract',
              'virtual',
              'var',
              'member',
              'memberof',
              'memberof!',
              'inner',
              'instance',
              'inheritdoc',
              'inheritDoc',
              'override',
              'hideconstructor'
            ]
          },
          {
            // Important behavior details
            tags: [
              // Functions
              'async',
              'generator',
              'default',
              'defaultvalue',
              'enum',
              // Objects
              'augments',
              'extends',
              'event',
              'listens',
              'this'
            ]
          },
          {
            // Core function/object info
            tags: [
              // Functions
              'param',
              'arg',
              'argument',
              // Objects
              'prop',
              'property'
            ]
          },
          {
            tags: [
              // Generators
              'yield',
              'yields',
              // Functions
              'return',
              'returns',
              'throws',
              'exception',
              // Event emitters
              'fires',
              'emits'
            ]
          },
          {
            // Access
            tags: [
              'static',
              'private',
              'protected',
              'public',
              'access',
              'package',

              '-other'
            ]
          },
          {
            // Supplementary descriptions
            tags: [
              'see',
              'example'
            ]
          },
          // METADATA
          {
            // Other Closure (undocumented) metadata
            tags: [
              'closurePrimitive',
              'customElement',
              'expose',
              'hidden',
              'idGenerator',
              'meaning',
              'ngInject',
              'owner',
              'wizaction'
            ]
          },
          {
            // Other Closure (documented) metadata
            tags: [
              'define',
              'dict',
              'export',
              'externs',
              'implicitCast',
              'noalias',
              'nocollapse',
              'nocompile',
              'noinline',
              'nosideeffects',
              'polymer',
              'polymerBehavior',
              'preserve',
              'struct',
              'suppress',
              'unrestricted'
            ]
          },
          {
            // @homer0/prettier-plugin-jsdoc metadata
            tags: [
              'category'
            ]
          },
          {
            // Non-Closure metadata
            tags: [
              'ignore',
              'author',
              'version',
              'variation',
              'since',
              'deprecated',
              'todo'
            ]
          }
        ]
      }],
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
      // See
      // https://github.com/LukaPrebil/eslint-plugin-require-duplicate/issues/11
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
