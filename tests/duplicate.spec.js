const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('should receive an varivel size of parameters', () => {
    const paramsN = Math.floor(Math.random() * 1000) + 1;
    const paramsValue = [];
    for (let i = 0; i < paramsN; i++) {
      paramsValue.push(Math.floor(Math.random() * 20) + 1);
    }
    expect(typeof duplicate(...paramsValue)).toBe('boolean');
  });

  it('should receive strings and numbers', () => {
    expect(typeof duplicate('s', 1, 3, 'coisa')).toBe('boolean');
  });

  it('should return true', () => {
    expect(duplicate(1,2,3,'e',5,'e')).toBeTruthy();
  });

  it('should return false', () => {
    expect(duplicate(1,2,3,'e',5)).toBeFalsy();
  });
});
