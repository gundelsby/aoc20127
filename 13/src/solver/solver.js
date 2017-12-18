const Layer = require('./layer')

function increaseTick (firewall) {
  Object.values(firewall).forEach((layer) => {
    layer.tick()
  })
}

function createFirewall (layers) {
  const firewall = {}
  let lastLayer = 0
  
  layers.forEach((line) => {
    const parts = line.match(/(\d+):\s(\d+)/)
    firewall[parts[1]] = new Layer(parts[2])
    if (parts[1] > lastLayer) {
      lastLayer = parts[1]
    }
  })

  return {firewall, lastLayer}
}

function walkThroughTheFire (layers) {
  const {firewall, lastLayer} = createFirewall(layers)

  let severity = 0
  for (let i = 0; i < lastLayer + 1; i++) {
    if (firewall[i] && firewall[i].scannerPosition === 0) {
      severity += firewall[i].getSeverity(i)
      delete firewall[i]
    }
    increaseTick(firewall)
  }

  return severity
}

function tripTheAlarm (layers, delay = 0) {
  const {firewall, lastLayer} = createFirewall(layers)
  
  let position = 0 - delay
  for (let i = 0; position < lastLayer + 1; i++) {
    if (firewall[position]) {
      if (position % (firewall[position].range - 1) === 0) {
        return true
      }
    }
    position++
  }

  return false
}

module.exports = {
  part1: (input) => {
    return walkThroughTheFire(input)
  },
  part2: (input) => {
    let delay = 0
    while (!tripTheAlarm(input, delay++)) {
    }

    return delay
  }
}
