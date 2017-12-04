const mover = require('../../src/solver/mover')
const { assert, refute } = require('../test-helper')

describe('Mover', () => {
  // if not at xBound && nothing to the right, move right
  it('should move right if at 0,0', () => {
    const grid = [{x: 0, y: 0}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: 1, y: 0})
  })

  it('should move right at -1, -1', () => {
    const grid = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}, {x: -1, y: 1}, {x: -1, y: 0}, {x: -1, y: -1}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: 0, y: -1})
  })
  // else if not at yBound && nothing above, move up
  it('should move up if at 1,0', () => {
    const grid = [{x: 0, y: 0}, {x: 1, y: 0}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: 1, y: 1})
  })
  it('should move up if at 2,-1', () => {
    const grid = [{x: 2, y: -1}]
    const boundary = 2
    const output = mover(grid, boundary)

    assert.equals(output, {x: 2, y: 0})
  })
  it('should move up if at 2,1', () => {
    const grid = [{x: 2, y: 1}]
    const boundary = 2
    const output = mover(grid, boundary)

    assert.equals(output, {x: 2, y: 2})
  })
  // else if not at xBoundNeg && nothing to the left, move left
  it('should move left if at 1,1', () => {
    const grid = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: 0, y: 1})
  })

  it('should move left if at 0,1 and 1,1 is filled', () => {
    const grid = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: -1, y: 1})
  })
  // else if not at yBoundNeg && nothing below, move down
  it('should move down if at -1,1', () => {
    const grid = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}, {x: -1, y: 1}]
    const boundary = 1
    const output = mover(grid, boundary)

    assert.equals(output, {x: -1, y: 0})
  })
  // else if not at xBound && nothing to the right , move right
  // else if not at y-1 && nothing above, move up until

  it('should be at 1,-1 after 8 moves starting from 0,0 with boundary = 1', () => {
    let grid = [{x: 0, y: 0}]
    const boundary = 1
    for (let i = 0; i < 8; i++) {
      grid.push(mover(grid, boundary))
    }

    assert.equals(grid[grid.length - 1], {x: 1, y: -1})
  })
})
