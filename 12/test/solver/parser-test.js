const parser = require('../../src/solver/parser')
const {assert, refute} = require('../test-helper')

describe('Parser', () => {
  describe('parseProgram', () => {
    const parseProgram = parser.parseProgram
    // 0 <-> 2
    it('should return {id: 0} for 0 <-> 2', () => {
      const input = '0 <-> 2'
      const output = parseProgram(input)

      assert.match(output, {
        id: '0'
      })
    })

    it('should return {connections: [2]} for 0 <-> 2', () => {
      const input = '0 <-> 2'
      const output = parseProgram(input)

      assert.match(output, {
        connections: ['2']
      })
    })
    // 1 <-> 1
    // 2 <-> 0, 3, 4
    it('should return {connections: [0, 3, 4] for 2 <-> 0, 3, 4', () => {
      const input = '2 <-> 0, 3, 4'
      const output = parseProgram(input)

      assert.match(output, {
        connections: ['0', '3', '4']
      })
    })
    // 3 <-> 2, 4
    // 4 <-> 2, 3, 6
    // 5 <-> 6
    // 6 <-> 4, 5
  })
})
