const hasher = require('./hasher')

function createLengthsFromStrings (strings) {
  const lengths = []
  strings.forEach(s => {
    const codes = s.split('').map(c => {
      return c.charCodeAt(0)
    })
    lengths.push(...codes)
  })
  lengths.push(...[17, 31, 73, 47, 23])

  return lengths
}

function createSparseHash (lengths) {
  let position = 0
  let skipSize = 0
  let hashArr = []

  for (let i = 0; i < 64; i++) {
    const result = hasher(lengths, position, skipSize)
    position = result.position
    skipSize = result.skipSize
    hashArr = result.hash
  }

  return hashArr
}

function createDenseHash (sparseHash, chunkSize) {
  const chunks = []
  while (sparseHash.length > 0) {
    const chunk = sparseHash.splice(0, chunkSize)
    chunks.push(chunk)
  }

  return chunks.map(chunk => {
    console.log(chunk)
    return chunk.reduce((result, number) => {
      return result ^ number
    })
  })
}

module.exports = {
  part1: (lengths, listSize) => {
    const result = hasher({lengths, listSize})

    return result.hash[0] * result.hash[1]
  },
  part2: (strings, listSize) => {
    const lengths = createLengthsFromStrings(strings)
    const sparseArr = createSparseHash(lengths)
    const dense = createDenseHash(sparseArr, 16)
    console.log(dense)

    return dense.map(base10 => {
      const hex = base10.toString(16)

      return hex.length > 1 ? hex : '0' + hex
    }).join('')
  }
}
