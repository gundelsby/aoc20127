function calcAbsolute ({x, y, z}) {
  return Math.abs(x) + Math.abs(y) + Math.abs(z)
}

module.exports = {
  part1: (input) => {
    const particles = input.map((line, index) => {
      const props = {id: index}
      line.split(', ').map(part => {
        const name = part.match(/^\w+/g)[0]
        const coords = part.match(/(-?\d+)/g)

        return {
          name,
          x: Number(coords[0]),
          y: Number(coords[1]),
          z: Number(coords[2])
        }
      }).forEach(vector => {
        props[vector.name] = {
          x: vector.x,
          z: vector.z,
          y: vector.z
        }
      })

      return props
    }).filter(particle => {
      return calcAbsolute(particle.a) === 0
    })
    .sort((a, b) => {
      const av = calcAbsolute(a.v)
      const bv = calcAbsolute(b.v)

      if (av !== bv) {
        return av < bv ? -1 : 1
      } else {
        const ap = calcAbsolute(a.p)
        const bp = calcAbsolute(b.p)

        return ap < bp ? -1 : ap === bp ? 0 : 1
      }
    })

    const a = particles[0]
    const b = particles[1]

    console.log(a, calcAbsolute(a.a), calcAbsolute(a.v), calcAbsolute(a.p))
    console.log(b, calcAbsolute(b.a), calcAbsolute(b.v), calcAbsolute(b.p))
    console.log(particles.length)
  }
}
