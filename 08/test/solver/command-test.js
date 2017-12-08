const command = require('../../src/solver/command')
const {assert, refute} = require('../test-helper')

describe('Command', () => {
  describe('parse', () => {
    const parse = command.parse
    // b inc 5 if a > 1
    it('should return {register: \'b\'} for b inc 5 if a > 1', () => {
      const input = 'b inc 5 if a > 1'
      const output = parse(input)

      assert.match(output, {register: 'b'})
    })

    it('should return {instruction: \'inc\'} for b inc 5 if a > 1', () => {
      const input = 'b inc 5 if a > 1'
      const output = parse(input)

      assert.match(output, {
        instruction: 'inc'
      })
    })

    it('should return {value: 5} for b inc 5 if a > 1', () => {
      const input = 'b inc 5 if a > 1'
      const output = parse(input)

      assert.match(output, {
        value: 5
      })
    })

    it('should return {condition: \'a > 1\'} for  b inc 5 if a > 1', () => {
      const input = ' b inc 5 if a > 1'
      const output = parse(input)

      assert.match(output, {
        condition: 'a > 1'
      })
    })
    // a inc 1 if b < 5
    // c dec -10 if a >= 1
    // c inc -20 if c == 10
  })
})
