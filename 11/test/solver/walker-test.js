const walker = require('../../src/solver/walker')
const {assert, refute} = require('../test-helper')

describe('Walker', () => {
  describe('walk', () => {
    it('should return {x: 1.5, y: 1.5} for [ne, ne, ne]', () => {
      const input = ['ne', 'ne', 'ne']
      const output = walker.walk(input)

      assert.equals(output, {x: 1.5, y: 1.5})
    })
    // ne,ne,sw,sw is 0 steps away (back where you started).
    it('should return {x: 0, y: 0} for [ne, ne, sw, sw]', () => {
      const input = ['ne', 'ne', 'sw', 'sw']
      const output = walker.walk(input)

      assert.equals(output, {x: 0, y: 0})
    })
    // ne,ne,s,s is 2 steps away (se,se).
    it('should return {x: 1, y: -1} for [ne, ne, s, s]', () => {
      const input = ['ne', 'ne', 's', 's']
      const output = walker.walk(input)

      assert.equals(output, {x: 1, y: -1})
    })
    it('should return {x: -0.5, y: -2.5} for [se, sw, se, sw, sw]', () => {
      const input = ['se', 'sw', 'se', 'sw', 'sw']
      const output = walker.walk(input)

      assert.equals(output, {x: -0.5, y: -2.5})
    })
    // se,sw,se,sw,sw is 3 steps away (s,s,sw).
  })

  describe('findDistance', () => {
    it('should return 6 for {x: 3, y: 3}', () => {
      const input = {x: 3, y: 3}
      const output = walker.findDistance(input)

      assert.equals(output, 6)
    })

    it('should return 3 for {x:-0.5, y: -2.5}', () => {
      const input = {x: -0.5, y: -2.5}
      const output = walker.findDistance(input)

      assert.equals(output, 3)
    })

    // 2 steps away (se,se)
    it('should return 2 for {x: 1, y: -1}', () => {
      const input = {x: 1, y: -1}
      const output = walker.findDistance(input)

      assert.equals(output, 2)
    })
  })
})
