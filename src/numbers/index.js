const isEven = (num) => {
  // write code for numbers.isEven

  if (num % 2 === 0) {
    return true
  } else {
    return false
  }

}

const sum = (arr) => {
  // write code for numbers.sum

  return arr.reduce( (accum, sum) => accum + sum )
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

    // Helper function to check combinations
    function checkCombination(index, currentSum) {
      // Base case: if the current sum equals the target sum
      if (currentSum === sum) {
        return true;
      }
  
      // Base case: if we've checked all elements or the current sum exceeds the target
      if (index >= arr.length || currentSum > sum) {
        return false;
      }
  
      // Include the current element and check
      if (checkCombination(index + 1, currentSum + arr[index])) {
        return true;
      }
  
      // Exclude the current element and check
      if (checkCombination(index + 1, currentSum)) {
        return true;
      }
  
      // If none of the above combinations worked
      return false;
    }
  
    // Start checking combinations from the first index and a sum of 0
    return checkCombination(0, 0);
}


// make the functions available globally as a property on this anonymous object
// i.e. if you imported & assigned the module to a variable `anonymousObject` (using require), you could do anonymousObject.isEven 

module.exports = {
  isEven,
  sum,
  comboSum
}