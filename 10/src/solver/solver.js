const arrayTools = require('./array-tools')

function createList (size) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push(i)
  }

  return list
}

module.exports = {
  part1: (lengths, listSize) => {
    let position = 0
    let skipSize = 0
    let list = createList(listSize)
    console.log(list)

    lengths.forEach(length => {
      console.log(position, length, skipSize)
      const reversed = arrayTools.circularSelect(list, position, length).reverse()
      list = arrayTools.circularReplace(list, reversed, position)
      position = arrayTools.calcCircularPosition(position, length + skipSize, list.length)
      skipSize++
      console.log(list)
    })

    return list[0] * list[1]
  }
}
