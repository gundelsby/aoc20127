const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split(/\n/)
const solver = require('./solver/solver')

console.log('Solution', solver.findRoot(input))
