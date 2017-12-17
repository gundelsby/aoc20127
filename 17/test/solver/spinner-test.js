const Spinner = require('../../src/solver/spinner')
const {assert, refute} = require('../test-helper')

describe('Spinner', () => {
  // This spinlock's algorithm is simple but efficient, quickly consuming everything in its path. It starts with a circular buffer containing only the value 0, which it marks as the current position. It then steps forward through the circular buffer some number of steps (your puzzle input) before inserting the first new value, 1, after the value it stopped on. The inserted value becomes the current position. Then, it steps forward from there the same number of steps, and wherever it stops, inserts after it the second new value, 2, and uses that as the new current position again.


  describe('spin (using stepSize = 3)', () => {
    const stepSize = 3
    let spinner

    beforeEach(() => {
      spinner = new Spinner({stepSize})
    })

    it('should ensure buffer value [0, 1] after first spin', () => {
      spinner.spin()

      assert.equals(spinner.buffer, [0, 1])
    })

    it('should ensure buffer valuel [0, 2, 1] after second spin', () => {
      spinner.spin()
      spinner.spin()

      assert.equals(spinner.buffer, [0, 2, 1])
    })

    it('should ensure buffer value [0, 2, 3, 1] after third spin', () => {
      spinner.spin()
      spinner.spin()
      spinner.spin()

      assert.equals(spinner.buffer, [0, 2, 3, 1])
    })
  // 0 (2) 1: the spinlock steps forward three times (0, 1, 0), and then inserts the second value, 2, after it. 2 becomes the current position.
  // 0  2 (3) 1: the spinlock steps forward three times (1, 0, 2), and then inserts the third value, 3, after it. 3 becomes the current position.
  // And so on:
  
  // 0  2 (4) 3  1
  // 0 (5) 2  4  3  1
  // 0  5  2  4  3 (6) 1
  // 0  5 (7) 2  4  3  6  1
  // 0  5  7  2  4  3 (8) 6  1
  // 0 (9) 5  7  2  4  3  8  6  1
  })

  describe('getValue', () => {

  })
})
