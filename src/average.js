/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const isNumber = params.every(param => typeof param === 'number');
  if (isNumber !== true) {
    return undefined;
  }
  const media = params.reduce((empt, curr) => {
    empt += curr;
    return empt;
  }, 0);
  return (media / params.length);
}

module.exports = average;
