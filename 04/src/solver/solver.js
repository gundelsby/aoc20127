const liner = require('./liner')

module.exports = {
  getValidPhraseCount: (input) => {
    const lines = input.split(/\n/)
    return lines.reduce((numValid, line) => {
      if (liner.isValid(line)) {
        return numValid + 1
      }

      return numValid
    }, 0)
  }
}
