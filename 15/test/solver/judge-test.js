const Judge = require('../../src/solver/judge')
const Generator = require('../../src/solver/generator')

const {assert, refute} = require('../test-helper')

describe('Judge', () => {
  describe('Using generator pair {factor 16807, initial 65} {factor 48271, initial 8921}', () => {
    let judge, genA, genB

    beforeEach(() => {
      genA = new Generator(16807, 65)
      genB = new Generator(48271, 8921)
      judge = new Judge(genA, genB)
    })

    it('should have found 1 match after 5 generated pairs', () => {
      const output = judge.run(5)

      assert.match(output, {
        matches: 1
      })
    })
  })
})
