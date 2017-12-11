const directions = {
  nw: {x: -0.5, y: 0.5},
  n: {x: 0, y: 1},
  ne: {x: 0.5, y: 0.5},
  se: {x: 0.5, y: -0.5},
  s: {x: 0, y: -1},
  sw: {x: -0.5, y: -0.5}
}

module.exports = {
  walk: (steps) => {
    return steps.reduce((position, step) => {
      return {x: position.x + directions[step].x, y: position.y + directions[step].y}
    }, {x: 0, y: 0})
  },
  findDistance: (target) => {
    return Math.abs(target.x) + Math.abs(target.y)
  },
  longWalk: (steps) => {
    let maxDistance = 0
    let position = {x: 0, y: 0}
    steps.forEach(step => {
      position = {x: position.x + directions[step].x, y: position.y + directions[step].y}
      const currentDistance = Math.abs(position.x) + Math.abs(position.y)
      maxDistance = currentDistance > maxDistance ? currentDistance : maxDistance
    })

    return maxDistance
  }
}
