function hasOnlyUniqueWords (phrase) {
  const words = phrase.split(/\s/)
  const wordsSet = new Set(words)

  return words.length === wordsSet.size
}

function hasUniqueWordsAndNoAnagrams (phrase) {
  if (!hasOnlyUniqueWords(phrase)) {
    return false
  }

  const sortedWords = phrase.split(/\s/).map((word) => {
    return word.split('').sort().join('')
  })

  return sortedWords.length === new Set(sortedWords).size
}

module.exports = {
  hasOnlyUniqueWords,
  hasUniqueWordsAndNoAnagrams
}
