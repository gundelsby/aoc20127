const directions = {
  LEFT: 'L',
  RIGHT: 'R'
}

class Cursor {
  constructor (tape) {
    this.tape = tape
    this.position = 0
  }

  move (direction) {
    switch (direction) {
      case directions.LEFT:
        this.position -= 1
        break
      case directions.RIGHT:
        this.position += 1
        break
    }
  }

  read () {
    return this.tape.read(this.position)
  }

  write (value) {
    this.tape.write(this.position, value)
  }
}

module.exports = {
  Cursor,
  directions
}
