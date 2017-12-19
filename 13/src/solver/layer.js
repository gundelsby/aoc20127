module.exports = class Layer {
  constructor (range) {
    this.range = range
    this.period = this.range * 2 - 2
  }

  getSeverity (depth) {
    return this.range * depth
  }

  isAtZero (tick) {
    return tick === 0 || tick % this.period === 0
  }
}
