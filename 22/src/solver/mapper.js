module.exports = (input) => {
  const lines = input.split(/\r?\n/)
  const infected = {}
  const lowestPosition = Math.floor(lines.length / 2) * -1

  lines.forEach((line, i) => {
    infected[lowestPosition + i] = line.trim().split('')
      .map((cell, j) => {
        return {
          value: cell,
          x: lowestPosition + j
        }
      })
      .filter(cell => cell.value === '#')
      .map(cell => cell.x)
  })

  return infected
}
