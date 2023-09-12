const {es} = require('./common.js')


exports.overrides = [
  {
    ...es,
    extends: [
      'eslint:recommended'
    ]
  }
]
