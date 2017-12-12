module.exports = {
  parseProgram: (input) => {
    return {
      id: input.match(/^\d+/g)[0],
      connections: input.match(/(\d+)/g).slice(1)
    }
  }
}
