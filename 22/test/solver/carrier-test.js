const Carrier = require('../../src/solver/carrier')
const mapper = require('../../src/solver/mapper')
const {assert, refute} = require('../test-helper')

describe('Carrier', () => {
  const input = `..#
  #..
  ...`
  const initiallyInfected = mapper(input)
  let carrier

  describe('burst', () => {
    carrier = new Carrier(initiallyInfected)
    it('should move left on first tick (0,0 is not infected)', () => {
      carrier.burst()

      assert.equals(carrier.currentPosition, {x: -1, y: 0})
    })
  })

  describe('turnLeft', () => {
    const carrier = new Carrier()
    it('should set new direction to 1,0 for current direction 0,1', () => {
      carrier.direction = {x: 0, y: 1}
      carrier.turnLeft()

      assert.equals(carrier.direction, {x: 1, y: 0})
    })

    it('should set new direction to 0, 1 for current direction -1, 0', () => {
      carrier.direction = {x: -1, y: 0}
      carrier.turnLeft()

      assert.equals(carrier.direction, {x: 0, y: 1})
    })
  })
})
