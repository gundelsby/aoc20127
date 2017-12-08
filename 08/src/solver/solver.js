const command = require('./command')
const instructions = require('./instructions')
const evaluator = require('./evaluator')
const registers = require('./register')

module.exports = {
  findMaxRegisterValue: (commandStrings) => {

    commandStrings.map(command.parse)
      .forEach(command => {
        if (evaluator.evaluate(command.condition, registers.read)) {
          const currentValue = registers.read(command.register) || 0
          const newValue = instructions[command.instruction](currentValue, command.value)
          registers.write(command.register, newValue)
        }
      })

    return registers.getMaxValue()
  }
}
