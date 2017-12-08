const evaluator = require('../../src/solver/evaluator')
const {assert, refute} = require('../test-helper')

describe('Evaluator', () => {
  describe('evaluate', () => {
    const evaluate = evaluator.evaluate
    it('should return true for 1 > 0', () => {
      const input = '1 > 0'
      const output = evaluate(input)

      assert(output)
    })

    it('should return false for 1 < 0', () => {
      const input = '1 < 0'
      const output = evaluate(input)

      refute(output)
    })

    it('should return true for 1 == 1', () => {
      const input = '1 == 1'
      const output = evaluate(input)

      assert(output)
    })

    it('should return true for 1 <= 1', () => {
      const input = '1 <= 1'
      const output = evaluate(input)

      assert(output)
    })

    it('should swap first register address for register value', () => {
      const address = 'a'
      const registerValue = 5
      const input = `${address} == 5`
      const output = evaluate(input, (addr) => addr === address ? registerValue : null)

      assert(output)
    })

    it('should swap second register address for register value', () => {
      const address = 'b'
      const registerValue = 4
      const input = `3 < ${address}`
      const output = evaluate(input, (addr) => addr === address ? registerValue : null)

      assert(output)
    })
  })
})
