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
})
