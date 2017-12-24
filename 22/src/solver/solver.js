const mapper = require('./mapper')
const Carrier = require('./carrier')

module.exports = {
  part1: (input) => {
    const initial = mapper(input)
    const carrier = new Carrier(initial)

    for (let i = 0; i < 10000; i++) {
      carrier.burst()
    }

    return carrier.nodesInfected
  },
  part2: (input, wantedBursts) => {
    const initial = mapper(input)
    const carrier = new Carrier(initial)

    for (let i = 0; i < wantedBursts; i++) {
      carrier.burst()
    }

    return carrier.nodesInfected
  }
}
