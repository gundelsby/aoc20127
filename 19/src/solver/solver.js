const Map = require('./map')
const Pathfinder = require('./pathfinder')

module.exports = (input) => {
  const map = new Map(input)
  const pf = new Pathfinder(map)

  return pf.track()
}
