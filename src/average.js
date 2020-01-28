/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/
const numbers = require('./numbers');

function average(...params) {
  const elementsAreNumber = params.every(element => typeof element === 'number');
  if (elementsAreNumber)
    return params.reduce((acc, cur) => acc + cur) / params.length;
  // if (!numbers(params)) return undefined;  
  // return params.reduce(((acc, cur) => acc + cur) / params.length);
}

module.exports = average;
