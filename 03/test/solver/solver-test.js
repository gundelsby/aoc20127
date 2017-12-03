const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('Part 1 (Spiral)', () => {
    // Data from square 1 is carried 0 steps, since it's at the access port.
    it('should return 0 for 1', () => {
      const input = 1
      const output = solver.spiral(input)

      assert.equals(output, 0)
    })

    it('should return 2 for 11', () => {
      const input = 11
      const output = solver.spiral(input)

      assert.equals(output, 2)
    })
    // Data from square 12 is carried 3 steps, such as: down, left, left.
    it('should return 3 for 12', () => {
      const input = 12
      const output = solver.spiral(input)

      assert.equals(output, 3)
    })

    it('should return 2 for 23', () => {
      const input = 23
      const output = solver.spiral(input)

      assert.equals(output, 2)
    })

    it('should return 31 for 1024', () => {
      const input = 1024
      const output = solver.spiral(input)

      assert.equals(output, 31)
    })
  })
})
