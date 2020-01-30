const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('the params 1, 2, 3 are not duplicated', () => {
    expect(duplicate(1, 2, 3)).toBe(false);
  });

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBe(true);
  });

  it('the params b, d, a, carro are not duplicated', () => {
    expect(duplicate('b', 'd', 'a', 'carro')).toBe(false);
  });

  it('the params a, b, d, a, a, carro are duplicated', () => {
    expect(duplicate('a', 'b', 'd', 'a', 'a', 'carro')).toBe(true);
  });

  it('the params abelha, 1, a, v are not duplicated', () => {
    expect(duplicate('abelha', 1, 'a', 'v')).toBe(false);
  });

  it('the params abelha, v, 1, 45, v, 2.9 are duplicated', () => {
    expect(duplicate('abelha', 'v', 1, 45, 'v', 2.9)).toBe(true);
  });

  it('the params a, 3, x, 3, a, 2.9 are duplicated', () => {
    expect(duplicate('a', 3, 'x', 3, 'a', 2.9)).toBe(true);
  });
});
