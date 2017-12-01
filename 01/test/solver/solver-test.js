/**
 * The captcha requires you to review a sequence of digits (your puzzle input)
 * and find the sum of all digits that match the next digit in the list. The
 * list is circular, so the digit after the last digit is the first digit in
 * the list.
 */
const solver = require('../../src/solver/solver')
const {assert, refute} = require('../test-helper')

describe('Solver', () => {
  /**
   * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the
   * second digit and the third digit (2) matches the fourth digit.
   */
  it('Should produce 3 from 1122', () => {
    const input = '1122'
    const output = solver(input)

    assert.equals(output, '3')
  })

  /**
   * 1111 produces 4 because each digit (all 1) matches the next.
   */
  it('Should produce 4 from 1111', () => {
    const input = '1111'
    const output = solver(input)

    assert.equals(output, '4')
  })
  /**
   * 1234 produces 0 because no digit matches the next.
   */
  it('Should produce 0 from 1234', () => {
    const input = '1234'
    const output = solver(input)

    assert.equals(output, '0')
  })
  /**
   * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
   */
  it('Should produce 9 from 91212129', () => {
    const input = '91212129'
    const output = solver(input)

    assert.equals(output, '9')
  })
})
