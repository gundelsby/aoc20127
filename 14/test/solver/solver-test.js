const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  const key = 'flqrgnkx'
  const unit = solver(key, 128)

  describe('part1', () => {
    it('should return 8108 for flqrgnkx', () => {
      const expected = 8108

      assert.equals(unit.part1(), expected)
    })
  })

  describe('part2', () => {
    it('should return 1242 for flqrgnkx', () => {
      const expected = 1242

      assert.equals(unit.part2(), expected)
    })
  })
})
