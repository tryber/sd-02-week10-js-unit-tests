/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const duplicates = params.filter((param, index) => params.indexOf(param) !== index);
  if (duplicates.length > 0) {
    return true;
  }
  return false;
}

module.exports = duplicate;
