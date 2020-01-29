/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(params) {
  if (typeof params === 'undefined') {
    return undefined;
  }
  const array = [...arguments];
  array = array.reduce((acc, value) => {
    return acc + value;
  }, 0) / array.length;
  return array;
}

console.log(average());

module.exports = average;
