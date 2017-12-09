const {assert, refute} = require('../test-helper')
const Registers = require('../../src/solver/register')

describe('Registers', () => {
  let registers

  beforeEach(() => {
    registers = new Registers()
  })

  describe('write', () => {
    it('should add value to named register', () => {
      const value = 5
      const address = 'a'
      registers.write(address, value)

      assert.equals(registers.read(address), value)
    })
  })

  describe('read', () => {
    it('should return 0 if register doesnt exist', () => {
      assert.equals(registers.read('lol'), 0)
    })
  })

  describe('getMaxValue', () => {
    it('should return 5 when a=-6, b=5, c=2, d=0', () => {
      registers.write('a', -6)
      registers.write('b', 5)
      registers.write('c', 2)
      registers.write('d', 0)

      assert.equals(registers.getMaxValue(), 5)
    })

    it('should return 0 when no registers exist', () => {
      assert.equals(registers.getMaxValue(), 0)
    })
  })
})
