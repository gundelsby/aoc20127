function exchange ({input, p1, p2}) {
  const output = [...input]
  output[p1] = input[p2]
  output[p2] = input[p1]

  return output
}

module.exports = {
  // Spin, written sX, makes X programs move from the end to the front, but maintain their order otherwise. (For example, s3 on abcde produces cdeab).
  spin: ({input, size}) => {
    return input.slice(input.length - size).concat(input.slice(0, input.length - size))
  },
  // Exchange, written xA/B, makes the programs at positions A and B swap places.
  exchange,
  // Partner, written pA/B, makes the programs named A and B swap places.
  partner: ({input, nameA, nameB}) => {
    const p1 = input.findIndex(value => value === nameA)
    const p2 = input.findIndex(value => value === nameB)

    return exchange({input, p1, p2})
  }
}
