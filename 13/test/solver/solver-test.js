const solver = require('../../src/solver/solver')
const Layer = require('../../src/solver/layer')

const { assert, refute } = require('../test-helper')

describe('Solver', () => {
  describe('tripTheAlarm', () => {
    const firewall = {}
    firewall[0] = new Layer(3)
    firewall[1] = new Layer(2)
    firewall[4] = new Layer(4)
    firewall[6] = new Layer(4)
        
    it('should return true for delay 9', () => {
      assert(solver.tripTheAlarm(firewall, 9))
    })

    it('should return false for delay 10', () => {
      refute(solver.tripTheAlarm(firewall, 10))
    })

    it('should return true for delay 11', () => {
      assert(solver.tripTheAlarm(firewall, 11))
    })
  })
})
