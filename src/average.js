/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(params) {
  if(typeof arguments != 'number') {
    return undefined
  }
  return (Array.from(arguments).reduce((a,b) => a+b,0))/3
}

module.exports = average;
