module.exports = {
  circularSelect: (arr, start, size) => {
    let selection = arr.slice(start, size)
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

    return position + steps <= arraySize - 1 ? position + steps : position + arraySize % steps
  }
}
