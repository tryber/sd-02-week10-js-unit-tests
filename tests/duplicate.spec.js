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

  it('the params joao, rodrigo, mateus are not duplicated', () => {
    expect(duplicate('joao', 'rodrigo', 'mateus')).toBeFalsy();
  });

  it('the params joao, joao, rodrigo, mateus are duplicated', () => {
    expect(duplicate('joao', 'joao', 'rodrigo', 'mateus')).toBeTruthy();
  });

  it('the params joao, 2, 3 are not duplicated', () => {
    expect(duplicate('joao', 2, 3)).toBeFalsy();
  });

  it('the params 1, rodrigo, 3, rodrigo are duplicated', () => {
    expect(duplicate(1, 'rodrigo', 3, 'rodrigo')).toBeTruthy();
  });

  it('the params 1, Rodrigo, 3, rodrigo are not duplicated', () => {
    expect(duplicate(1, 'Rodrigo', 3, 'rodrigo')).toBeFalsy();
  });
});
