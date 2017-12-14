const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

console.log('Solution #1', solver.part1(input.split(',').map(element => parseInt(element, 10)), 256))
console.log('Solution #2', solver.part2(input.split(''), 256))
