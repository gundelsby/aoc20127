const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')



describe('Solver', () => {
  const testInput = ['0/2', '2/2', '2/3', '3/4', '3/5', '0/1', '10/1', '9/10']
  describe('Part 1', () => {
    it('should return 31 using test input', () => {
      const output = solver.part1(testInput)

      assert.equals(output, 31)
    })
  })

  describe('Part 2', () => {
    it('should return 19 using test input', () => {
      const output = solver.part2(testInput)

      assert.equals(output, 19)
    }) 
  })
})
