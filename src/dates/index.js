// import moment here; use this package in each function
const moment = require('moment')

// Note: moment() returns the current date
// could save in variable, i.e., const x = moment()

const today = () => {
  // write code for dates.today

  return moment().format('dddd')
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A');
}

// make the functions available globally as a property on this anonymous object
// i.e. if you imported & assigned the module to a variable `anonymousObject` (using require), you could do anonymousObject.today 
module.exports = {
  today,
  calendar,
  currentTime
}