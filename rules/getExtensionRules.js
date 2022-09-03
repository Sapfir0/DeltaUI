const commonRules = require('./common').rules
const es6Rules = require('./es6').rules

const rules = {
  ...commonRules,
  ...es6Rules,
}

module.exports = (prefix, extensionNames) => extensionNames.reduce(
  (extensionRules, name) => ({
    ...extensionRules,
    [name]: 'off',
    [`${prefix}/${name}`]: rules[name],
  }),
  {}
)
