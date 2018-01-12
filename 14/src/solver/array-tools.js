module.exports = {
  circularSelect: (arr, start, size) => {
    let selection = arr.slice(start, start + size)
    if (selection.length < size) {
      selection = selection.concat(arr.slice(0, size - selection.length))
    }

    return selection
  },
  circularReplace: (arr, newValues, start) => {
    let replaced = arr.slice()
    let position = start
    for (let i = 0; i < newValues.length; i++) {
      replaced[position] = newValues[i]
      if (++position >= replaced.length) {
        position = 0
      }
    }

    return replaced
  },
  calcCircularPosition: (position, steps, arraySize) => {
    if (steps === 0) {
      return position
    }

    const min = 0
    const max = arraySize - 1
    let newPos = position + steps

    while (newPos > max) {
      newPos -= arraySize
    }

    return newPos
  }
}
