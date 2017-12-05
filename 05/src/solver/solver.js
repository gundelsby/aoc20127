function escape (input, calcIncrement) {
  let index = 0
  let jumpCount = 0
  const instructions = input.map(char => Number.parseInt(char, 10))

  while (index < instructions.length) {
    const instruction = instructions[index]
    instructions[index] += calcIncrement(instruction)
    index += instruction
    jumpCount += 1
  }

  return jumpCount
}

module.exports = {
  escape: (input) => {
    return escape(input, instruction => 1)
  },
  escapeAgain: (input) => {
    return escape(input, (instruction) => {
      return instruction > 2 ? -1 : 1
    })
  }
}
