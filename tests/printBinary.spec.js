const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('Retorna array vazio se algo além de número for passado', () => {
    expect(printBinary('Giorgia')).toEqual([]);
    expect(printBinary()).toEqual([]);
    expect(printBinary([1])).toEqual([]);
  });

  it('Retornar array vazio se 0 for parâmetro', () => {
    expect(printBinary(0)).toEqual([]);
  });

  it('Números binários até 1', () => {
    expect(printBinary(1)).toEqual(['0', '1']);
  });

  it('Números binários até 2', () => {
    expect(printBinary(2)).toEqual(['00', '01', '10', '11']);
  });

  it('Números binários até 3', () => {
    expect(printBinary(3)).toEqual(['000', '001', '010', '011', '100', '101', '110', '111']);
  });
});
