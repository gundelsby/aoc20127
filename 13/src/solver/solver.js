const Layer = require('./layer')

function increaseTick (firewall) {
  Object.values(firewall).forEach((layer) => {
    console.log('Tick')
    layer.tick()
  })
}

function walkThroughTheFire (layers, delay = 0) {
  const firewall = {}
  let lastLayer = 0
  layers.forEach((line) => {
    const parts = line.match(/(\d+):\s(\d+)/)
    firewall[parts[1]] = new Layer(parts[2])
    if (parts[1] > lastLayer) {
      lastLayer = parts[1]
    }
  })

  for (let i = 0; i < delay; i++) {
    console.log('Delay', i)
    increaseTick(firewall)
  }

  let severity = 0
  for (let i = 0; i < lastLayer + 1; i++) {
    if (firewall[i] && firewall[i].scannerPosition === 0) {
      severity += firewall[i].getSeverity(i)
      delete firewall[i]
    }
  }

  increaseTick(firewall)

  return severity
}

module.exports = {
  part1: (input) => {
    return walkThroughTheFire(input)
  },
  part2: (input) => {
    let delay = 0
    let workingDelay = walkThroughTheFire(input, delay) === 0
    while (!workingDelay) {
      const severity = walkThroughTheFire(input, ++delay)
      console.log(`Delay: ${delay}, severity: ${severity}`)
      workingDelay = severity === 0
    }

    return delay
  }
}
