const numbers = require('./numbers')
const strings = require('./strings')
const dates = require('./dates')

// make the functions available globally as a property on this anonymous object
// i.e. if you imported & assigned the module to a variable `anonymousObject` (using require), you could do anonymousObject.numbers 
module.exports = {
  numbers,
  strings,
  dates
}