const hasher = require('./hasher')

const DEFAULT_LIST_SIZE = 256

function createList (size = DEFAULT_LIST_SIZE) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push(i)
  }
  return list
}

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
  let list = createList()

  for (let i = 0; i < 64; i++) {
    const result = hasher({lengths, position, skipSize, list})
    position = result.position
    skipSize = result.skipSize
    list = result.hash
  }

  return list
}

function createDenseHash (sparseHash, chunkSize) {
  const chunks = []
  while (sparseHash.length > 0) {
    const chunk = sparseHash.splice(0, chunkSize)
    chunks.push(chunk)
  }

  return chunks.map(chunk => {
    return chunk.reduce((result, number) => {
      return result ^ number
    })
  })
}

module.exports = {
  part1: (lengths, listSize) => {
    const list = createList(listSize)
    const result = hasher({lengths, list})

    return result.hash[0] * result.hash[1]
  },
  part2: (strings, listSize) => {
    const lengths = createLengthsFromStrings(strings)
    const sparseArr = createSparseHash(lengths)
    const dense = createDenseHash(sparseArr, 16)

    return dense.map(base10 => {
      const hex = base10.toString(16)

      return hex.length > 1 ? hex : '0' + hex
    }).join('')
  }
}
