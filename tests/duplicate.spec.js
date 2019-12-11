const duplicate = require('../src/duplicate');

describe('#duplicate', () => {
  it('the params 1, 2, 3 are not duplicated', () => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
  })

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
  })

  it('the params "1", "2", "3", "2" are duplicated', () => {
    expect(duplicate("1", "2", "3", "2")).toBeTruthy();
  })

  // descomente os testes e implemente-os

  // it('the params 1, 2, "3", "5", "1" are not duplicated')
})
