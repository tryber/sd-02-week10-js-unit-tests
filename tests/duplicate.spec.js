const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('the params 1, 2, 3 are not duplicated', () => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
  });

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
  });

  test('A função deve receber uma quantidade qualquer de parâmetros', () => {
    expect(duplicate(1, 2, 3, 4, 5, 6, 7)).toBeFalsy();
  });

  test('A função pode receber strings e números', () => {
    expect(duplicate('a', 2, 'a', 5)).toBeTruthy();
  });

  test('A função retornar true se existirem valores duplicados e false caso contrário', () => {
    expect(duplicate(1, 2, 1, 3)).toBeTruthy();
    expect(duplicate(1, 2, 3)).toBeFalsy();
  })
});
