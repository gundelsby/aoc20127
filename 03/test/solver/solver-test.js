const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('Part 1 (Sequential)', () => {
    // Data from square 1 is carried 0 steps, since it's at the access port.
    it('should return 0 for 1', () => {
      const input = 1
      const output = solver.sequential(input)

      assert.equals(output, 0)
    })

    it('should return 2 for 11', () => {
      const input = 11
      const output = solver.sequential(input)

      assert.equals(output, 2)
    })
    // Data from square 12 is carried 3 steps, such as: down, left, left.
    it('should return 3 for 12', () => {
      const input = 12
      const output = solver.sequential(input)

      assert.equals(output, 3)
    })

    it('should return 2 for 23', () => {
      const input = 23
      const output = solver.sequential(input)

      assert.equals(output, 2)
    })

    it('should return 31 for 1024', () => {
      const input = 1024
      const output = solver.sequential(input)

      assert.equals(output, 31)
    })
  })

  describe('Part 2 (stress)', () => {
    /**
     * Square 1 starts with the value 1.
     * Square 2 has only one adjacent filled square
     * (with value 1), so it also stores 1.
     * Square 3 has both of the above squares as neighbors
     * and stores the sum of their values, 2.
     * Square 4 has all three of the aforementioned squares
     * as neighbors and stores the sum of their values, 4.
     * Square 5 only has the first and fourth squares as
     * neighbors, so it gets the value 5.
     * Once a square is written, its value does not change.
     * Therefore, the first few squares would receive the following values:
     * 147  142  133  122   59
     * 304    5    4    2   57
     * 330   10    1    1   54
     * 351   11   23   25   26
     * 362  747  806--->   ...
     * 
     * What is the first value written that is larger than your
     * puzzle input?
     */
    it('it should return 2 for 1', () => {
      const input = 1
      const output = solver.stress(input)

      assert.equals(output, 2)
    })

    it('it should return 4 for 2', () => {
      const input = 2
      const output = solver.stress(input)

      assert.equals(output, 4)
    })

    it('it should return 5 for 4', () => {
      const input = 4
      const output = solver.stress(input)

      assert.equals(output, 5)
    })

    it('should return 10 for 5', () => {
      const input = 5
      const output = solver.stress(input)

      assert.equals(output, 10)
    })

    it('should return 26 for 25', () => {
      const input = 25
      const output = solver.stress(input)

      assert.equals(output, 26)
    })

    it('should return 806 for 747', () => {
      const input = 747
      const output = solver.stress(input)

      assert.equals(output, 806)
    })
  })
})
