module.exports = {
  parse: (commandString) => {
    const parts = commandString.split(' ')
    return {
      register: parts[0],
      instruction: parts[1],
      value: Number.parseInt(parts[2], 10),
      condition: parts.slice(4).join(' ')
    }
  }
}
