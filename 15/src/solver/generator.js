class Generator {
  constructor (factor, initialValue, discriminator = 1) {
    this.factor = factor
    this.lastValue = initialValue
    this.discriminator = discriminator
  }

  generate () {
    const product = this.lastValue * this.factor
    const remainder = product % 2147483647
    this.lastValue = remainder

    return remainder
  }

  getDiscriminatedValue () {
    let generated = this.generate()

    while (generated % this.discriminator) {
      generated = this.generate()
    }

    return generated
  }
}

module.exports = Generator
