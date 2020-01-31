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

  it('should print binary numbers until 4', () => {
    expect(printBinary(4)).toEqual([
      '0000', '0001', '0010',
      '0011', '0100', '0101',
      '0110', '0111', '1000',
      '1001', '1010', '1011',
      '1100', '1101', '1110',
      '1111',
    ]);
  });

  it('função com valor 0 ou sem parâmetro', () => {
    expect(printBinary(0)).toEqual([]);
    expect(printBinary()).toEqual([]);
  });
});
