const banker = require('../../src/solver/banker')
const {assert, refute} = require('../test-helper')

describe('Banker', () => {
  describe('circulate', () => {
    const circulate = banker.circulate

    it('should return [2, 4, 1, 2] for [0, 2, 7, 0]')
    const input =  [0, 2, 7, 0]
    const output = circulate(input)

    assert.equals(output, [2, 4, 1, 2])
  })
})
