const fs = require('fs')
const liner = require('./liner')

module.exports = (filename) => {
  let checksum = 0
  console.log('Reading file', filename)

  try {
    const data = fs.readFileSync(filename, 'utf-8')
    data.split('\n').forEach((line) => {
      checksum += liner(line)
    })
  } catch (err) {
    console.log('Error reading file', filename, err)
    return null
  }

  return checksum
}
