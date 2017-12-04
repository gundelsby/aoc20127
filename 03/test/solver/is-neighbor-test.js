const isNeighbor = require('../../src/solver/is-neighbor')
const { assert, refute } = require('../test-helper')

describe('isNeighbor', () => {
  it('Should return true for 0, 0 and 0,1', () => {
    const a = {x: 0, y: 0}
    const b = {x: 0, y: 1}

    assert(isNeighbor(a, b))
  })

  it('Should return true for 0, 1 and 0,0', () => {
    const a = {x: 0, y: 1}
    const b = {x: 0, y: 0}

    assert(isNeighbor(a, b))
  })

  it('should return false for 0,1 and 0,-1', () => {
    const a = {x: 0, y: 1}
    const b = {x: 0, y: -1}

    refute(isNeighbor(a, b))
  })
})
