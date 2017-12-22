const directions = {
  n: {x: 0, y: -1},
  w: {x: -1, y: 0},
  s: {x: 0, y: 1},
  e: {x: 1, y: 0}
}

module.exports = class {
  constructor (infectedNodes) {
    this.infectedNodes = infectedNodes || {}
    // The virus carrier begins in the middle of the map facing up.
    this.currentPosition = {x: 0, y: 0}
    this.direction = {x: 0, y: -1}
    this.nodesInfected = 0
  }

  isInfected ({x, y}) {
    return Boolean(this.infectedNodes[y] && this.infectedNodes[y].indexOf(x) > -1)
  }

  turnLeft () {
    if (this.direction.x === directions.e.x) {
      this.direction = directions.n
    } else if (this.direction.y === directions.n.y) {
      this.direction = directions.w
    } else if (this.direction.x === directions.w.x) {
      this.direction = directions.s
    } else if (this.direction.y === directions.s.y) {
      this.direction = directions.e
    } else {
      throw new Error('unable to turn left from ' + this.direction)
    }
  }

  turnRight () {
    if (this.direction.x === directions.e.x) {
      this.direction = directions.s
    } else if (this.direction.y === directions.n.y) {
      this.direction = directions.e
    } else if (this.direction.x === directions.w.x) {
      this.direction = directions.n
    } else if (this.direction.y === directions.s.y) {
      this.direction = directions.w
    } else {
      throw new Error('unable to turn right from ' + this.direction)
    }
  }

  move () {
    this.currentPosition.x += this.direction.x
    this.currentPosition.y += this.direction.y
  }

  flip (isInfected, {x, y}) {
    if (isInfected) {
      this.infectedNodes[y].splice(this.infectedNodes[y].indexOf(x), 1)
    } else {
      this.infectedNodes[y] ? this.infectedNodes[y].push(x) : this.infectedNodes[y] = [x]
      this.nodesInfected++
    }
  }

  burst () {
    const isInfected = this.isInfected(this.currentPosition)
    this.flip(isInfected, this.currentPosition)

    if (isInfected) {
      this.turnRight()
    } else {
      this.turnLeft()
    }

    this.move()
  }
}
