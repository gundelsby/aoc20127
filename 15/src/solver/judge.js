function getLower16BitString (number) {
  const binary = number.toString(2)
  return binary.length > 16 ? binary.slice(binary.length - 16) : binary.padStart(16, '0')
}

function isMatch (aValue, bValue) {
  return getLower16BitString(aValue) === getLower16BitString(bValue)
}

class Judge {
  constructor (genA, genB) {
    this.genA = genA
    this.genB = genB
  }

  run (cycles) {
    let matches = 0
    for (let i = 0; i < cycles; i++) {
      if (isMatch(this.genA.generate(), this.genB.generate())) {
        matches++
      }
    }

    return {matches}
  }

  runDiscriminatory (cycles) {
    let matches = 0
    for (let i = 0; i < cycles; i++) {
      if (isMatch(this.genA.getDiscriminatedValue(), this.genB.getDiscriminatedValue())) {
        matches++
      }
    }

    return {matches}
  }
}

module.exports = Judge
