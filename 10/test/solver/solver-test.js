const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('Part 1', () => {
    it('should return 12 for a five element list using input [3, 4, 1, 5]', () => {
      const input = [3, 4, 1, 5]
      const output = solver.part1(input, 5)

      assert.equals(output, 12)
    })
  })
})
