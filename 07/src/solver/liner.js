module.exports = {
  parseNode: (input) => {
    const name = input.match(/^\w+/)[0]
    const weight = parseInt(input.match(/\d+/)[0])
    const nodes = input.includes('->') ? input.split(/->\s/)[1].match(/\w+/g) : null

    return {name, weight, nodes}
  }
}
