const moves = require('../../src/solver/moves')
const {assert, refute} = require('../test-helper')

describe('Moves', () => {
  describe('Spin', () => {
    // Spin, written sX, makes X programs move from the end to the front, but maintain their order otherwise. (For example, s3 on abcde produces cdeab).
    it('should return eabcd for spin with size 1 on abcde', () => {
      const input = ['a', 'b', 'c', 'd', 'e']
      const output = moves.spin({input, size: 1})

      assert.equals(output, ['e', 'a', 'b', 'c', 'd'])
    })

    it('should return abcde for size 5 on abcde', () => {
      const input = ['a', 'b', 'c', 'd', 'e']
      const output = moves.spin({input, size: 5})

      assert.equals(output, input)
    })

    it('should return bcdea for size 4 on abcde', () => {
      const input = ['a', 'b', 'c', 'd', 'e']
      const output = moves.spin({input, size: 4})

      assert.equals(output, ['b', 'c', 'd', 'e', 'a'])
    })
  })

  describe('Exchange', () => {
    // Exchange, written xA/B, makes the programs at positions A and B swap places.
    it('should return abedc for pos 2, 4 on abcde', () => {
      const input = ['a', 'b', 'c', 'd', 'e']
      const output = moves.exchange({input, p1: 2, p2: 4})

      assert.equals(output, ['a', 'b', 'e', 'd', 'c'])
    })
  })

  describe('Partner', () => {
  // Partner, written pA/B, makes the programs named A and B swap places.
    it('should return abdce for cd on abcde', () => {
      const input = ['a', 'b', 'c', 'd', 'e']
      const output = moves.partner({input, nameA: 'c', nameB: 'd'})

      assert.equals(output, ['a', 'b', 'd', 'c', 'e'])
    })
  })
})
