const registers = {}

module.exports = {
  read: (address) => {
    return registers[address] || 0
  },
  write: (address, value) => {
    registers[address] = value
  },
  getMaxValue: () => {
    return Object.values(registers)
      .reduce((max, value) => {
        return max > value ? max : value
      })
  }
}
