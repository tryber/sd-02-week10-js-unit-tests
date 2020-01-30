/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params.every(item => typeof item === 'number')) {
    return params.reduce((acumulado, item) => acumulado + item, 0) / params.length;
  }

  return undefined;
}

module.exports = average;
