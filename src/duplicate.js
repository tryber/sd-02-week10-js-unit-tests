/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  return params.some((element, index, array) => index !== array.indexOf(element));
  // return !(params.length === new Set(params).size); // solução do Julio
}

module.exports = duplicate;
