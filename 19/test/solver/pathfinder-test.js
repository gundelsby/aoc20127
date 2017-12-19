const Pathfinder = require('../../src/solver/pathfinder')
const {assert, refute} = require('../test-helper')
const Map = require('../../src/solver/map')
const input = require('fs').readFileSync('./test/input.txt', 'utf-8')

describe('Pathfinder', () => {
  let map

  beforeEach(() => {
    map = new Map(input)
  })

  describe('track', () => {
    it('should return ABCDEF using test input', () => {
      const pathfinder = new Pathfinder(map)

      assert.equals(pathfinder.track(), 'ABCDEF')
    })
  })
})
