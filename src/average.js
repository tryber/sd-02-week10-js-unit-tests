/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (typeof arguments != 'number') {
    return undefined
  }
  const somatorio = Array.from(arguments).reduce((a,b) => a+=b, 0)
  return somatorio/params.length
}

module.exports = average;
