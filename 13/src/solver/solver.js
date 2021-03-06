const Layer = require('./layer')

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
    if (firewall[i] && firewall[i].isAtZero(i)) {
      severity += firewall[i].getSeverity(i)
    }
  }

  return severity
}

function tripTheAlarm (firewall, delay = 0) {
  return Object.keys(firewall).some(depth => {
    return ((delay + Number(depth)) % firewall[depth].period) === 0
  })
}

module.exports = {
  part1: (input) => {
    return walkThroughTheFire(input)
  },
  part2: (input) => {
    let delay = 0
    const {firewall} = createFirewall(input)
    
    while (tripTheAlarm(firewall, ++delay)) {
    }

    return delay
  },
  tripTheAlarm
}
