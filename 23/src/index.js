const input = require('fs').readFileSync('input.txt', 'utf-8')
const input2 = require('fs').readFileSync('input2.txt', 'utf-8')
const solver = require('./solver/solver')

console.log('Solution #1:', solver.part1(input.split(/\r?\n/g)))
console.log('Solution #2:', solver.part2r())
