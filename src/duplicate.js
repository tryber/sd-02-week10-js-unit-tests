/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(params) {
  const arrayParam = Array.from(arguments)
  const repetidos = arrayParam.filter((valor, indiceDanovaArray) => arrayParam.indexOf(valor) === indiceDanovaArray);
  return arrayParam.length != repetidos.length
}

module.exports = duplicate;
