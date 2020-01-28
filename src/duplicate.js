/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  let itemEqual;
  params.sort();
  for (let i = 0; i < params.length; i += 1) {
    if (params[i] === params[i + 1]) {
      itemEqual = params[i];
    }
  }
  return itemEqual != undefined ? true : false;
}

module.exports = duplicate;
