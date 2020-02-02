/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params.every(e => typeof e === typeof 3)) {
    return params.reduce((acc, cur) => acc + cur) / params.length;
  } return undefined;
}
module.exports = average;
