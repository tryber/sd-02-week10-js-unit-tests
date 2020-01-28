/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params.some(Element => typeof (Element) !== 'number')) return undefined;
  const total = params.reduce((acc, elem) => acc + elem, 0);
  return total / params.length;
}

module.exports = average;
