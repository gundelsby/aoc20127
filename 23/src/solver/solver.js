const CPU = require('./cpu')

module.exports = {
  part1: (instructions) => {
    const cpu = new CPU({
      id: 0,
      sendMessage: () => {}
    })

    cpu.loadProgram(instructions)
    cpu.run()

    return cpu.opCounts['mul'] || 0
  },
  part2: (instructions) => {
    const cpu = new CPU({
      id: 0,
      sendMessage: () => {}
    })

    cpu.registers['a'] = 1
    cpu.loadProgram(instructions)
    cpu.run()

    return cpu.registers['h']
  },
  part2r: () => {
    let b = 6700 - 100000
    let c = b - 17000
    let g
    let h = 0

    do {
      let f = 1
      let d = 2
      do {
        let e = 2
        do {
          g = d
          g *= e
          g -= b
          if (g !== 0) {
            f = 0
          }
          e++
          g = e
          g -= b
        } while (g !== 0)
        d++
        g = d
        g -= b
      } while (g !== 0)
      if (f !== 0) {
        h++
      }
      g = b
      g -= c
      b -= 17
    } while (g !== 0)

    return h
  }
}
