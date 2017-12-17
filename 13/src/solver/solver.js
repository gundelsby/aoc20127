const Layer = require('./layer')

module.exports = {
  part1: (input) => {
    const firewall = {}
    let lastLayer = 0
    input.forEach((line) => {
      const parts = line.match(/(\d+):\s(\d+)/)
      firewall[parts[1]] = new Layer(parts[2])
      if (parts[1] > lastLayer) {
        lastLayer = parts[1]
      }
    })

    // Each picosecond, the packet moves one layer forward (its first move takes it into layer 0), and then the scanners move one step. If there is a scanner at the top of the layer as your packet enters it, you are caught.
    let severity = 0
    for (let i = 0; i < lastLayer + 1; i++) {
      if (firewall[i] && firewall[i].scannerPosition === 0) {
        severity += firewall[i].getSeverity(i)
        delete firewall[i]
      }

      Object.values(firewall).forEach((layer) => {
        layer.tick()
      })
    }

    return severity
  }
}
