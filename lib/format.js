
const layout = require('@mafalda-sfu/eslint-config/layout')
const suggestions = require('@mafalda-sfu/eslint-config/suggestions')
const merge = require('deepmerge')


module.exports = merge(layout, suggestions) // Suggestions override layout
