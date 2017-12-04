function hasCellAt (grid, position) {
  return grid.find((cell) => {
    return position.x === cell.x && position.y === cell.y
  })
}

module.exports = (grid, boundary) => {
  const {x, y} = grid[grid.length - 1]

  if (x < boundary && !hasCellAt(grid, {x: x + 1, y})) {
    return {x: x + 1, y}
  } else if (y < boundary && !hasCellAt(grid, {x, y: y + 1})) {
    return {x, y: y + 1}
  } else if (x > -boundary && !hasCellAt(grid, {x: x - 1, y})) {
    return {x: x - 1, y}
  } else if (y > -boundary && !hasCellAt(grid, {x, y: y - 1})) {
    return {x, y: y - 1}
  } else {
    throw new Error(`Unable to move from ${x},${y} with boundary ${boundary}`)
  }
}
