/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const total = params.reduce((acc, cur) => acc + cur)
  const media = total / params.length
  console.log(media)
}

average(9, 1, 5)

module.exports = average;
