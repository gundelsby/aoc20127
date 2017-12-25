const Tape = require('./tape')
const {Cursor, directions} = require('./cursor')
const {State, Rule} = require('./state')

const states = {
  A: new State(
    new Rule({condition: 0, value: 1, direction: directions.RIGHT, nextState: 'B'}),
    new Rule({condition: 1, value: 0, direction: directions.LEFT, nextState: 'C'})
  ),
  B: new State(
    new Rule({condition: 0, value: 1, direction: directions.LEFT, nextState: 'A'}),
    new Rule({condition: 1, value: 1, direction: directions.RIGHT, nextState: 'D'})
  ),
  C: new State(
    new Rule({condition: 0, value: 1, direction: directions.RIGHT, nextState: 'A'}),
    new Rule({condition: 1, value: 0, direction: directions.LEFT, nextState: 'E'})
  ),
  D: new State(
    new Rule({condition: 0, value: 1, direction: directions.RIGHT, nextState: 'A'}),
    new Rule({condition: 1, value: 0, direction: directions.RIGHT, nextState: 'B'})
  ),
  E: new State(
    new Rule({condition: 0, value: 1, direction: directions.LEFT, nextState: 'F'}),
    new Rule({condition: 1, value: 1, direction: directions.LEFT, nextState: 'C'})
  ),
  F: new State(
    new Rule({condition: 0, value: 1, direction: directions.RIGHT, nextState: 'D'}),
    new Rule({condition: 1, value: 1, direction: directions.RIGHT, nextState: 'A'})
  )
}

module.exports = {
  part1: () => {
    let nextState = 'A'
    const desiredSteps = 12919244
    const tape = new Tape()
    const cursor = new Cursor(tape)
    for (let i = 0; i < desiredSteps; i++) {
      nextState = states[nextState].execute(cursor)
    }

    return Object.values(tape.data).reduce((sum, entry) => {
      return sum + entry
    })
  },
  part2: (input) => {
    return null
  }
}
