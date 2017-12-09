module.exports = {
  calcStreamPoints: (input) => {
    let score = 0
    let nestLevel = 0
    let inGarbageBlock = false
    let ignoreNext = false
    let garbageValue = 0

    input.split('').forEach(char => {
      if (ignoreNext) {
        ignoreNext = false
        return
      }

      if (char === '!') {
        ignoreNext = true
        return
      }

      if (inGarbageBlock && char === '>') {
        inGarbageBlock = false
        return
      }

      if (inGarbageBlock) {
        garbageValue++
        return
      }

      switch (char) {
        case '{':
          nestLevel++
          score += nestLevel
          break
        case '}':
          nestLevel--
          break
        case '<':
          inGarbageBlock = true
          break
      }
    })

    return {score, garbageValue}
  }
}
