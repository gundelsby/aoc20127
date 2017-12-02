module.exports = (input) => {
  let smallest, highest
  const digits = input.split(/\s/)
  digits.forEach((char, index) => {
    const digit = Number.parseInt(char)

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
}
