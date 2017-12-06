const banker = require('./banker')

function hasDuplicates (banks) {
  return banks.length !== new Set(banks).size
}

function repeatCounter (banks) {
  const variations = [banks.join('')]
  let reallocCount = 0

  while (!hasDuplicates(variations)) {
    banks = banker.circulate(banks)
    variations.push(banks.join(''))
    reallocCount++
  }

  return {reallocCount, banks}
}

module.exports = {
  /**
   * Given the initial block counts in your puzzle input, how many
   * redistribution cycles must be completed before a configuration is produced
   * that has been seen before?
   */
  repeatCounter: (input) => {
    const banks = input.split(/\s/).map(value => Number.parseInt(value, 10))
    return repeatCounter(banks)
  },
  getLoopSize: (input) => {
    const banks = input.split(/\s/).map(value => Number.parseInt(value, 10))
    const repeatedState = repeatCounter(banks).banks
    return repeatCounter(repeatedState).reallocCount
  }
}
