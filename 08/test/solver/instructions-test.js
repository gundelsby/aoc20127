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

    it('should return {instruction: (== instructions.inc)} for b inc 5 if a > 1', () => {
      refute()
    })
    // a inc 1 if b < 5
    // c dec -10 if a >= 1
    // c inc -20 if c == 10
  })
})
