const walker = require('./walker')

module.exports = {
  part1: (input) => {
    const target = walker.walk(input)
    return walker.findDistance(target)
  },
  part2: (input) => {
    return walker.longWalk(input)
  }
}
