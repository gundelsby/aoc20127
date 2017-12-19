module.exports = class {
  constructor (input) {
    this.data = input.split(/\r?\n/g)
      .filter(line => line.trim() !== '')
      .map(line => {
        return line.split('').map(value => value.trim())
      })
  }

  getStart () {
    const x = this.data[0].findIndex(square => square === '|')

    return {x, y: 0}
  }
}
