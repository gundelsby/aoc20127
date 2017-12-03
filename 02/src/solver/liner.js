function getDigits (chars) {
  return chars.split(/\s/).map((char) => {
    return Number.parseInt(char)
  })
}

function getHighLow (a, b) {
  return {
    high: a > b ? a : b,
    low: a > b ? b : a
  }
}

module.exports = {
  highLow: (input) => {
    let smallest, highest
    const digits = getDigits(input)
    digits.forEach((digit, index) => {
      if (index === 0) {
        smallest = digit
        highest = digit
      } else {
        if (digit < smallest) {
          smallest = digit
        }

        if (digit > highest) {
          highest = digit
        }
      }
    })

    return highest - smallest
  },
  /**
   * It sounds like the goal is to find the only two numbers in
   * each row where one evenly divides the other - that is, where
   * the result of the division operation is a whole number.
   * They would like you to find those numbers on each line,
   * divide them, and add up each line's result.
   */
  evenSteven: (input) => {
    const digits = getDigits(input)
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length; j++) {
        if (i !== j) {
          const {high, low} = getHighLow(digits[i], digits[j])
          if (high % low === 0) {
            return high / low
          }
        }
      }
    }

    return -1
  }
}
