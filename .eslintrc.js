
const eslint = require('@mafalda-sfu/eslint-config/eslint-recommended')
const format = require('@mafalda-sfu/eslint-config/format')
const problems = require('@mafalda-sfu/eslint-config/problems')
const {all} = require('deepmerge')


module.exports = all([eslint, format, problems]) // Problems override format
