/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */


function duplicate(...params) {
  return !(params.length === new Set(params).size);
}

module.exports = duplicate;
