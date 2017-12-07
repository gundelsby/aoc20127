const nodeScale = require('../../src/solver/node-scale')
const {assert, refute} = require('../test-helper')

describe('Node scale', () => {
  describe('calcWeight', () => {
    const calcWeight = nodeScale.calcWeight
    it('should return the nodes own weight for a node with no children', () => {
      const input = {weight: 64}
      const output = calcWeight(input)

      assert.equals(output, input.weight)
    })

    it('should return the combined weight for a node with children', () => {
      const input = {weight: 1, nodes: [{weight: 2}, {weight: 3}]}
      const output = calcWeight(input)

      assert.equals(output, 6)
    })
  })
})
