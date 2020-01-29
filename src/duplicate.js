/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  return params.some((item, index) => params.some((item2, index2) => {
    if (index === index2) { return false; }
    return item === item2;
  }),
  );
}

module.exports = duplicate;
