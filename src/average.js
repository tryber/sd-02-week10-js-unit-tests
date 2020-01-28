/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/
const numbers = require('../src/numbers');

function average(...params) {
  if (numbers(...params)) {
    const somaReduce = params.reduce(((acum, atual) => acum + atual), 0);
    return somaReduce / params.length;
  }
  return undefined;
}

module.exports = average;
