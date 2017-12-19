const liner = require('./liner')
const tree = require('./tree')
const scale = require('./node-scale')

function findUnbalancedTree (node) {
  if (!node.nodes) {
    return null
  }

  const nodesByWeight = {}
  node.nodes.forEach(child => {
    const weight = scale.calcWeight(child)
    if (nodesByWeight[weight]) {
      nodesByWeight[weight].push(child)
    } else {
      nodesByWeight[weight] = [child]
    }
  })
  const weights = Object.keys(nodesByWeight)
  if (weights.length === 1) {
    return null
  }
  const outlier = weights.filter(key => {
    return nodesByWeight[key].length === 1
  })[0]

  if (nodesByWeight[outlier] && nodesByWeight[outlier][0]) {
    const unbalanced = nodesByWeight[outlier][0]
    const diff = weights.map(Number).sort().reverse().reduce((sum, weight) => {
      return sum - weight
    })
    const weight = unbalanced.weight - diff
    return {
      weight,
      unbalanced
    }
  } else {
    return null
  }
}

module.exports = {
  findRoot: (lines) => {
    return tree.build(lines.map(line => {
      return liner.parseNode(line)
    })).name
  },
  findFatty: (lines) => {
    const root = tree.build(lines.map(line => {
      return liner.parseNode(line)
    }))

    let unbalanced = findUnbalancedTree(root)
    let test = unbalanced
    while (test) {
      test = findUnbalancedTree(unbalanced.unbalanced)
      if (test) {
        unbalanced = test
      }
    }
    
    return unbalanced
  }
}
