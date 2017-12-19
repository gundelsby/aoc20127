const input = require('fs').readFileSync('input.txt', 'utf-8')
const solver = require('./solver/solver')

console.log('Solution', solver(input).foundLetters)
console.log('Solution', solver(input).stepsMade)
