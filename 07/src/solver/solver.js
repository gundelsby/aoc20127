const liner = require('./liner')

module.exports = {
  findRoot: (lines) => {
    const nodes = lines.map((line) => {
      return liner.parseNode(line)
    })

    // find nodes with parents
    const nodesWithParents = []
    nodes.filter((node) => node.nodes !== null)
      .forEach((node) => {
        nodes.forEach((nodesWithParents.push))
    })

    const 
  }
}
