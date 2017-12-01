/**
 * The captcha requires you to review a sequence of digits (your puzzle input)
 * and find the sum of all digits that match the next digit in the list. The
 * list is circular, so the digit after the last digit is the first digit in
 * the list.
 */
module.exports = (input) => {
  const characters = input.split('')
  const length = characters.length
  const first = characters[0]
  const matchingDigits = characters.filter((digit, index) => {
    const nextDigit = index + 1 < length ? characters[index + 1] : first

    return digit === nextDigit
  })
  const result = matchingDigits.reduce((sum, digit) => {
    return sum + Number.parseInt(digit)
  }, 0)

  return String(result)
}
