const solver = require('../../src/solver/solver')
const liner = require('../../src/solver/liner')
const { assert, refute } = require('../test-helper')

describe('Solver (using testdata)', () => {
  const testData = ['pbga (66)', 'xhth (57)', 'ebii (61)', 'havc (66)', 'ktlj (57)',
    'fwft (72) -> ktlj, cntj, xhth', 'qoyq (66)', 'padx (45) -> pbga, havc, qoyq',
    'tknk (41) -> ugml, padx, fwft', 'jptl (61)', 'ugml (68) -> gyxo, ebii, jptl',
    'gyxo (61)', 'cntj (57)']
  describe('findRoot', () => {
    it ('should return the tknk node', () => {
      const output = solver.findRoot(testData)

      assert.equals(output, 'tknk')
    })
  })
  describe('findFatty', () => {
    it('should return ugml', () => {
      assert.equals(solver.findFatty(testData).unbalanced.name, 'ugml')
    })

    it('should return the weight the node must have to balanced the tree', () => {
      assert.equals(solver.findFatty(testData).weight, 60)
    })
  })
})
