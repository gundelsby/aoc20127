class Rule {
  constructor ({condition, value, direction, nextState}) {
    this.condition = condition
    this.value = value
    this.direction = direction
    this.nextState = nextState
  }
}

class State {
  constructor (...rules) {
    this.rules = rules
  }

  execute (cursor) {
    const dataValue = cursor.read()
    const rule = this.rules.find(rule => rule.condition === dataValue)

    cursor.write(rule.value)
    cursor.move(rule.direction)
    return rule.nextState
  }
}

module.exports = {
  State,
  Rule
}
