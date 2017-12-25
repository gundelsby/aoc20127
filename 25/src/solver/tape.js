module.exports = class {
  constructor () {
    this.data = {}
  }

  write (position, value) {
    this.data[position] = value
  }

  read (position) {
    return this.data[position] || 0
  }
}
