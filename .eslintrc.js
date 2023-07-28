
const format = require('@mafalda-sfu/eslint-config/format')
const problems = require('@mafalda-sfu/eslint-config/problems')
const merge = require('deepmerge')


module.exports = merge(format, problems) // Problems override format
