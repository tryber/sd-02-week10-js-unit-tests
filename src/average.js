/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params.some(Element => typeof (Element) !== 'number')) {
    return undefined;
  }
  const media = (params.reduce((cur, acc) => {
    cur += acc;
    return cur;
  }, 0) / params.length);
  return media;
}

module.exports = average;
