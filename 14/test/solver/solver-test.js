const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('part1', () => {
    it('should return 8108 for flqrgnkx', () => {
      const expected = 8108
      const key = 'flqrgnkx'

      assert.equals(solver(key).part1(128), expected)
    })
  })
})
