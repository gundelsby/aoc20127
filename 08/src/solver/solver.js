const command = require('./command')
const instructions = require('./instructions')
const evaluator = require('./evaluator')
const registers = require('./register')

module.exports = {
  findMaxRegisterValue: (commandStrings) => {
    commandStrings.map(command.parse)
      .forEach(command => {
        console.log(command)
        if (evaluator.evaluate(command.condition, registers.read)) {
          console.log('TRUE, changing value')
          const currentValue = registers.read(command.register)
          const newValue = instructions[command.instruction](currentValue, command.value)
          registers.write(command.register, newValue)
        }
        console.log(registers.getMaxValue())
      })
    return registers.getMaxValue()
  }
}
