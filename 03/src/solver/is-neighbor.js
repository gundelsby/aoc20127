function calcDistance (a, b) {
  const sorted = [a, b].sort()

  return sorted[1] - sorted[0]
}

module.exports = (a, b) => {
  const xDist = calcDistance(a.x, b.x)
  const yDist = calcDistance(a.y, b.y)
  const tolerance = [0, 1]

  return tolerance.includes(xDist) && tolerance.includes(yDist)
}
