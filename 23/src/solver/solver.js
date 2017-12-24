const CPU = require('./cpu')

module.exports = {
  part1: (instructions) => {
    const cpu = new CPU({
      id: 0,
      sendMessage: () => {}
    })
    cpu.loadProgram(instructions)
    cpu.run()

    console.log(cpu.opCounts)
    return cpu.opCounts['mul'] || 0
  },
  part2: (input) => {
    return null
  }
}
