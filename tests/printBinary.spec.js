const printBinary = require('../src/printBinary');

describe('#printBinary', () => {
  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toBe(['0', '1']);
  });

  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toBe(['00', '01', '10', '11']);
  });

  it('should print binary numbers until 3', () => {
    expect(printBinary(3)).toBe(['000', '001', '010', '011', '100', '101', '110', '111']);
  });

  // descomente os testes e implemente-os

  // it('should print binary numbers until 4')
});
