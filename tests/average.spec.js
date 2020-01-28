const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of Mateus should be undefined', () => {
    expect(average('Mateus')).toBe(undefined);
  });
  it('expect average of null should be undefined', () => {
    expect(average(null)).toBe(undefined);
  });
  it('expect average of 3, 4, 5, "6" should be undefined', () => {
    expect(average(3, 4, 5, '6')).toBe(undefined);
  });
  it('expect average of () should be undefined', () => {
    expect(average()).toBe(undefined);
  });
  it('expect average of 3 should be 3', () => {
    expect(average(3)).toBe(3);
  });
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
});
