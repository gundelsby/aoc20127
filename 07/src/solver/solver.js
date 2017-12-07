const liner = require('./liner')
const tree = require('./tree')
const scale = require('./node-scale')

module.exports = {
  findRoot: (lines) => {
    const nodes = lines.map((line) => {
      return liner.parseNode(line)
    })
    .filter((node) => node.nodes !== null) // nodes that aren't parents are irrelevant for this case

    // find nodes with parents
    const nodesWithParents = new Set()
    nodes.forEach((node) => {
      node.nodes.forEach(name => nodesWithParents.add(name))
    })
    return nodes.filter(node => !nodesWithParents.has(node.name))[0]
  },
  findFatty: (lines) => {
    const root = tree.build(lines)
    return scale.calcWeight(root)
  }
}
