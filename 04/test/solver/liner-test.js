const liner = require('../../src/solver/liner')
const { assert, refute } = require('../test-helper')

describe('Liner', () => {
  describe('hasOnlyUniqueWords', () => {
    // aa bb cc dd ee is valid.
    it('should return true for aa bb cc dd ee', () => {
      const input = 'aa bb cc dd ee'

      assert(liner.hasOnlyUniqueWords(input))
    })
    // aa bb cc dd aa is not valid - the word aa appears more than once.
    it('should return false for aa bb cc dd aa', () => {
      const input = 'aa bb cc dd aa'

      refute(liner.hasOnlyUniqueWords(input))
    })
    // aa bb cc dd aaa is valid - aa and aaa count as different words.
    it('should return true for aa bb cc dd aaa', () => {
      const input = 'aa bb cc dd aaa'

      assert(liner.hasOnlyUniqueWords(input))
    })
  })
})
