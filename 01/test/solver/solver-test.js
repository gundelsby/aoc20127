const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  /**
   * The captcha requires you to review a sequence of digits (your puzzle input)
   * and find the sum of all digits that match the next digit in the list. The
   * list is circular, so the digit after the last digit is the first digit in
   * the list.
   */
  describe('Sequential', () => {
    /**
     * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the
     * second digit and the third digit (2) matches the fourth digit.
     */
    it('Should produce 3 from 1122', () => {
      const input = '1122'
      const output = solver.sequential(input)

      assert.equals(output, '3')
    })

    /**
     * 1111 produces 4 because each digit (all 1) matches the next.
     */
    it('Should produce 4 from 1111', () => {
      const input = '1111'
      const output = solver.sequential(input)

      assert.equals(output, '4')
    })
    /**
     * 1234 produces 0 because no digit matches the next.
     */
    it('Should produce 0 from 1234', () => {
      const input = '1234'
      const output = solver.sequential(input)

      assert.equals(output, '0')
    })
    /**
     * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
     */
    it('Should produce 9 from 91212129', () => {
      const input = '91212129'
      const output = solver.sequential(input)

      assert.equals(output, '9')
    })
  })

  describe('Halfway', () => {
    /**
     * Now, instead of considering the next digit, it wants you to
     * consider the digit halfway around the circular list. That
     * is, if your list contains 10 items, only include a digit in
     * your sum if the digit 10/2 = 5 steps forward matches it.
     * Fortunately, your list has an even number of elements.
    */
    it('should return 6 for 1212', () => {
      const input = '1212'
      const output = solver.halfway(input)

      assert.equals(output, '6')
    })

    it('should return 0 for 1221', () => {
      const input = '1221'
      const output = solver.halfway(input)

      assert.equals(output, '0')
    })

    it('should return 4 for 123425', () => {
      const input = '123425'
      const output = solver.halfway(input)

      assert.equals(output, '4')
    })

    it('should return 12 for 123123', () => {
      const input = '123123'
      const output = solver.halfway(input)

      assert.equals(output, '12')
    })

    it('should return 4 for 12131415', () => {
      const input = '12131415'
      const output = solver.halfway(input)

      assert.equals(output, '4')
    })
  })
})
