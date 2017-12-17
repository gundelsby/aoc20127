module.exports = class Layer {
  constructor (range) {
    this.range = range
    this.scannerPosition = 0
    this.nextMove = 1
  }

  getSeverity (depth) {
    return this.range * depth
  }

  tick () {
    this.scannerPosition += this.nextMove

    if (this.scannerPosition === this.range - 1) {
      this.nextMove = -1
    } else if (this.scannerPosition === 0) {
      this.nextMove = 1
    }
  }
}
