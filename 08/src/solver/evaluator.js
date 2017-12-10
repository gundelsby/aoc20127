function getRealValue (variable, getRegisterValue) {
  const parsedInt = Number.parseInt(variable, 10)

  return Number.isNaN(parsedInt) ? getRegisterValue(variable) : parsedInt
}

module.exports = {
  evaluate: (expression, getRegisterValue) => {
    const parts = expression.split(' ')
    const a = getRealValue(parts[0], getRegisterValue)
    const b = getRealValue(parts[2], getRegisterValue)
    const exprWithValues = `${a} ${parts[1]} ${b}`
    
    return eval(exprWithValues)
  }
}
