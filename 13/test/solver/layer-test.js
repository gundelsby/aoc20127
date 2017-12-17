const Layer = require('../../src/solver/layer')
const {assert, refute} = require('../test-helper')

describe('Layer', () => {
  it('should have scanner position at 0 on init', () => {
    const layer = new Layer(1)

    assert.equals(layer.scannerPosition, 0)
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

  describe('tick with range = 3', () => {
    const range = 3
    let layer

    beforeEach(() => {
      layer = new Layer(range)
    })

    it('should have scanner at 1 after first tick', () => {
      layer.tick()

      assert.equals(layer.scannerPosition, 1)
    })

    it('should have scanner at 2 after second tick', () => {
      layer.tick()
      layer.tick()

      assert.equals(layer.scannerPosition, 2)
    })

    it('should have scanner at 1 after third tick', () => {
      layer.tick()
      layer.tick()
      layer.tick()

      assert.equals(layer.scannerPosition, 1)
    })

    it('should have scanner at 0 after fourth tick', () => {
      layer.tick()
      layer.tick()
      layer.tick()
      layer.tick()

      assert.equals(layer.scannerPosition, 0)
    })

    it('should have scanner at 2 after sixth tick', () => {
      layer.tick()
      layer.tick()
      layer.tick()
      layer.tick()
      layer.tick()
      layer.tick()

      assert.equals(layer.scannerPosition, 2)
    })
  })
})
