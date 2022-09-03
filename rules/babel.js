/**
 * Common config
 */

 const getExtensionRules = require('./getExtensionRules')

 module.exports = {
   plugins: ['babel'],
   rules: getExtensionRules('babel', [
     'valid-typeof',
     'no-unused-expressions',
     'camelcase',
     'new-cap',
     'object-curly-spacing',
     'quotes',
     'semi',
   ]),
 }
 