const Judge = require('./judge')
const Generator = require('./generator')

module.exports = {
  part1: () => {
    const judge = new Judge(new Generator(16807, 116), new Generator(48271, 299))
    return judge.run(40000000)
  },
  part2: () => {
    const judge = new Judge(new Generator(16807, 116, 4), new Generator(48271, 299, 8))
    return judge.runDiscriminatory(5000000)
  }
}
