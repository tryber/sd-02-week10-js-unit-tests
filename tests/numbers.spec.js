const numbers = require('../src/numbers');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o valor true se todos os elementos forem do tipo Number
// A função deve retornar o valor false se algum elemento não for do tipo Number

describe('#numbers', () => {
  it('the param 4 are a number', () => {
    expect(numbers(4)).toBeTruthy();
  });

  it('the param Johnatas are not a number', () => {
    expect(numbers('Johnatas')).toBeFalsy();
  });

  it('the params 1, 4, 3, 2, 5 are numbers', () => {
    expect(numbers(1, 4, 3, 2, 5)).toBeTruthy();
  });

  it('the params 1, "a", 3 are not numbers', () => {
    expect(numbers(1, 'a', 3)).toBeFalsy();
  });

  it('the params 1 3, NaN are numbers', () => {
    expect(numbers(1, 3, NaN)).toBeTruthy();
  });
});
