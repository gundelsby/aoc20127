const input = require('fs').readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

console.log('Solution #1', solver.part1(input))
console.log('Solution #2', solver.part2(input))
