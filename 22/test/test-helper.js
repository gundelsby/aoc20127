const referee = require('referee')
const {ascii} = require('formatio')

referee.format = ascii

const {assert, refute} = referee
module.exports = {
  assert,
  refute
}
