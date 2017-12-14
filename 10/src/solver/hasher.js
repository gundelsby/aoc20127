const arrayTools = require('./array-tools')

module.exports = ({lengths = [], position = 0, skipSize = 0, list = []}) => {
  lengths.forEach(length => {
    const reversed = arrayTools.circularSelect(list, position, length).reverse()
    list = arrayTools.circularReplace(list, reversed, position)
    position = arrayTools.calcCircularPosition(position, length + skipSize, list.length)
    skipSize++
  })

  return {hash: list, position, skipSize}
}
