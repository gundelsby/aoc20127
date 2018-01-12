const hasher = require('./hasher')

module.exports = (input) => {
  return {
    part1: (rows) => {
      const hashes = [...Array(rows)].map((cell, index) => {
        return hasher(input + '-' + index)
      })

      return hashes.reduce((sum, hash) => {
        return sum + hash.split('').reduce((lsum, digit) => {
          const positiveBitCount = parseInt(digit, 16).toString(2).split('').filter(x => x === '1').length
          return lsum + positiveBitCount
        }, 0)
      }, 0)
    },
    part2: () => {
      return null
    }
  }
}
