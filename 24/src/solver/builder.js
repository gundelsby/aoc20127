function calcBridgeStrength (bridge) {
  return bridge.reduce((sum, component) => {
    return sum + component.getPinCount()
  }, 0)
}

function addComponentToBridge (current, unused, store, nextWanted) {
  if (!unused || unused.length === 1) {
    store.push(current)
    return
  }

  const usable = unused.filter(c => c.ports.some(p => p.pins === nextWanted))
  if (usable.length === 0) {
    store.push(current)
    return
  }

  usable.forEach(c => {
    const bridge = [...current, c]
    const unconnected = c.ports[0].pins === nextWanted ? c.ports[1] : c.ports[0]
    addComponentToBridge(bridge, unused.filter(cp => cp !== c), store, unconnected.pins)
  })
}

function buildBridges (components) {
  const bridges = []
  components.filter(c => c.ports.some(p => p.pins === 0))
    .forEach(c => {
      const nextWanted = c.ports.find(p => p.pins !== 0).pins
      addComponentToBridge([c], components.filter(cp => cp !== c), bridges, nextWanted)
    })

  return bridges
}

function sortByStrength (a, b) {
  const aStrength = calcBridgeStrength(a)
  const bStrength = calcBridgeStrength(b)

  return aStrength > bStrength ? -1 : aStrength < bStrength ? 1 : 0
}

function getStrongest (components) {
  const bridges = buildBridges(components)

  bridges.sort(sortByStrength)

  return bridges[0]
}

function getLongest (components) {
  const bridges = buildBridges(components)

  bridges.sort((a, b) => {
    return a.length > b.length ? -1 : a.length < b.length ? 1 : sortByStrength(a, b)
  })

  return bridges[0]
}

module.exports = {
  getStrongest,
  getLongest
}
