const banker = require('../../src/solver/banker')
const {assert, refute} = require('../test-helper')

describe('Banker', () => {
  describe('circulate', () => {
    const circulate = banker.circulate

    it('should return [2, 4, 1, 2] for [0, 2, 7, 0]', () => {
      const input = [0, 2, 7, 0]
      const output = circulate(input)

      assert.equals(output, [2, 4, 1, 2])
    })

    it('should return [3, 1, 2, 3] for [2, 4, 1, 2]', () => {
      const input = [2, 4, 1, 2]
      const output = circulate(input)

      assert.equals(output, [3, 1, 2, 3])
    })

    it('should return [0, 2, 3, 4] for [3, 1, 2, 3]', () => {
      const input = [3, 1, 2, 3]
      const output = circulate(input)

      assert.equals(output, [0, 2, 3, 4])
    })
  })
})
