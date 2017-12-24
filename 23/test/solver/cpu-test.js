const Cpu = require('../../src/solver/cpu')
const {assert, refute} = require('../test-helper')

describe('CPU', () => {
  // set X Y sets register X to the value of Y.
  describe('set', () => {
    it('should set register value', () => {
      const expected = 143
      const register = 'a'
      const cpu = new Cpu(0, () => {})
      cpu.set(register, expected)
      
      assert.equals(cpu.getValue(register), expected)
    })
  })
  // sub X Y decreases register X by the value of Y.
  describe('sub', () => {
    const cpu = new Cpu(0, () => {})
    it('should decrease register value by given value', () => {
      const initial = 0
      const value = 5
      const expected = initial - value
      const register = 'b'
      
      cpu.set(register, initial)
      cpu.sub(register, value)
      
      assert.equals(cpu.getValue(register), expected)
    })
  })
  // mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
  describe('mul', () => {
    const cpu = new Cpu(0, () => {})
    it('should set new value to 2 when existing is 1 and given value is 2', () => {
      const existing = 1
      const given = 2
      const expected = existing * given
      const register = 'c'

      cpu.set(register, existing)
      cpu.mul(register, given)

      assert.equals(cpu.getValue(register), expected)
    })
  })

  // jnz X Y jumps with an offset of the value of Y, but only if the value of X is not zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)
  describe('jnz', () => {
    let cpu

    beforeEach(() => {
      cpu = new Cpu(0, () => {})
    })

    it('should do leave the instruction pointer where it is for value 0', () => {
      const existing = 5
      const value = 0
      const offset = 5
      
      cpu.instructionPointer = existing
      cpu.jnz(value, offset)

      assert.equals(cpu.instructionPointer, existing)
    })

    it('should change the instruction pointer with given offset for value 1', () => {
      const existing = 5
      const value = 1
      const offset = 5
      
      cpu.instructionPointer = existing
      cpu.jnz(value, offset)

      assert.equals(cpu.instructionPointer, existing + offset)
    })

    it('should change the instruction pointer with given offset for value -1', () => {
      const existing = 5
      const value = -1
      const offset = 5
      
      cpu.instructionPointer = existing
      cpu.jnz(value, offset)

      assert.equals(cpu.instructionPointer, existing + offset)
    })
  })
})
