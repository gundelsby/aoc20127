const liner = require('../../src/solver/liner')
const {assert, refute} = require('../test-helper')

describe('Liner', () => {
  describe('parseNode', () => {
    const parseNode = liner.parseNode
    it('should return {name: fwft} for fwft (72) -> ktlj, cntj, xhth', () => {
      const input = 'fwft (72) -> ktlj, cntj, xhth'
      const output = parseNode(input)

      assert.equals(output.name, 'fwft')
    })
    it('should return {weight: 72} for fwft (72) -> ktlj, cntj, xhth', () => {
      const input = 'fwft (72) -> ktlj, cntj, xhth'
      const output = parseNode(input)

      assert.equals(output.weight, 72)
    })
    it('should return {nodes: [ktlj, cntj, xhth]} for fwft (72) -> ktlj, cntj, xhth', () => {
      const input = 'fwft (72) -> ktlj, cntj, xhth'
      const output = parseNode(input)

      assert.equals(output.nodes, ['ktlj', 'cntj', 'xhth'])
    })

    it('should return {nodes: null} for pbga (66)', () => {
      const input = 'pbga (66)'
      const output = parseNode(input)

      assert.isNull(output.nodes)
    })
  })
})