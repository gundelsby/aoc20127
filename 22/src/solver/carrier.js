const directions = {
  n: {x: 0, y: -1},
  w: {x: -1, y: 0},
  s: {x: 0, y: 1},
  e: {x: 1, y: 0}
}

const states = {
  WEAK: 'W',
  FLAGGED: 'F',
  INFECTED: '#'
}

module.exports = class {
  constructor (nodes) {
    this.nodes = nodes || {}
    // The virus carrier begins in the middle of the map facing up.
    this.currentPosition = {x: 0, y: 0}
    this.direction = {x: 0, y: -1}
    this.nodesInfected = 0
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

  reverseDirection () {
    this.direction.x *= -1
    this.direction.y *= -1
  }

  move () {
    this.currentPosition.x += this.direction.x
    this.currentPosition.y += this.direction.y
  }

  getNode ({x, y}) {
    return (this.nodes[y] && this.nodes[y].find(node => node.x === x)) || null
  }

  setState ({x, y}, state) {
    const node = {x, value: state}
    this.nodes[y] ? this.nodes[y].push(node) : this.nodes[y] = [node]
  }

  clean ({x, y}) {
    const nodeIndex = this.nodes[y] && this.nodes[y].find(node => node.x === x)
    if (nodeIndex) {
      this.nodes[y].splice(nodeIndex, 1)
    }
  }

  burst () {
    const currentNode = this.getNode(this.currentPosition)

    if (!currentNode) {
      // node is clean
      this.setState(this.currentPosition, states.WEAK)
      // If it is clean, it turns left.
      this.turnLeft()
    } else {
      switch (currentNode.value) {
        case states.WEAK:
        // If it is weakened, it does not turn, and will continue moving in the same direction.
          this.setState(this.currentPosition, states.INFECTED)
          this.nodesInfected++
          break
        case states.FLAGGED:
          this.clean(this.currentPosition)
        // If it is flagged, it reverses direction
          this.reverseDirection()
          break
        case states.INFECTED:
          this.setState(this.currentPosition, states.FLAGGED)
        // If it is infected, it turns right.
          this.turnRight()
          break
        default:
          throw new Error('Illegal status for node', this.currentPosition, currentNode.value)
      }
    }

    this.move()
  }
}
