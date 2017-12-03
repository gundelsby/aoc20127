/**
 * 5 1 9 5
 * 7 5 3
 * 2 4 6 8
 * The first row's largest and smallest values are 9 and 1, and their difference is 8.
 * The second row's largest and smallest values are 7 and 3, and their difference is 4.
 * The third row's difference is 6.
 */
const liner = require('../../src/solver/liner')
const { assert, refute } = require('../test-helper')

describe('Liner', () => {
  describe('highLow', () => {
    it('Should return 8 for input 5 1 9 5', () => {
      const input = '5 1 9 5'
      const output = liner.highLow(input)

      assert.equals(output, 8)
    })

    it('should return 4 for 7 5 3', () => {
      const input = '7 5 3'
      const output = liner.highLow(input)

      assert.equals(output, 4)
    })

    it('should return 6 for 2 4 6 8', () => {
      const input = '2 4 6 8'
      const output = liner.highLow(input)

      assert.equals(output, 6)
    })
  })

  describe('evenSteven', () => {
    /**
     * It sounds like the goal is to find the only two numbers in
     * each row where one evenly divides the other - that is, where
     * the result of the division operation is a whole number.
     * They would like you to find those numbers on each line,
     * divide them, and add up each line's result.
     */
    it('should return 4 for 5 9 2 8', () => {
      const input = '5 9 2 8'
      const output = liner.evenSteven(input)

      assert.equals(output, 4)
    })

    it('should return 3 for 9 4 7 3', () => {
      const input = '9 4 7 3'
      const output = liner.evenSteven(input)

      assert.equals(output, 3)
    })

    it('should return 2 for 3 8 6 5', () => {
      const input = '3 8 6 5'
      const output = liner.evenSteven(input)

      assert.equals(output, 2)
    })
  })
})
