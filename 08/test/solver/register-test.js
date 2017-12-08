const {assert, refute} = require('../test-helper')

describe('Registers', () => {
  let read, write, getMaxValue

  beforeEach(() => {
    const registers = require('../../src/solver/register')
    read = registers.read
    write = registers.write
    getMaxValue = registers.getMaxValue
  })

  describe('write', () => {
    it('should add value to named register', () => {
      const value = 5
      const address = 'a'
      write(address, value)

      assert.equals(read(address), value)
    })
  })

  describe('read', () => {
    it('should return 0 if register doesnt exist', () => {
      assert.equals(read['lol'], 0)
    })
  })

  describe('getMaxValue', () => {
    it('should return 5 when a=-6, b=5, c=2, d=0', () => {
      write('a', -6)
      write('b', 5)
      write('c', 2)
      write('d', 0)

      assert.equals(getMaxValue(), 5)
    })
  })
})