const fs = require('fs')
const liner = require('./liner')

module.exports = (filename) => {
  let hlChecksum = 0
  let evenChecksum = 0
  console.log('Reading file', filename)

  try {
    const data = fs.readFileSync(filename, 'utf-8')
    data.split('\n').forEach((line) => {
      hlChecksum += liner.highLow(line)
      evenChecksum += liner.evenSteven(line)
    })
  } catch (err) {
    console.log('Error reading file', filename, err)
    return null
  }

  return {
    highLow: hlChecksum,
    evenSteven: evenChecksum
  }
}
