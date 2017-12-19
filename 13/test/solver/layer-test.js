const Layer = require('../../src/solver/layer')
const {assert, refute} = require('../test-helper')

describe('Layer', () => {
  it('should have scanner position at 0 on init', () => {
    const layer = new Layer(1)

    assert(layer.isAtZero(0))
  })

  describe('getSeverity', () => {
    it(`should return input multiplied by the layer's range`, () => {
      const range = 4
      const input = 3
      const layer = new Layer(range)
      const output = layer.getSeverity(input)

      assert.equals(output, range * input)
    })
  })

  describe('tests with range = 3', () => {
    const range = 3
    let layer

    beforeEach(() => {
      layer = new Layer(range)
    })

    it('is not at zero after 1 tick', () => {
      refute(layer.isAtZero(1))
    })

    it('is not at zero after 2 ticks', () => {
      refute(layer.isAtZero(2))
    })

    it('is not at zero after 3 ticks', () => {
      refute(layer.isAtZero(3))
    })

    it('is at 0 after 4 ticks', () => {
      assert(layer.isAtZero(4))
    })

    it('is at 0 after 15016 ticks', () => {
      assert(layer.isAtZero(15016))
    })
  })
})
