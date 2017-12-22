const mapper = require('../../src/solver/mapper')
const {assert, refute} = require('../test-helper')

describe('Mapper', () => {
  const input = `..#
  #..
  ...`

  it('should mark {x: -1, y: 0} as infected', () => {
    const output = mapper(input)
    const expected = {}
    expected[0] = [-1]

    assert.match(output, expected)
  })
})
