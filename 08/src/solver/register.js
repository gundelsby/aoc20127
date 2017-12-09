class Registers {
  constructor () {
    this.registers = {}
  }

  read (address) {
    return this.registers[address] || 0
  }

  write (address, value) {
    this.registers[address] = value
  }

  getMaxValue () {
    return Object.values(this.registers)
      .reduce((max, value) => {
        return max > value ? max : value
      }, 0)
  }
}

module.exports = Registers
