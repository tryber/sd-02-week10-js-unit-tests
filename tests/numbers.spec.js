const numbers = require('../src/numbers')

describe('#numbers', () => {
  it('the params 1, 4, 3, 2, 5 are numbers', () => {
    expect(numbers(1, 4, 3, 2, 5)).toBeTruthy()
  })

  it('the params 1, "a", 3 are not numbers', () => {
    expect(numbers(1, "a", 3)).toBeFalsy()
  })

  it('the params 1 3, NaN are numbers', () => {
    expect(numbers(1, 3, NaN)).toBeTruthy()
  })
})