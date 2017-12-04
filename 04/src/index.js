const solver = require('./solver/solver')
const fs = require('fs')
const liner = require('./solver/liner')

const input = fs.readFileSync('input.txt', 'utf-8')

console.log('Part 1:', solver.getValidPhraseCount(input, liner.hasOnlyUniqueWords))
console.log('Part 2:', solver.getValidPhraseCount(input, liner.hasUniqueWordsAndNoAnagrams))
