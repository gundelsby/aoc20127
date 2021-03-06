const mover = require('./mover')
const isNeighbor = require('./is-neighbor')
/**
 * Each square on the grid is allocated in a spiral pattern
 * starting at a location marked 1 and then counting up
 * while spiraling outward. For example, the first few
 * squares are allocated like this:
 *
 * 17  16  15  14  13
 * 18   5   4   3  12
 * 19   6   1   2  11
 * 20   7   8   9  10
 * 21  22  23---> ...
 *
 * While this is very space-efficient (no squares are skipped),
 * requested data must be carried back to square 1 (the
 * location of the only access port for this memory system) by
 * programs that can only move up, down, left, or right. They
 * always take the shortest path: the Manhattan Distance
 * between the location of the data and square 1.
 */

function createCell (x, y, value) {
  return { x, y, value }
}

function drawRing (lastCell, xyBoundary) {
  const ring = []
  const sideLength = xyBoundary * 2 + 1
  const startY = lastCell.y
  let current = createCell(lastCell.x + 1, lastCell.y, lastCell.value + 1)
  ring.push(current)

  while (current.y < xyBoundary) {
    current = createCell(current.x, current.y + 1, current.value + 1)
    ring.push(current)
  }
  for (let i = 0; i < sideLength - 1; i++) {
    current = createCell(current.x - 1, current.y, current.value + 1)
    ring.push(current)
  }

  for (let i = 0; i < sideLength - 1; i++) {
    current = createCell(current.x, current.y - 1, current.value + 1)
    ring.push(current)
  }

  for (let i = 0; i < sideLength - 1; i++) {
    current = createCell(current.x + 1, current.y, current.value + 1)
    ring.push(current)
  }

  while (current.y + 1 < startY) {
    current = createCell(current.x, current.y + 1, current.value + 1)
    ring.push(current)
  }

  return ring
}

function calculateTargetGridPosition (targetValue) {
  /**
   * for every expansion, xBoundary increase by 2 and y by 2
   * 0,0 is center, meaning that expansion is in either end
   * after the first row, boundaries are x(-1..1) y(-1..1),
   * then x(-2..2) y(-2..2) and so on.
   * to create a spiral, algorithm has to move x+1 after grid
   * is expanded, and then up until boundary Y, left until boundary
   * negX, down until boundary negY, right until boundary X and finally
   * up until y0
   * it can never go backwards, meaning that
   */

  let xyBoundary = 1
  let grid = []
  grid.push(createCell(0, 0, 1))

  while (grid.length < targetValue) {
    grid = grid.concat(drawRing(grid[grid.length - 1], xyBoundary))
    xyBoundary += 1
  }

  return grid.find((cell) => {
    return cell.value === targetValue
  })
}

function calcStressValue (grid, position) {
  const neighbors = grid.filter((cell) => {
    return isNeighbor(position, cell)
  })
  const value = neighbors.reduce((sum, current) => {
    return sum + current.value
  }, 0)

  return value
}

module.exports = {
  sequential: (targetValue) => {
    const { x, y } = calculateTargetGridPosition(targetValue)
    return Math.abs(x) + Math.abs(y)
  },
  stress: (input) => {
    let xyBoundary = 1
    const grid = []
    let move = createCell(0, 0, 1) 
    grid.push(move)
    let moveCount = 0

    while (move.value <= input) {
      let circ = 8 * xyBoundary
      move = mover(grid, xyBoundary)
      move.value = calcStressValue(grid, move)

      grid.push(move)
      moveCount += 1

      if (moveCount === circ) {
        xyBoundary += 1
        moveCount = 0
      }
    }

    return grid[grid.length - 1].value
  }
}
