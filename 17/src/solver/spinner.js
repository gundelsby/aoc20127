function calcCircularPosition (position, steps, arraySize) {
  if (steps === 0 || arraySize === 1) {
    return position
  }

  const max = arraySize - 1
  let newPos = position + steps

  while (newPos > max) {
    newPos -= arraySize
  }
  return newPos
}

class Spinner {
  constructor ({stepSize}) {
    this.buffer = [0]
    this.position = 0
    this.stepSize = stepSize
    this.currentValue = 0
  }

  move () {
    this.position = calcCircularPosition(this.position, this.stepSize, this.buffer.length)
  }

  insert (value) {
    if (this.position === this.buffer.length - 1) {
      this.buffer.push(value)
    } else {
      this.buffer = this.buffer.slice(0, this.position + 1)
        .concat(value)
        .concat(this.buffer.slice(this.position + 1))
    }

    this.position = calcCircularPosition(this.position, 1, this.buffer.length)
  }

  spin () {
    this.move()
    this.insert(++this.currentValue)
  }
}

module.exports = Spinner
