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

  describe('hasUniqueWordsAndNoAnagrams', () => {
    // abcde fghij is a valid passphrase.
    it ('should return true for abcde fghij', () => {
      const input = 'abcde fghij'

      assert(liner.hasUniqueWordsAndNoAnagrams(input))
    })
    // abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
    it ('should return false for abcde xyz ecdab', () => {
      const input = 'abcde xyz ecdab'

      refute(liner.hasUniqueWordsAndNoAnagrams(input))
    })
    // a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
    it ('should return true for a ab abc abd abf abj', () => {
      const input = 'a ab abc abd abf abj'

      assert(liner.hasUniqueWordsAndNoAnagrams(input))
    })
    // iiii oiii ooii oooi oooo is valid.
    it ('should return true for iiii oiii ooii oooi oooo', () => {
      const input = 'iiii oiii ooii oooi oooo'

      assert(liner.hasUniqueWordsAndNoAnagrams(input))
    })
    // oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
    it ('should return false for oiii ioii iioi iiio', () => {
      const input = 'oiii ioii iioi iiio'

      refute(liner.hasUniqueWordsAndNoAnagrams(input))
    })
  })
})
