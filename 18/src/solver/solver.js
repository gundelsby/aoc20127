const CPU = require('./cpu')

module.exports = {
  part1: (instructions) => {
    let lastSent = null
    const cpu = new CPU({
      id: 0,
      sendMessage: (input) => {
        lastSent = input
      }
    })
    cpu.loadProgram(instructions)
    cpu.run()

    return lastSent
  },
  part2: (instructions) => {
    const cpus = []
    function dispatcher ({id, message}) {
      const cpu = cpus[id]
      cpu.receiveValue(message)
      if (cpu.initialized && !cpu.completed && !cpu.running) {
        cpu.run()
      }
    }

    cpus.push(new CPU({
      id: 0,
      sendMessage: (message) => {
        dispatcher({id: 1, message})
      }
    }))
    cpus.push(new CPU({
      id: 1,
      sendMessage: (message) => {
        dispatcher({id: 0, message})
      }
    }))

    cpus.forEach(cpu => {
      cpu.loadProgram(instructions)
      cpu.run()
    })

    let deadlock = false
    while (!deadlock && (!cpus[0].completed || !cpus[1].completed)) {
      deadlock = cpus[0].waiting && cpus[1].waiting
    }

    return cpus[1].messagesSent
  }
}
