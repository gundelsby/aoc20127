const hasher = require('../../src/solver/hasher')
const {assert, refute} = require('../test-helper')

describe('Hasher', () => {
  it('should return hash: [3, 4, 2, 1, 0] for [0, 1, 2, 3, 4] using lengths [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, list: [0, 1, 2, 3, 4]})

    assert.match(output, {
      hash: [3, 4, 2, 1, 0]
    })
  })

  it('should return position: 4 for [0, 1, 2, 3, 4] using lengths [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, list: [0, 1, 2, 3, 4]})

    assert.match(output, {
      position: 4
    })
  })

  it('should return skipSize: 4 for [0, 1, 2, 3, 4] using lengths [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, list: [0, 1, 2, 3, 4]})

    assert.match(output, {
      skipSize: 4
    })
  })
})
