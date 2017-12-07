const tree = require('../../src/solver/tree')
const {assert, refute} = require('../test-helper')

describe('Tree', () => {
  const testData = ['pbga (66)', 'xhth (57)', 'ebii (61)', 'havc (66)', 'ktlj (57)',
    'fwft (72) -> ktlj, cntj, xhth', 'qoyq (66)', 'padx (45) -> pbga, havc, qoyq',
    'tknk (41) -> ugml, padx, fwft', 'jptl (61)', 'ugml (68) -> gyxo, ebii, jptl',
    'gyxo (61)', 'cntj (57)']
  describe('build', () => {
    const build = tree.build
    it('should return the node for a single node array', () => {
      const input = [{name: 'olol', weight: 20, nodes: null}]
      const output = build(input)

      assert.match(output, input[0])
    })

    it('should return root node containing child node for a two node array', () => {
      const input = [{name: 'olol', nodes: ['lolo']}, {name: 'lolo', nodes: null}]
      const output = build(input)

      assert.match(output, {
        name: input[0].name,
        nodes: [input[1]]
      })
    })
  })
})
