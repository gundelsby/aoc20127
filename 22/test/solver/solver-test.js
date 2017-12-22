const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

const testInput = `..#
#..
...`

describe('Solver', () => {
  describe('part1', () => {
    // After a total of 10000 bursts of activity, 5587 bursts will have caused an infection.
    it('should return 5587 using test input', () => {
      const output = solver.part1(testInput)

      assert.equals(output, 5587)
    })
  })
})
