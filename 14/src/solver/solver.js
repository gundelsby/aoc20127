const hasher = require('./hasher')

function wipeRegion (grid, {x, y}) {
  if (grid[y] && grid[y][x] === '1') {
    grid[y][x] = '0'
    wipeRegion(grid, {x: x + 1, y})
    wipeRegion(grid, {x: x - 1, y})
    wipeRegion(grid, {x, y: y - 1})
    wipeRegion(grid, {x, y: y + 1})
  }
}

module.exports = (input, rows) => {
  const hashes = [...Array(rows)].map((cell, index) => {
    return hasher(input + '-' + index)
  })
  return {
    part1: () => {
      return hashes.reduce((sum, hash) => {
        return sum + hash.split('').reduce((lsum, digit) => {
          const positiveBitCount = parseInt(digit, 16).toString(2).split('').filter(x => x === '1').length
          return lsum + positiveBitCount
        }, 0)
      }, 0)
    },
    part2: () => {
      const grid = hashes.map(hash => {
        const parts = hash.split('').map(digit => {
          const bin = parseInt(digit, 16).toString(2)
          const pad = [...Array(4 - bin.length)].map(n => '0')
          return [...pad, ...bin.split('')]
        })

        const row = []
        parts.forEach(part => {
          row.push(...part)
        })

        return row
      })

      let regions = 0

      for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
          if (grid[y][x] === '1') {
            regions++
            wipeRegion(grid, {x, y})
          }
        }
      }

      return regions
    }
  }
}
