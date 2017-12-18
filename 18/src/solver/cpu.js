module.exports = class {
  constructor ({id, sendMessage}) {
    this.registers = {
      p: id
    }
    this.inbox = []
    this.sendMessage = sendMessage
    this.messagesSent = 0
    this.waiting = false
    this.id = id
  }

  receiveValue (value) {
    this.inbox.push(value)
  }

  sendValue (value) {
    this.messagesSent++
    this.sendMessage(value)

    return true
  }

  getValue (input) {
    if (Number.isNaN(Number.parseInt(input))) {
      return this.registers[input] || 0
    }

    return Number.parseInt(input)
  }

  // set X Y sets register X to the value of Y.
  set (register, value) {
    this.registers[register] = value
    return true
  }

  // add X Y increases register X by the value of Y.
  add (register, value) {
    this.registers[register] = this.getValue(register) + value
    return true
  }

  // mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
  mul (register, value) {
    this.registers[register] = this.getValue(register) * value
    return true
  }

  // mod X Y sets register X to the remainder of dividing the value contained in register X by the value of Y (that is, it sets X to the result of X modulo Y).
  mod (register, value) {
    this.registers[register] = this.getValue(register) % value
    return true
  }

  // jgz X Y jumps with an offset of the value of Y, but only if the value of X is greater than zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)
  jump (test, offset) {
    if (test > 0) {
      this.instructionPointer += offset
    }
    return true
  }

  receive (register) {
    if (this.inbox.length) {
      this.waiting = false
      this.registers[register] = this.inbox.shift()
      return true
    }

    this.waiting = true
    return false
  }

  process (instruction) {
    const parts = instruction.split(/\s/)

    switch (parts[0]) {
      case 'set':
        return this.set(parts[1], this.getValue(parts[2]))
      case 'add':
        return this.add(parts[1], this.getValue(parts[2]))
      case 'mul':
        return this.mul(parts[1], this.getValue(parts[2]))
      case 'mod':
        return this.mod(parts[1], this.getValue(parts[2]))
      case 'rcv':
        return this.receive(parts[1])
      case 'jgz':
        return this.jump(this.getValue(parts[1]), this.getValue(parts[2]))
      case 'snd':
        return this.sendValue(this.getValue(parts[1]))
    }
  }

  loadProgram (instructions) {
    this.program = instructions
    this.instructionPointer = 0
    this.initialized = true
  }

  run () {
    if (this.completed) {
      return
    }

    this.running = true
    while (this.running && this.instructionPointer < this.program.length) {
      const position = this.instructionPointer
      const instruction = this.program[position]
      this.running = this.process(instruction)
      if (this.running && position === this.instructionPointer) {
        // increase position if no jump occured
        this.instructionPointer++
      }
    }

    if (this.instructionPointer >= this.program.length) {
      this.completed = true
    }
  }
}
