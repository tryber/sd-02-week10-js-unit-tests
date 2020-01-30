/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const verificaNumeros = params.every(numero => (typeof numero === 'number'));
  if (verificaNumeros === true && params.length !== 0) {
    return (params.reduce((a, b) => { 
      a += b;
      return a; 
    }, 0 )) / params.length;
  }
  return undefined;
}

module.exports = average;
