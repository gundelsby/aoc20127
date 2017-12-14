const {assert, refute} = require('../test-helper')

describe('Testing assets should work', () => {
  it('assert(true) should not fail', () => {
    assert(true, 'The canary died.')
  })

  it('refute(false) should not fail', () => {
    refute(false)
  })
})
