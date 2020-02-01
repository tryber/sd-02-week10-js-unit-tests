const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toEqual(['0', '1']);
  });

  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toEqual(['00', '01', '10', '11']);
  });

  it('if parameter is not a number, print an empty array', () => {
    expect(printBinary('teste')).toEqual([]);
  });

  it('if parameter is 0, print an empty array', () => {
    expect(printBinary(0)).toEqual([]);
  });

  it('if parameter is a negative number, print an empty array', () => {
    expect(printBinary(-5)).toEqual([]);
  });
});
