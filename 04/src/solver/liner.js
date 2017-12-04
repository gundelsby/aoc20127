module.exports = {
  hasOnlyUniqueWords: (phrase) => {
    const words = phrase.split(/\s/)
    const wordsSet = new Set(words)

    return words.length === wordsSet.size
  }
}
