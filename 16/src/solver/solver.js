const moves = require('./moves')

function performMove (dancers, commandString) {
  const spin = /s(\d+)/
  const exchange = /x(\d+)\/(\d+)/
  const partner = /p(\w)\/(\w)/

  if (commandString.match(spin)) {
    return moves.spin({
      input: dancers,
      size: commandString.match(spin)[1]
    })
  } else if (commandString.match(exchange)) {
    return moves.exchange({
      input: dancers,
      p1: commandString.match(exchange)[1],
      p2: commandString.match(exchange)[2]
    })
  } else if (commandString.match(partner)) {
    return moves.partner({
      input: dancers,
      nameA: commandString.match(partner)[1],
      nameB: commandString.match(partner)[2]
    })
  } else {
    return dancers
  }
}

function calcLastRepeat (cyclePoint, goal) {
  const cycleLength = cyclePoint + 1
  const remainder = goal % cycleLength
  const numCycles = Math.floor(goal / cycleLength)

  console.log(`num cycles: ${numCycles}, cycle length: ${cycleLength}, all cycles: ${cycleLength * numCycles}`)
  return goal - remainder - 1
}

module.exports = {
  part1: (moves) => {
    let startingPosition = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

    return moves.reduce((dancers, move) => {
      return performMove(dancers, move)
    }, startingPosition)
  },
  part2: (moves) => {
    let startingPosition = 'abcdefghijklmnop'
    let currentPosition = startingPosition.split('')
    const iterations = 1000000000

    for (let i = 0; i < iterations; i++) {
      currentPosition = moves.reduce((dancers, move) => {
        return performMove(dancers, move)
      }, currentPosition)

      if (currentPosition.join('') === startingPosition) {
        console.log(`Repeat position at i=${i}`)
        i = calcLastRepeat(i, iterations)
      }
    }

    return currentPosition
  }
}
