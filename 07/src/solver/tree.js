module.exports = {
  build: (nodes) => {
    const nodeMap = {}
    const nodesWithParents = new Set()
    nodes.forEach((node) => {
      if (node.nodes) {
        node.nodes.forEach(name => nodesWithParents.add(name))
      }
      nodeMap[node.name] = node
    })
    const root = nodes.find((node) => {
      return !nodesWithParents.has(node)
    })

    function addChildren (nodeArray) {
      if (!nodeArray) {
        return null
      }

      return nodeArray.map((nameString) => {
        const {name, weight, nodes} = nodeMap[nameString]
        return {
          name,
          weight,
          nodes: addChildren(nodes)
        }
      })
    }
    root.nodes = addChildren(root.nodes)

    return root
  }
}
