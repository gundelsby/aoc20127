const arrayTools = require('./array-tools')

function createList (size) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push(i)
  }

  return list
}

module.exports = ({lengths = [], position = 0, skipSize = 0, listSize = 256}) => {
  let list = createList(listSize)

  lengths.forEach(length => {
    const reversed = arrayTools.circularSelect(list, position, length).reverse()
    list = arrayTools.circularReplace(list, reversed, position)
    position = arrayTools.calcCircularPosition(position, length + skipSize, list.length)
    skipSize++
  })

  return {hash: list, position, skipSize}
}
