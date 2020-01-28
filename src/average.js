/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const media = (params.reduce((cur, acc) => {
    return cur += acc;
  }, 0) / params.length);
  return media;
}

module.exports = average;
