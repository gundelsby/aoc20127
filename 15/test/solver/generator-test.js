const Generator = require('../../src/solver/generator')
const {assert, refute} = require('../test-helper')

describe('Generator', () => {
  it('should return 1092455, 1181022009, 245556042, 1744312007, 1352636452 as first five values using factor 16807, initial value 65', () => {
    const generator = new Generator(16807, 65)
    const output = []
    for (let i = 0; i < 5; i++) {
      output.push(generator.generate())
    }

    assert.equals(output, [1092455, 1181022009, 245556042, 1744312007, 1352636452])
  })

  it('should return 430625591, 1233683848, 1431495498, 137874439, 285222916 as first five values using factor 48271, initial value 8921', () => {
    const generator = new Generator(48271, 8921)
    const output = []
    for (let i = 0; i < 5; i++) {
      output.push(generator.generate())
    }

    assert.equals(output, [430625591, 1233683848, 1431495498, 137874439, 285222916])
  })
})
