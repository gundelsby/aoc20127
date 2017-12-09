const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

console.log('Solution #1', solver.calcStreamPoints(input).score)
console.log('Solution #2', solver.calcStreamPoints(input).garbageValue)
