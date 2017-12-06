const input = '14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4'
const solver = require('./solver/solver')

console.log('Solution #1:', solver.repeatCounter(input).reallocCount)
console.log('Solution #2:', solver.getLoopSize(input))
