const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('return empty array if something other than a number is passed', () => {
    expect(printBinary('Felipe')).toEqual([]);
    expect(printBinary()).toEqual([]);
    expect(printBinary([1])).toEqual([]);
  });

  it('return empty array if parameter function is 0', () => {
    expect(printBinary(0)).toEqual([]);
  });

  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toEqual(['0', '1']);
  });

  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toEqual(['00', '01', '10', '11']);
  });

  it('should print binary numbers until 3', () => {
    expect(printBinary(3)).toEqual(['000', '001', '010', '011', '100', '101', '110', '111']);
  });
});
