const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  it('should solve testcase', () => {
    const input = ['b inc 5 if a > 1', 'a inc 1 if b < 5', 'c dec -10 if a >= 1', 'c inc -20 if c == 10']
    const output = solver.findMaxRegisterValue(input)

    assert.equals(output, 1)
  })
})