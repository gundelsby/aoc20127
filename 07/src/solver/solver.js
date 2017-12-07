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
      if (node.nodes) {
        node.nodes.forEach(name => nodesWithParents.add(name))
      }
    })
    return nodes.filter(node => !nodesWithParents.has(node.name))[0].name
  },
  findFatty: (lines) => {
    const root = tree.build(lines.map(line => {
      return liner.parseNode(line)
    }))

    function findUnbalancer (node) {
      const childrenByWeight = {}

      if (node.nodes) {
        node.nodes.forEach(node => {
          const weight = scale.calcWeight(node)
          childrenByWeight[weight] = !childrenByWeight[weight] ? [node] : childrenByWeight[weight].concat(node)
        })
        const unbalanced = Object.keys(childrenByWeight).filter(key => {
          return childrenByWeight[key].length === 1
        })[0]

        return childrenByWeight[unbalanced][0]
      }

      return null
    }

    function recurse (node, func) {
      if (!node) {
        return
      }

      const next = func(node)
      recurse(next, func)
    }

    recurse(root, (node) => {
      const unbalanced = findUnbalancer(node)
      console.log(node)
      console.log('weight:', scale.calcWeight(node))
      console.log('unbalanced: ', unbalanced)

      return unbalanced
    })

    return scale.calcWeight(root)
  }
}
