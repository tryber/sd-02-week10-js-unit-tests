/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const duplicados = params.filter((param, indice) => params.indexOf(param) !== indice);
  if (duplicados.length === 0) return false;
  return true;
}

module.exports = duplicate;
