class Judge {
  constructor (genA, genB) {
    this.genA = genA
    this.genB = genB
  }

  run (cycles) {
    let matches = 0
    for (let i = 0; i < cycles; i++) {
      if ((this.genA.generate() & 0x0000ffff) === (this.genB.generate() & 0x0000ffff)) {
        matches++
      }
    }

    return {matches}
  }

  runDiscriminatory (cycles) {
    let matches = 0
    for (let i = 0; i < cycles; i++) {
      if ((this.genA.getDiscriminatedValue() & 0x0000ffff) === (this.genB.getDiscriminatedValue() & 0x0000ffff)) {
        matches++
      }
    }

    return {matches}
  }
}

module.exports = Judge
