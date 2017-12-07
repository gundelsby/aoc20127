function calcWeight (node) {
  if (!node.nodes) {
    return node.weight
  }

  return node.nodes.reduce((sum, node) => {
    return sum + calcWeight(node)
  }, node.weight)
}

module.exports = {
  calcWeight
}
