const solver = require('./solver/solver')

console.log('Solution (spiral)', solver.sequential(347991))
console.log('Solution (stress)', solver.stress(347991))
