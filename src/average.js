/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  return (params.reduce((curr, acc) => curr += acc, 0) / params.length);
}

module.exports = average;
