const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('part 1', () => {
    it('should return 6 for [0 <-> 2, 1 <-> 1, 2 <-> 0, 3, 4, 3 <-> 2, 4, 4 <-> 2, 3, 6, 5 <-> 6, 6 <-> 4, 5]', () => {
      const input = ['0 <-> 2', '1 <-> 1', '2 <-> 0, 3, 4', '3 <-> 2, 4', '4 <-> 2, 3, 6', '5 <-> 6', '6 <-> 4, 5']
      const output = solver.part1(input, '0')

      assert.equals(output, 6)
    })
  })

  describe('part 2', () => {
    it('should return 2 for [0 <-> 2, 1 <-> 1, 2 <-> 0, 3, 4, 3 <-> 2, 4, 4 <-> 2, 3, 6, 5 <-> 6, 6 <-> 4, 5]', () => {
      const input = ['0 <-> 2', '1 <-> 1', '2 <-> 0, 3, 4', '3 <-> 2, 4', '4 <-> 2, 3, 6', '5 <-> 6', '6 <-> 4, 5']
      const output = solver.part2(input)

      assert.equals(output, 2)
    })
  })
})
