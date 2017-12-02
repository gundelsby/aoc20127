function sum (digits) {
  return digits.reduce((sum, digit) => {
    return sum + Number.parseInt(digit)
  }, 0)
}

function massage (data) {
  const characters = data.split('')
  return {
    characters,
    length: characters.length
  }
}

module.exports = {
  /**
   * The captcha requires you to review a sequence of digits (your puzzle input)
   * and find the sum of all digits that match the next digit in the list. The
   * list is circular, so the digit after the last digit is the first digit in
   * the list.
   */
  sequential: (input) => {
    const {characters, length} = massage(input)
    const first = characters[0]
    const matchingDigits = characters.filter((digit, index) => {
      const nextDigit = index + 1 < length ? characters[index + 1] : first

      return digit === nextDigit
    })
    const result = sum(matchingDigits)

    return String(result)
  },
  /**
   * Now, instead of considering the next digit, it wants you to
   * consider the digit halfway around the circular list. That
   * is, if your list contains 10 items, only include a digit in
   * your sum if the digit 10/2 = 5 steps forward matches it.
   * Fortunately, your list has an even number of elements.
  */
  halfway: (input) => {
    const {characters, length} = massage(input)
    const offset = length / 2
    const matchingDigits = characters.filter((digit, index) => {
      const halfwayIndex = index - offset < 0 ? index + offset : index - offset
      return digit === characters[halfwayIndex]
    })
    const result = sum(matchingDigits)

    return String(result)
  }
}
