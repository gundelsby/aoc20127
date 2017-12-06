/**
 * The reallocation routine operates in cycles. In each cycle, it finds the
 * memory bank with the most blocks (ties won by the lowest-numbered memory
 * bank) and redistributes those blocks among the banks. To do this, it
 * removes all of the blocks from the selected bank, then moves to the next
 * (by index) memory bank and inserts one of the blocks. It continues doing
 * this until it runs out of blocks; if it reaches the last memory bank,
 * it wraps around to the first one.
 */
module.exports = {
  circulate: (input) => {
    let maxValue = input.reduce((max, value) => {
      return value > max ? value : max
    })
    let index = input.indexOf(maxValue)
    input[index] = 0

    while (maxValue > 0) {
      index = index < (input.length - 1) ? index + 1 : 0
      input[index] = input[index] + 1
      maxValue--
    }

    return input
  }
}
