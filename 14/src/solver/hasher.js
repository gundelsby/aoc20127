const arrayTools = require('./array-tools')
const DEFAULT_LIST_SIZE = 256

function createList (size = DEFAULT_LIST_SIZE) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push(i)
  }
  return list
}

const defaultList = createList()

function createLengthsFromString (input) {
  const lengths = input.split('').map(c => {
    return c.charCodeAt(0)
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

function hasher ({lengths = [], position = 0, skipSize = 0, list = defaultList}) {
  lengths.forEach(length => {
    const reversed = arrayTools.circularSelect(list, position, length).reverse()
    list = arrayTools.circularReplace(list, reversed, position)
    position = arrayTools.calcCircularPosition(position, length + skipSize, list.length)
    skipSize++
  })

  return {hash: list, position, skipSize}
}

module.exports = (input) => {
  const lengths = createLengthsFromString(input)
  const sparseArr = createSparseHash(lengths)
  const dense = createDenseHash(sparseArr, 16)

  return dense.map(base10 => {
    const hex = base10.toString(16)

    return hex.length > 1 ? hex : '0' + hex
  }).join('')
}
