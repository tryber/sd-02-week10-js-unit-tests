const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('the params a, b, c are not duplicated', () => {
    expect(duplicate('a', 'b', 'c')).toBeFalsy();
  });

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
  });

  it('the params 1, a, a, b, 2 are duplicated', () => {
    expect(duplicate(1, 'a', 'a', 'b', 2)).toBeTruthy();
  });
});
