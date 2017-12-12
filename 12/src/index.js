const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

const target = '0'
console.log(`Number of programs connected to program #${target}`, solver.part1(input.split(/\r?\n/g), target))
console.log(`Number of program groups`, solver.part2(input.split(/\r?\n/g)))
