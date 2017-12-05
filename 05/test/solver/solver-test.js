const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('escape()', () => {
    it('should return 5 for [\'0\', \'3\',  \'0\',  \'1\',  \'-3\']', () => {
      const input = ['0', '3', '0', '1', '-3']
      const output = solver.escape(input)

      assert.equals(output, 5)
    })
  })

  describe('escapeAgain()', () => {
    it('should return 10 for [\'0\', \'3\',  \'0\',  \'1\',  \'-3\']', () => {
      const input = ['0', '3', '0', '1', '-3']
      const output = solver.escapeAgain(input)

      assert.equals(output, 10)
    })
  })
})
