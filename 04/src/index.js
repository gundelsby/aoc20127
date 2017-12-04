const solver = require('./solver/solver')
const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8')

console.log('Part 1:', solver.getValidPhraseCount(input))
