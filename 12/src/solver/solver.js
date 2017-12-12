const parser = require('./parser')

function findConnectedToTarget (programs, target) {
  let remainingPrograms = programs.filter((p) => {
    return p.id !== target
  })
  const connectedToTarget = []
  connectedToTarget.push(target)

  let newConnections = 0
  do {
    newConnections = 0
    remainingPrograms.forEach(program => {
      if (program.connections && program.connections.find(c => {
        return connectedToTarget.includes(c)
      })) {
        connectedToTarget.push(program.id)
        newConnections++
      }
    })

    remainingPrograms = remainingPrograms.filter(p => !connectedToTarget.includes(p.id))
  } while (newConnections > 0)

  return connectedToTarget
}

module.exports = {
  part1: (input, target) => {
    const programs = input.map(parser.parseProgram)
    const connected = findConnectedToTarget(programs, target)

    return connected.length
  },
  part2: (input) => {
    let programs = input.map(parser.parseProgram)
    let groups = 0

    while (programs.length) {
      const connected = findConnectedToTarget(programs, programs[0].id)
      programs = programs.filter(p => {
        return !connected.includes(p.id)
      })
      groups++
    }

    return groups
  }
}
