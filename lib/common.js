const ecmaVersion = 2022  // Node.js 16


exports.es = {
  env: {
    [`es${ecmaVersion}`]: true
  },
  files: ['*.[jt]s?(x)'],
  parserOptions: {
    babelOptions: {configFile: './.babelrc'},
    ecmaVersion,
    sourceType: 'module'  // Allows for the use of imports
  }
}

exports.ts = {
  files: ['*.ts?(x)'],
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig*.json'
  }
}
