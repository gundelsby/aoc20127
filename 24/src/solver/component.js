class Component {
  constructor (description) {
    this.ports = description.split('/').map((pins) => {
      return {pins: Number(pins), used: false}
    })
  }

  getPinCount () {
    return this.ports.reduce((sum, port) => {
      return sum + Number(port.pins)
    }, 0)
  }

  getAvailablePorts () {
    return this.ports.filter(port => port.used === false)
  }
}

module.exports = Component
