module.exports = {
  getValidPhraseCount: (input, validator) => {
    const lines = input.split(/\n/)
    return lines.reduce((numValid, line) => {
      if (validator(line)) {
        return numValid + 1
      }

      return numValid
    }, 0)
  }
}
