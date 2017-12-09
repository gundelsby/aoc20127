const solver = require('../../src/solver/solver')
const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('calcStreamPoints', () => {
    const calcStreamPoints = solver.calcStreamPoints
    // {}, score of 1.
    it('should return 1 for {}', () => {
      const input = '{}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 1)
    })
    // {{{}}}, score of 1 + 2 + 3 = 6.
    it('should return 6 for {{{}}}', () => {
      const input = '{{{}}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 6)
    })
    // {{},{}}, score of 1 + 2 + 2 = 5.
    it('should return 5 for {{},{}}', () => {
      const input = '{{},{}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 5)
    })
    // {{{},{},{{}}}}, score of 1 + 2 + 3 + 3 + 3 + 4 = 16.
    it('should return 16 for {{{},{},{{}}}}', () => {
      const input = '{{{},{},{{}}}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 16)
    })
    // {<a>,<a>,<a>,<a>}, score of 1.
    it('should return 1 for {<a>,<a>,<a>,<a>}', () => {
      const input = '{<a>,<a>,<a>,<a>}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 1)
    })
    // {{<ab>},{<ab>},{<ab>},{<ab>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
    it('should return 9 for {{<ab>},{<ab>},{<ab>},{<ab>}}', () => {
      const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 9)
    })
    // {{<!!>},{<!!>},{<!!>},{<!!>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
    it('should return 9 for {{<!!>},{<!!>},{<!!>},{<!!>}}', () => {
      const input = '{{<!!>},{<!!>},{<!!>},{<!!>}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 9)
    })
    // {{<a!>},{<a!>},{<a!>},{<ab>}}, score of 1 + 2 = 3.
    it('should return 3 for {{<a!>},{<a!>},{<a!>},{<ab>}}', () => {
      const input = '{{<a!>},{<a!>},{<a!>},{<ab>}}'
      const output = calcStreamPoints(input)

      assert.equals(output.score, 3)
    })
  })
})
