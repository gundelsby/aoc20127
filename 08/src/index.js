const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split(/\s{2,}|\n/)
const solver = require('./solver/solver')

console.log('Solution', solver.findMaxRegisterValue(input))
