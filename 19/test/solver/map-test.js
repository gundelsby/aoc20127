const Map = require('../../src/solver/map')
const {assert, refute} = require('../test-helper')
const input = require('fs').readFileSync('./test/input.txt', 'utf-8')

describe('Map', () => {
  describe('constructor', () => {
    it('should create an array with same length as the height of the input, ignoring empty lines', () => {
      const map = new Map(input)

      assert.equals(map.data.length, 6)
    })

    it('should create an array per horizontal line with the same size as the width of the input', () => {
      const map = new Map(input)

      map.data.forEach(vertical => {
        assert(Array.isArray(vertical), 'vertical is not an array')
        assert.equals(vertical.length, 16)
      })
    })
  })

  describe('getStart', () => {
    it('should return x=6, y=0 for test input', () => {
      const map = new Map(input)

      assert.equals(map.getStart(), {
        x: 5,
        y: 0
      })
    })
  })
})
