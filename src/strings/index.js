const split = (str, delim) => {
  // write code for strings.split

  return str.split(delim)

}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = []
  
  for (let i = 0; i < str.length; i++) {
    if ( i % 2 === 0 ) {
      let arrayIndex = i / 2
      arr[arrayIndex] = str[i] 
    } else {
      let arrayIndex = (i - 1) / 2
      arr[arrayIndex] = arr[arrayIndex] + str[i]
    }
  }

  return arr
}

const reverse = (str) => {
  // write code for strings.reverse

  const arr = str.split('')
  const reversedArr = arr.reverse()
  return reversedArr.join('')

}

// make the functions available globally as a property on this anonymous object
// i.e. if you imported & assigned the module to a variable `anonymousObject` (using require), you could do anonymousObject.split 
module.exports = {
  split,
  pairs,
  reverse
}