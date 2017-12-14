const hasher = require('../../src/solver/hasher')
const {assert, refute} = require('../test-helper')

describe('Hasher', () => {
  it('should return hash: [3, 4, 2, 1, 0] for a five element list using input [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, listSize: 5})

    assert.match(output, {
      hash: [3, 4, 2, 1, 0]
    })
  })

  it('should return position: 4 for a five element list using input [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, listSize: 5})

    assert.match(output, {
      position: 4
    })
  })

  it('should return skipSize: 4 for a five element list using input [3, 4, 1, 5]', () => {
    const lengths = [3, 4, 1, 5]
    const output = hasher({lengths, listSize: 5})

    assert.match(output, {
      skipSize: 4
    })
  })
})
