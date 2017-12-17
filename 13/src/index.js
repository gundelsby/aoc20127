const input = require('fs').readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

// console.log('Solution', solver.part1(input.split(/\r?\n/g)))
console.log('Solution', solver.part2(input.split(/\r?\n/g)))
