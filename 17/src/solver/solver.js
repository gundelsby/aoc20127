const Spinner = require('./spinner')

module.exports = {
  part1: (input) => {
    const spinner = new Spinner({stepSize: input})
    for (let i = 0; i < 2017; i++) {
      spinner.spin()
    }

    return spinner.buffer[spinner.position + 1 < spinner.buffer.length ? spinner.position + 1 : 0]
  },
  part2: (input) => {
    // What is the value after 0 the moment 50000000 is inserted?
    const spinner = new Spinner({stepSize: input})
    let zeroIndex = 0
    let afterZero = null

    for (let i = 1; i < 50000000; i++) {
      spinner.move(i)

      if (spinner.position === zeroIndex) {
        afterZero = i
      }

      if (spinner.position === zeroIndex - 1) {
        zeroIndex++
      }

      spinner.position++
    }

    return afterZero
  }
}
