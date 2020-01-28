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

  it('the params carro, casa, lapis, Ronaldinho o Bruxo are not duplicated', () => {
    expect(duplicate('carro', 'casa', 'lapis', 'Ronaldinho o Bruxo')).toBeFalsy();
  });

  it('the params carro, casa, lapis, Ronaldinho o Bruxo, Assina Fernandão, Ronaldinho o Bruxo  are duplicated', () => {
    expect(duplicate('carro', 3, 'casa', 'lapis', 'Ronaldinho o Bruxo', 10, 'Assina Fernandão', 'Ronaldinho o Bruxo')).toBeTruthy();
  });
});
