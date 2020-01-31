/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/
function average(...params) {
  const isNumber = !params.some(el => !(typeof el === 'number'));
  if (isNumber && (params.length !== 0)) {
    return (params.reduce((total, value) => total + value, 0) / params.length);
  }
  return undefined;
}

module.exports = average;
