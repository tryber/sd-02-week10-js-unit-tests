/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const sumAll = params.reduce((cc, current) => cc + current);
  const media = sumAll /params.length;
  if (params.some(number => typeof number === 'string')) {
    return undefined;
  } 
  return media;
}

module.exports = average;
