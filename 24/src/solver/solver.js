const Component = require('./component')
const builder = require('./builder')

module.exports = {
  part1: (input) => {
    const components = input.map(description => new Component(description))
    return builder.getStrongest(components).reduce((sum, component) => {
      return sum + component.getPinCount()
    }, 0)
  },
  part2: (input) => {
    const components = input.map(description => new Component(description))
    return builder.getLongest(components).reduce((sum, component) => {
      return sum + component.getPinCount()
    }, 0)
  }
}
