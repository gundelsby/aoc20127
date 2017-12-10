const command = require('./command')
const instructions = require('./instructions')
const evaluator = require('./evaluator')
const Registers = require('./register')

module.exports = {
  findMaxRegisterValue: (commandStrings) => {
    const registers = new Registers()
    let historicalMax = 0
    commandStrings.map(command.parse)
      .forEach(command => {
        if (evaluator.evaluate(command.condition, address => registers.read(address))) {
          const currentValue = registers.read(command.register)
          const newValue = instructions[command.instruction](currentValue, command.value)
          registers.write(command.register, newValue)
        }
        const currentMaxValue = registers.getMaxValue()
        historicalMax = currentMaxValue > historicalMax ? currentMaxValue : historicalMax
      })
    return {
      currentMaxValue: registers.getMaxValue(),
      historicalMax
    }
  }
}
