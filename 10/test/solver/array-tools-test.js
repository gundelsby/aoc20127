const tools = require('../../src/solver/array-tools')
const {assert, refute} = require('../test-helper')

describe('Array tools', () => {
  describe('circularSelect', () => {
    const circularSelect = tools.circularSelect
    it('should return [1,2,3] for [1,2,3] starting at 0 with size 3', () => {
      const arr = [1, 2, 3]
      const output = circularSelect(arr, 0, 3)

      assert.equals(output, arr)
    })

    it('should return [2,3,1] for [1,2,3] starting at 1 with size 3', () => {
      const arr = [1, 2, 3]
      const output = circularSelect(arr, 1, 3)

      assert.equals(output, [2, 3, 1])
    })

    it('should return [3, 1, 2] for [1, 2, 3] starting at 2 with size 3', () => {
      const arr = [1, 2, 3]
      const output = circularSelect(arr, 2, 3)

      assert.equals(output, [3, 1, 2])
    })
  })

  describe('circularReplace', () => {
    const circularReplace = tools.circularReplace
    it('should return [3,2,1] for [1,2,3], [3,2,1], 0', () => {
      const output = circularReplace([1, 2, 3], [3, 2, 1], 0)

      assert.equals(output, [3, 2, 1])
    })

    it('should return [4, 3, 0, 1, 2] for [2, 1, 0, 3, 4], [1, 2, 4, 3], 3', () => {
      const output = circularReplace([2, 1, 0, 3, 4], [1, 2, 4, 3], 3)

      assert.equals(output, [4, 3, 0, 1, 2])
    })
  })

  describe('calcCircularPosition', () => {
    const calcCircularPosition = tools.calcCircularPosition
    it('should return position when steps is 0', () => {
      const output = calcCircularPosition(0, 0)

      assert.equals(output, 0)
    })

    it('should return 2 when position=0, steps=2, size=3', () => {
      const output = calcCircularPosition(0, 2, 3)

      assert.equals(output, 2)
    })

    it('should return 3 when position=3, steps=4, size=4', () => {
      const output = calcCircularPosition(3, 4, 4)

      assert.equals(output, 3)
    })

    it('should return 2 when position=3, steps=3, size=4', () => {
      const output = calcCircularPosition(3, 3, 4)

      assert.equals(output, 2)
    })
  })
})
