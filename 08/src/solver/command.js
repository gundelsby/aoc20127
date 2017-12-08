module.exports = {
  parse: (commandString) => {
    return {
      register: commandString.split(' ')[0]
    }
  }
}
