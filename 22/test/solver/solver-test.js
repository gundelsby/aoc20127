const solver = require('../../src/solver/solver')
const { assert } = require('../test-helper')

const testInput = `..#
#..
...`

describe('Solver', () => {
  describe('part 2', () => {
    it('should return 2511944 using test input', () => {
      const output = solver.part2(testInput, 10000000)

      assert.equals(output, 2511944)
    })
  })
})
